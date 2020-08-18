import React, { Component } from "react";
import { Route,BrowserRouter as Router,Switch } from 'react-router-dom';
import Login from './login';
import Dashboard from './dashboard';
import history from './history';
import Addcompany from './Addcompany'
    export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/addcompany" component={Addcompany}/>
                   
                </Switch>
            </Router>
        )
    }
}
