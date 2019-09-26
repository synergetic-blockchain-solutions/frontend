import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
  render() {
    const { component: Component, auth, ...rest } = this.props;
    console.log(this.props);
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
  auth: PropTypes.shape({
    exp: PropTypes.number,
    iat: PropTypes.number,
    nbf: PropTypes.number,
    sub: PropTypes.number,
    iss: PropTypes.string,
    jti: PropTypes.string,
    prv: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    subjects: PropTypes.arrayOf(PropTypes.object),
  }),
};

const mapStateToProps = state => ({
  auth: state.auth.token,
});

export default connect(mapStateToProps)(PrivateRoute);
