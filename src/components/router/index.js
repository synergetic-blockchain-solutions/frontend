import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from 'components/common/loading/Loading';
import PrivateRoute from './PrivateRoute';
import Root from 'components/Root';
import Dashboard from 'components/dashboard';
import NavBar from 'components/layout/NavBar';

const Login = Loadable({
  loader: () => import('components/auth/login'),
  loading: Loading,
});

const Register = Loadable({
  loader: () => import('components/auth/register'),
  loading: Loading,
});

const CreateArtifact = Loadable({
  loader: () => import('components/artifact/CreateArtifact'),
  loading: Loading,
});

const CreateGroup = Loadable({
  loader: () => import('components/families/CreateGroup'),
  loading: Loading,
});


const ViewFamilies = Loadable({
  loader: () => import('components/families/ViewFamilies'),
  loading: Loading,
});

const ViewMyArtifacts = Loadable({
  loader: () => import('components/artifact/ViewMyArtifacts'),
  loading: Loading,
});

const ViewSingleArtifact = Loadable({
  loader: () => import('components/artifact/ViewSingleArtifact'),
  loading: Loading,
});

const EditArtifact = Loadable({
  loader: () => import('components/artifact/EditArtifact'),
  loading: Loading,
});

const ViewFamily = Loadable({
  loader: () => import('components/families/ViewFamily'),
  loading: Loading,
});

const Profile = Loadable({
  loader: () => import('components/profile/Profile'),
  loading: Loading,
});

export default class Router extends Component {
  render() {
    return (
      <Root>
        <React.Fragment>
          <NavBar />
          <Switch>
            <PrivateRoute path="/dashboard" component={Dashboard} exact />
            <PrivateRoute path="/families" component={ViewFamilies} exact />
            <PrivateRoute path="/family/:id" component={ViewFamily} exact />
            <PrivateRoute path="/create" component={CreateArtifact} exact />
            <PrivateRoute
              path="/families/create"
              component={CreateGroup}
              exact
            />
            <PrivateRoute
              path="/my-artifacts"
              component={ViewMyArtifacts}
              exact
            />
            <PrivateRoute
              path="/artifact/:id"
              component={ViewSingleArtifact}
              exact
            />
            <PrivateRoute
              path="/artifact/edit/:id"
              component={EditArtifact}
              exact
            />
            <PrivateRoute path="/profile" component={Profile} exact />
            <Route path="/sign-up" component={Register} exact />
            <Route path="/" component={Login} exact />
          </Switch>
        </React.Fragment>
      </Root>
    );
  }
}
