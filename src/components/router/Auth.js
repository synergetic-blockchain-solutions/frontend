import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import Loading from 'components/common/loading/Loading';

const Login = Loadable({
  loader: () => import('components/auth/login'),
  loading: Loading,
});

const Register = Loadable({
  loader: () => import('components/auth/register'),
  loading: Loading,
});

const CreateArtefact = Loadable({
  loader: () => import('components/pages/CreateArtefact'),
  loading: Loading,
})

const CreateGroup = Loadable({
  loader: () => import('components/pages/CreateGroup'),
  loading: Loading,
})

export default function Auth(props) {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/sign-up" component={Register} exact />
        <Route path="/create-artefact" component={CreateArtefact} exact />
        <Route path="/create-group" component={CreateGroup} exact />
      </Switch>
    </React.Fragment>
  );
}
