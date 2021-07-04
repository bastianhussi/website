import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Links from "./pages/Links";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./store/index";
import { ThemeState } from "./store/theme/types";

const GlobalStyle = createGlobalStyle<ThemeState>`
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
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.foreground};
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
  const [themeState, setThemeState] = useState<ThemeState>(store.getState());

  store.subscribe(() => {
    setThemeState(store.getState());
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeState.theme}>
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
      <Footer />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
