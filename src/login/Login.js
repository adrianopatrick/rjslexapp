import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

import Input from '../templates/input/Input';
import Button from '../templates/button/Button';

import {efetuarLogin, iniciarLogin} from "./actions"

import './login.css';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="login-background">
                <div className="login-title">LEXapp</div>
                <div className="login-top">Identifique-se para ter acesso ao sistema.</div>
                <div className="login-body">

                    <Input label="Usuário" type="text" onChange={(e) => this.setState({login: e.target.value})}/>
                    <Input label="Senha" type="password" onChange={(e) => this.setState({password: e.target.value})}/>

                    <Link style={{textDecoration: 'none'}} to="/painel">
                        <Button name="Entrar"
                                onClick={() => this.props.efetuarLogin(this.state.login, this.state.password)}/>
                    </Link>
                </div>
                <div className="login-footer">
                    <div className="login-footer-right">Esqueci a senha</div>
                    <div className="login-footer-author">Developed by Adriano Patrick Cunha</div>
                </div>
            </div>
        )
    }

    componentWillMount() {
        this.props.iniciarLogin();
    }
}

const mapStateToProps = state => ({
    mensagem: state.login.mensagem
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        iniciarLogin,
        efetuarLogin
    }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Login);