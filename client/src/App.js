import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";
import Navigation from "./components/Navigation";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <Switch>
          <Route exact path="/Search" component={Search}/>
          <Route exact path="/Saved" component={Saved}/>
          <Route exact path="/" component={Search}/>
          <Route component={NoMatch} component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
