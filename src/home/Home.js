import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

import Menu from './Menu';
import PainelTop from './PainelTop';
import Dashboard from "../atendimento/Dashboard";

import '../css/estilos.css';

class Home extends React.Component {

    render() {
        return (
            <div className="painel-geral">
                <div className="painel-menu">
                    <PainelTop auth={{login: "Adriano"}}/>
                    <Menu/>
                </div>

                <div className="painel-content">
                    <div className="form-content">
                        <Switch>
                            <Route path="/painel/atendimento" component={Dashboard}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.painel.auth
});

export default connect(mapStateToProps)(Home);