import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import { clearAuth } from 'actions/auth';

const LoginPage = styled.section``;

class Login extends Component {
  componentWillUnmount() {
    // this.props.clearAuth();
  }

  render() {
    return (
      <LoginPage>
        <LoginForm />
      </LoginPage>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  clearAuth: () => dispatch(clearAuth()),
});

Login.propTypes = {
  clearAuth: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
