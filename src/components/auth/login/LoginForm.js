import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import AuthInput from 'components/common/inputs/AuthInput';
import Logo from 'components/common/visual/Logo';
import ButtonMedium from 'components/common/buttons/ButtonMedium';
import isEmpty from 'helpers/is-empty';
import { loginUser } from 'actions/auth';
import FormValidator from '../../common/help-component/FormValidator';

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

  submitted = false;


  handleStandardChange = e =>
    this.setState({ [e.target.name]: e.target.value });

  submit = e => {
    e.preventDefault();

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    const {email, password} = this.state;
    console.log(this.state);
    if (validation.isValid) {
      this.props.loginUser({email, password});
    }
  };

  render() {
    let validation = this.submitted // if the form has been submitted at least once
      ? this.validator.validate(this.state) // then check validity every time we render
      : this.state.validation;

    const {email, password} = this.state;

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
          <ButtonMedium
            clickEvent={this.submit}
            text="Log In"
            disabled={
              isEmpty(email) ||
              isEmpty(password)
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
  loginUser: (email, password) =>
    dispatch(loginUser(email, password)),
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
