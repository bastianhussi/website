import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Links from "./pages/Links";

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
