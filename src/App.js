import "./App.css";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import ListePostulants from "./pages/ListePostulants";
import Companies from "./pages/Companies";
import Login from "./pages/Login";
import ListeOffres from "./pages/ListeOffres"
import NavigationUser from "./pages/NavigationUser";
import NavigationEntreprise from "./pages/NavigationEnterprise";
import {ID_USER_CONNECTED, TOKEN_STORAGE_KEY, TYPE_USER_CONNECTED} from "./utils/request";
import React, {useEffect, useState} from "react";
import ListeConversations from "./pages/ListeConversations";


function App() {


  const user = localStorage.getItem(TYPE_USER_CONNECTED);
  const userLogged = localStorage.getItem(ID_USER_CONNECTED);
  console.log(userLogged);
  console.log(user);
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the WeAll Chat</p>


        { userLogged <1 ? null : user === 1 ? (<NavigationEntreprise/>) :  (<NavigationUser/>) }

        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/companies" component={Companies} />
            <Route path="/listeconversations" component={ListeConversations} />
            <Route path="/listeOffres" component={ListeOffres} />
            <Route path="/candidats" component={ListePostulants} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
