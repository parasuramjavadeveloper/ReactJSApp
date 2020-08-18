import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './dashboard';
import Routes from './routes';
import Addcompany from './Addcompany';
import { Route,NavLink,BrowserRouter as Router,Switch } from 'react-router-dom';



ReactDOM.render(
 <Router>
  <Routes/>
 </Router> 
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
