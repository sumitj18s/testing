import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../features/Login";

import QuestionsList from "../features/QuestionsList";

const Routing = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route path="/" component={QuestionsList} />
  </Switch>
);

export default Routing;
