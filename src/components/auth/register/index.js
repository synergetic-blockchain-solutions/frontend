import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RegisterForm from './RegistrationForm';
import { clearAuth } from 'actions/auth';
import Loading from 'components/common/loading/Loading';

const RegisterPage = styled.section``;

class Register extends Component {
  componentWillUnmount() {
    // reset the auth details of the redux state when leaving this page
    this.props.clearAuth();
  }

  render() {
    const { loading } = this.props;
    return (
      <RegisterPage>
        <RegisterForm />
        {loading && <Loading />}
      </RegisterPage>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  clearAuth: () => dispatch(clearAuth()),
});

Register.propTypes = {
  clearAuth: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
