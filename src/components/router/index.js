import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from 'components/common/loading/Loading';
import PrivateRoute from './PrivateRoute';
import Root from 'components/Root';
import NavBar from 'components/layout/NavBar';

const NotFound = Loadable({
  loader: () => import('components/common/NotFound'),
  loading: Loading,
});

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

const ResourcePage = Loadable({
  loader: () => import('components/resource/ResourcePage'),
  loading: Loading,
});

const ResourceEditPage = Loadable({
  loader: () => import('components/resource/EditResourcePage'),
  loading: Loading,
});

const CreateOptions = Loadable({
  loader: () => import('components/single-pages/CreateOptions'),
  loading: Loading,
});

const CreateAlbum = Loadable({
  loader: () => import('components/album/Create'),
  loading: Loading,
});

const ViewAlbum = Loadable({
  loader: () => import('components/album/ViewAlbum'),
  loading: Loading,
});

export default class Router extends Component {
  render() {
    return (
      <Root>
        <React.Fragment>
          <NavBar />
          <Switch>
            <PrivateRoute path="/families" component={ViewFamilies} exact />
            <PrivateRoute path="/family/:id" component={ViewFamily} exact />
            <PrivateRoute path="/create" component={CreateOptions} exact />
            <PrivateRoute path="/album/create" component={CreateAlbum} exact />
            <PrivateRoute path="/album/:id" component={ViewAlbum} exact />
            <PrivateRoute
              path="/artifact/create"
              component={CreateArtifact}
              exact
            />
            <PrivateRoute
              path="/artifact/:artifactId/resource/:resourceId/edit"
              component={ResourceEditPage}
              exact
            />
            <PrivateRoute
              path="/artifact/:artifactId/resource/:resourceId"
              exact
              component={ResourcePage}
            />
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
            <Route path="*" component={NotFound} />
          </Switch>
        </React.Fragment>
      </Root>
    );
  }
}
