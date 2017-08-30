import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

import Menu from './Menu';
import PainelTop from './PainelTop';
import DashboardAtendimento from "../atendimento/Dashboard";

import '../css/estilos.css';
import DashboardAcolhimento from "../acolhimento/Dashboard";

class Home extends React.Component {

    render() {
        return (
            <div className="painel-geral">
                <div className="painel-menu">
                    <PainelTop auth={{login: "Adriano"}}/>
                    <Menu location={this.props.location}/>
                </div>
                <div className="painel-content">
                    <div className="painel-logout"></div>
                    <Switch>
                        <Route path="/painel/atendimento" component={DashboardAtendimento} />
                        <Route path="/painel/acolhimento" component={DashboardAcolhimento} />
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.painel.auth
});

export default connect(mapStateToProps)(Home);