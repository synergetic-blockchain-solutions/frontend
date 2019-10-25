import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RegisterForm from './RegistrationForm';
import { clearAuth } from 'actions/auth';

const RegisterPage = styled.section``;

class Register extends Component {
  componentWillUnmount() {
    this.props.clearAuth();
  }

  render() {
    return (
      <RegisterPage>
        <RegisterForm />
      </RegisterPage>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  clearAuth: () => dispatch(clearAuth()),
});

Register.propTypes = {
  clearAuth: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
