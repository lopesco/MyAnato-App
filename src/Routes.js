import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import MainPage from "./containers/MainPage";
import Page1 from "./containers/Page1";
import Page2 from "./containers/Page2";
import Page3 from "./containers/Page3";
import Page4 from "./containers/Page4";
import Page5 from "./containers/Page5";
import Page6 from "./containers/Page6";
import Page7 from "./containers/Page7";

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/mainpage" exact component={MainPage} />
    <Route path="/page1" exact component={Page1} />
    <Route path="/page2" exact component={Page2} />
    <Route path="/page3" exact component={Page3} />
    <Route path="/page4" exact component={Page4} />
    <Route path="/page5" exact component={Page5} />
    <Route path="/page6" exact component={Page6} />
    <Route path="/page7" exact component={Page7} />
    <Route component={NotFound} />
  </Switch>
);
