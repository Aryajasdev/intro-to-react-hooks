import React from "react";

import { Switch, Route } from "react-router";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import ThemeProvider from "./themeContext";

import ClassComponent from "./classComponent";
import HookComponent from "./hookComponent";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="navbar">
          <NavLink to="/class">😒 Class</NavLink>
          <NavLink to="/hook">😎 Hook</NavLink>
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/class" component={ClassComponent} />
            <Route exact path="/hook" component={HookComponent} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
