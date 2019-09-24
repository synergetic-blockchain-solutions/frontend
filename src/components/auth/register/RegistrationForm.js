import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AuthInput from 'components/common/inputs/AuthInput';
import Logo from 'components/common/visual/Logo';
import ButtonMedium from 'components/common/buttons/ButtonMedium';
import isEmpty from 'helpers/is-empty';
import { registerUser } from 'actions/auth';
import FormValidator from 'components/common/help-component/FormValidator';
import FormContainer from 'components/auth/FormContainer';

const Form = styled.form``;


class RegistrationForm extends Component {

  validator = new FormValidator([
    {
      field: 'name',
      method: 'isEmpty',
      validWhen: false,
      message: 'Name is required.',
    },
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
    {
      field: 'passwordConfirm',
      method: 'isEmpty',
      validWhen: false,
      message: 'Password confirmation is required.',
    },
    {
      field: 'passwordConfirm',
      // notice that we are passing a custom function here
      method: (confirmation, state) => this.passwordMatch(confirmation, state),
      validWhen: true,
      message: 'Password and password confirmation do not match.',
    },
  ]);

  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    validation: this.validator.valid(),
  };

  submitted = false;

  passwordMatch = (confirmation, state) => state.password === confirmation;

  handleStandardChange = e =>
    this.setState({ [e.target.name]: e.target.value });

  submit = e => {
    e.preventDefault();

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    const { name, email, password } = this.state;
    if (validation.isValid) {
      this.props.registerUser(name, email, password);
    }
  };

  render() {
    // if the form has been submitted at least once
    // then check validity every time we render
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    const { name, email, password, passwordConfirm } = this.state;

    console.log('here');

    return (
      <FormContainer>
        <Logo />
        <Form onSubmit={this.submit}>
          <AuthInput
            handleStandardChange={this.handleStandardChange}
            value={name}
            type="text"
            name="name"
            placeholder="Full Name"
            marginBottom="1rem"
            label="Full Name"
            error={validation.name.message}
          />
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
          <AuthInput
            handleStandardChange={this.handleStandardChange}
            value={passwordConfirm}
            type="password"
            name="passwordConfirm"
            placeholder="Confirm Password"
            marginBottom="1rem"
            label="Confirm Password"
            error={validation.passwordConfirm.message}
          />
          <ButtonMedium
            clickEvent={this.submit}
            text="Sign Up Now!"
            disabled={
              isEmpty(name) ||
              isEmpty(email) ||
              isEmpty(password) ||
              isEmpty(passwordConfirm)
            }
            color="btn-block btn-primary-light"
            margin="1rem 0 0 0"
          />
        </Form>
        <Link to="/" className="btn btn-link">
          Already registered? Log in!
        </Link>
        <Link to="/addMember" className="btn btn-link">
          AddMembers
        </Link>
      </FormContainer>
    );
  }
}

RegistrationForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  registerUser: (name, email, password) =>
    dispatch(registerUser(name, email, password)),
});

export default connect(
  null,
  mapDispatchToProps
)(RegistrationForm);
