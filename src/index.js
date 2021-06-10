import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./pages/Login";
import Companies from "./pages/Companies";
import Conversation from "./Compenents/Conversation";
import ListeOffres from "./pages/ListeOffres";
import ListePostulants from "./pages/ListePostulants";

ReactDOM.render(
  <Router>
      <BrowserRouter>
          <Switch>
              <App />
          </Switch>
      </BrowserRouter>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
