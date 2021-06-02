import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Conversation from "./pages/Conversation";
import Companies from "./pages/Companies";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Candidat from "./pages/Candidat";

function App() {
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
            <Route path="/Candidat" component={Candidat} />

          </Switch>
        </BrowserRouter>
      </header>

    </div>
  );
}

export default App;
