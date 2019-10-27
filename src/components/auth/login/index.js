import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import Loading from 'components/common/loading/Loading';

const LoginPage = styled.section``;

/**
 * @desc Login component is made as a container for the LoginForm and is
 * made to help if login needs to be extended
 */
class Login extends Component {
  render() {
    const { loading } = this.props;
    return (
      <LoginPage>
        <LoginForm />
        {loading && <Loading />}
      </LoginPage>
    );
  }
}

Login.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps)(Login);
