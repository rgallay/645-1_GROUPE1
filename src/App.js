import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Conversation from "./pages/Conversation";
import ListePostulants from "./pages/ListePostulants";
import Companies from "./pages/Companies";
import Login from "./pages/Login";
import ListeOffres from "./pages/ListeOffres"
import Navigation from "./pages/Navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the WeAll Chat</p>
        <Navigation/>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/companies" component={Companies} />
            <Route path="/conversation" component={Conversation} />
            <Route path="/listeOffres" component={ListeOffres} />
            <Route path="/candidats" component={ListePostulants} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
