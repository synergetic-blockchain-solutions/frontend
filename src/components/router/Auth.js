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
})

export default function Auth(props) {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/sign-up" component={Register} exact />
      </Switch>
    </React.Fragment>
  );
}