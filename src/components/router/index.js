import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from 'components/common/loading/Loading';
import PrivateRoute from './PrivateRoute';
import Root from 'components/Root';
import Dashboard from 'components/dashboard';

const Login = Loadable({
  loader: () => import('components/auth/login'),
  loading: Loading,
});

const Register = Loadable({
  loader: () => import('components/auth/register'),
  loading: Loading,
});

const CreateArtefact = Loadable({
  loader: () => import('components/artefact/CreateArtefact'),
  loading: Loading,
});

const CreateGroup = Loadable({
  loader: () => import('components/group/CreateGroup'),
  loading: Loading,
});

const AddMember = Loadable({
  loader: () => import('components/group/AddMember'),
  loading: Loading,
});

const ViewFamilies = Loadable({
  loader: () => import('components/families/ViewFamilies'),
  loading: Loading,
});

export default class Router extends Component {
  render() {
    return (
      <Root>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} exact />
          <PrivateRoute path="/families" component={ViewFamilies} exact />
          <PrivateRoute path="/create" component={CreateArtefact} exact />
          <PrivateRoute path="/create-group" component={CreateGroup} exact />
          <PrivateRoute path="/addMember" component={AddMember} exact />
          <Route path="/sign-up" component={Register} exact />
          <Route path="/" component={Login} exact />
        </Switch>
      </Root>
    );
  }
}
