import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import Loading from 'components/common/loading/Loading';

const ViewFamilies = Loadable({
  loader: () => import('components/families/ViewFamilies'),
  loading: Loading,
});

export default function Families() {
  return (
    <Switch>
      <Route path="/families" component={ViewFamilies} exact />
    </Switch>
  );
}
