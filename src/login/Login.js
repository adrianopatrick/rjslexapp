import React from 'react';

import Input from '../templates/input/Input';
import Button from '../templates/button/Button';

import './login.css';

class Login extends React.Component {

    render() {
        return (
            <div className="login-background">
                <div className="login-title">LEXapp</div>
                <div className="login-top">Identifique-se para ter acesso ao sistema.</div>
                <div className="login-body">

                    <Input label="Usuário"/>
                    <Input label="Senha"/>

                    <Button name="Entrar"/>
                </div>
                <div className="login-footer">
                    <div className="login-footer-right">Esqueci a senha</div>
                </div>
            </div>
        )
    }
}

export default Login;