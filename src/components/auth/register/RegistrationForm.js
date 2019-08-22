import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AuthInput from 'components/common/inputs/AuthInput';
import Logo from 'components/common/visual/Logo';
import ButtonMedium from 'components/common/buttons/ButtonMedium';
import isEmpty from 'helpers/is-empty';
import { registerUser } from 'actions/auth';

const FormContainer = styled.div`
  position: absolute;
  top: 10rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => props.theme.colors.colorLightBlue};
  padding: 3rem;
  border-radius: 30px;
`;

const Form = styled.form``;

class RegistrationForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  handleStandardChange = e =>
    this.setState({ [e.target.name]: e.target.value });

  submit = e => {
    e.preventDefault();
    const { name, email, password, passwordConfirm } = this.state;
    console.log(this.state);
    this.props.registerUser(name, email, password, passwordConfirm);
  };

  render() {
    const { name, email, password, passwordConfirm } = this.state;

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
          />
          <AuthInput
            handleStandardChange={this.handleStandardChange}
            value={email}
            type="email"
            name="email"
            placeholder="Email"
            marginBottom="1rem"
            label="Email"
          />
          <AuthInput
            handleStandardChange={this.handleStandardChange}
            value={password}
            type="password"
            name="password"
            placeholder="Password"
            marginBottom="1rem"
            label="Password"
          />
          <AuthInput
            handleStandardChange={this.handleStandardChange}
            value={passwordConfirm}
            type="password"
            name="passwordConfirm"
            placeholder="Confirm Password"
            marginBottom="1rem"
            label="Confirm Password"
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
      </FormContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  registerUser: (name, email, password, passwordConfirm) =>
    dispatch(registerUser(name, email, password, passwordConfirm)),
});

export default connect(
  null,
  mapDispatchToProps
)(RegistrationForm);
