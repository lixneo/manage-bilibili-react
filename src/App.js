import "./App.css";
import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import IndexPage from "./pages/Index";
import LoginPage from "./pages/Login";

import DetailPage from "./pages/sub/detail";
import ListPage from "./pages/sub/list";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={LoginPage} path="/login" />
        <Route
          path="/"
          render={(props) => (
            <IndexPage history={props.history}>
              <Switch>
                <Route component={ListPage} path="/sub/list" />
                <Route component={DetailPage} path="/sub/detail" />
              </Switch>
            </IndexPage>
          )}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
