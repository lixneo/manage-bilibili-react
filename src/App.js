import "./App.css";
import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import IndexPage from "./pages/Index";
import LoginPage from "./pages/Login";

import CoursePage from "./pages/sub/course";
import RecomCoursePage from "./pages/sub/recom_course";
import SliderPage from "./pages/sub/slider";
import CollectionPage from "./pages/sub/collection";
import TeacherPage from "./pages/sub/teacher";
import StudentPage from "./pages/sub/student";
import CrawlerPage from "./pages/sub/crawler";
import ErrorPage from "./pages/sub/error";

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
                <Route component={CoursePage} path="/course" />
                <Route component={RecomCoursePage} path="/recom_course" />
                <Route component={SliderPage} path="/slider" />
                <Route component={CollectionPage} path="/collection" />
                <Route component={TeacherPage} path="/teacher" />
                <Route component={StudentPage} path="/student" />
                <Route component={CrawlerPage} path="/crawler" />
                <Route component={ErrorPage} />
              </Switch>
            </IndexPage>
          )}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
