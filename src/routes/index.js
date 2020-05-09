import React from "react";
import { Route, Switch } from "react-router-dom";
import QuestionsList from "../pages/Questions";
import QuestionDetail from "../pages/QuestionDetails";

const Routing = () => (
  <Switch>
    <Route exact path="/detail" component={QuestionDetail} />
    <Route path="/" component={QuestionsList} />
  </Switch>
);

export default Routing;
