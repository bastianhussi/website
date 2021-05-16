import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Links from "./components/Links";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/links" component={Links} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
