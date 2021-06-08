import "./App.css";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import Conversation from "./pages/Conversation";
import Companies from "./pages/Companies";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Candidat from "./pages/Candidat";

import React, { useEffect, useState } from "react";
import {Backend} from "./services/backend";



function App() {

  function BlogPost() {
    let { slug } = useParams();
    return <div>Now showing post {slug}</div>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the WeAll Chat</p>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/companies" component={Companies} />
            <Route path="/conversation" component={Conversation} />
            <Route path="/login" component={Login} />
            <Route path="/candidat/:slug">
              <Candidat />
            </Route>
            <Route path="" render={()=> <div>Route Inconnue</div>} />

          </Switch>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
