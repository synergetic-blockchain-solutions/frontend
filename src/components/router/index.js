import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Auth';
import PrivateRoute from './PrivateRoute';
import Root from 'components/Root';
import Dashboard from 'components/dashboard';
import Families from './Families';

export default class Router extends Component {
  render() {
    return (
      <Root>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} exact />
          <Route path="/families">
            <Families />
          </Route>
          <Route path="/">
            <Auth />
          </Route>
        </Switch>
      </Root>
    );
  }
}
