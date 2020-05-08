import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from '../features/Login'
import Dashboard from '../features/Dashboard'

const Routing = () => (
  <Switch>
    <Route exact path='/login' component={Login} />
    <Route exact path='/dashboard' component={Dashboard} />
    <Route path='/' component={Login} />
  </Switch>
)

export default Routing