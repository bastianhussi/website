import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Links from "./pages/Links";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ flexGrow: 1 }}>
        <Switch>
          <Route path="/links" component={Links} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
      <Footer>
        Made with
        <p>
          <a href="https://reactjs.org/" target="_blank">
            React.js
          </a>
        </p>
        <p>2021</p>
      </Footer>
    </Router>
  );
}

export default App;
