import React from "react";
import { Route, Switch } from "react-router-dom";
import QuestionsList from "../features/QuestionsList";
import QuestionDetail from "../features/QuestionDetail";

const Routing = () => (
  <Switch>
    <Route exact path="/detail" component={QuestionDetail} />
    <Route path="/" component={QuestionsList} />
  </Switch>
);

export default Routing;
