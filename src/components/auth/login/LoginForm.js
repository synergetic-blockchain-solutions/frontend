import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import AuthInput from 'components/common/inputs/AuthInput';
import Logo from 'components/common/visual/Logo';
import ButtonLarge from 'components/common/buttons/ButtonLarge';
import isEmpty from 'helpers/is-empty';
import { loginUser } from 'actions/auth';
import FormValidator from 'components/common/help-component/FormValidator';
import FormContainer from 'components/common/containers/FormDisplayContainer';
import { Center } from 'components/auth/register/RegistrationForm';
import { Error } from 'components/common/inputs/InputHelpers';

const Form = styled.form``;

export const ErrorMessage = styled(Error)`
  margin: 1rem 0;
`;

class LoginForm extends Component {
  validator = new FormValidator([
    {
      field: 'email',
      method: 'isEmail',
      validWhen: true,
      message: 'That is not a valid email.',
    },
    {
      field: 'password',
      method: 'isEmpty',
      validWhen: false,
      message: 'Password is required.',
    },
  ]);

  state = {
    email: '',
    password: '',
    validation: this.validator.valid(),
  };

  componentDidMount() {
    if (!isEmpty(this.props.auth.token)) {
      this.props.history.push('/my-artifacts');
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!isEmpty(nextProps.auth.token)) {
      this.props.history.push('/my-artifacts');
    }
    return true;
  }

  submitted = false;

  handleStandardChange = e =>
    this.setState({ [e.target.name]: e.target.value });

  submit = e => {
    e.preventDefault();

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    const { email, password } = this.state;
    if (validation.isValid) {
      this.props.loginUser(email, password);
    }
  };

  render() {
    // if the form has been submitted at least once
    // then check validity every time we render
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    const { email, password } = this.state;
    const { errors } = this.props.auth;

    return (
      <FormContainer>
        <Logo />
        <Form onSubmit={this.submit}>
          <AuthInput
            handleStandardChange={this.handleStandardChange}
            value={email}
            type="email"
            name="email"
            placeholder="Email"
            marginBottom="1rem"
            label="Email"
            error={validation.email.message}
          />
          <AuthInput
            handleStandardChange={this.handleStandardChange}
            value={password}
            type="password"
            name="password"
            placeholder="Password"
            marginBottom="1rem"
            label="Password"
            error={validation.password.message}
          />
          {!isEmpty(errors) && (
            <ErrorMessage>
              Either the password or the email are incorrect
            </ErrorMessage>
          )}
          <Center>
            <ButtonLarge
              clickEvent={this.submit}
              text="Log In"
              disabled={isEmpty(email) || isEmpty(password)}
              color="dark-brown"
              margin="1rem 0 0 0"
            />
          </Center>
        </Form>
      </FormContainer>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  loginUser: (email, password) => dispatch(loginUser(email, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginForm));
