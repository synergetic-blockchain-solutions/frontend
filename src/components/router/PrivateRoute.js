import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsersOwnData } from 'actions/auth';
import isEmpty from 'helpers/is-empty';

/**
 * @prop { object } subjectTopics
 * @prop { object } user
 * @prop { object } auth
 * @desc Private route has the responsibility to redirect the user
 * if the user has not got a valid token. It also is responsible for
 * getting the topics for the users subjects
 */
class PrivateRoute extends Component {
  componentDidMount() {
    if (isEmpty(this.props.user)) {
      this.props.getUsersOwnData();
    }
  }

  render() {
    const { component: Component, auth, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          !isEmpty(auth) ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
  }
}

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getUsersOwnData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth.token,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  getUsersOwnData: () => dispatch(getUsersOwnData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
