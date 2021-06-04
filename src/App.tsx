import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Links from "./pages/Links";
import { Link } from "./components/Custom";
import styled, { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
html {
  font-family: "Fira Sans", sans-serif;
  font-size: larger;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  position: relative;
}

#root {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
`;

const Content = styled.div`
  flex-grow: 1;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Content>
          <Switch>
            <Route path="/links" component={Links} />
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </Content>
        <Footer>
          <p>2021</p>
          <p>
            Made with
            <Link href="https://reactjs.org/" target="_blank">
              React.js
            </Link>
          </p>
        </Footer>
      </Router>
    </>
  );
}

export default App;

