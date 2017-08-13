import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Menu from './Menu';
import PainelTop from './PainelTop';
import Dashboard from "../atendimento/Dashboard";

import '../css/estilos.css';

const Home = () => (
    <div>
        <PainelTop/>
        <Menu/>

        <div className="form-content">
            <Switch>
                <Route path="/painel/atendimento" component={Dashboard}/>
            </Switch>
        </div>
    </div>
);

export default Home;