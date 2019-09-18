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
        <Route
          render={({ location }) => (
            <React.Fragment>
              <Switch>
                <Route path="/dashboard" component={Dashboard} exact />
                <Route path="/families" component={Families} exact />
                <Route path="/">
                  <Auth location={location} />
                </Route>
              </Switch>
            </React.Fragment>
          )}
        />
      </Root>
    );
  }
}
