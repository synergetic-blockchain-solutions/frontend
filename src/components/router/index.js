import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Auth';
import Root from 'components/Root'


export default class Router extends Component {
  render() {
    return (
      <Root>
        <Route
          render={({ location }) => (
            <React.Fragment>
              <Switch>
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
