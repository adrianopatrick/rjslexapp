import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from "../login/Login";
import Home from "../home/Home";

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/painel" component={Home}/>
        </Switch>
    </main>
);

export default Main;