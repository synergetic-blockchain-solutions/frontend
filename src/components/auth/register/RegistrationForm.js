import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AuthInput from 'components/common/inputs/AuthInput';
import Logo from 'components/common/visual/Logo';
import ButtonLarge from 'components/common/buttons/ButtonLarge';
import isEmpty from 'helpers/is-empty';
import { registerUser } from 'actions/auth';
import { REGISTER_SUCCESS } from 'actions/types';
import FormValidator from 'components/common/help-component/FormValidator';
import FormContainer from 'components/common/containers/FormDisplayContainer';
import Success from 'components/common/visual/Success';

const Form = styled.form``;

export const Center = styled.div`
  text-align: center;
`;

class RegistrationForm extends Component {
  _isMounted = false;

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
    success: false,
  };

  componentDidMount() {
    this._isMounted = true;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.auth.success === REGISTER_SUCCESS) {
      return {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        success: true,
      };
    } else {
      return { ...prevState };
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.auth.success === REGISTER_SUCCESS) {
  //     this.props.history.push('/');
  //   }
  //   return true;
  // }

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

  componentWillUnmount() {
    this.setState({
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      success: false,
    });
    this._isMounted = false;
  }

  render() {
    // if the form has been submitted at least once
    // then check validity every time we render
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    const { name, email, password, passwordConfirm, success } = this.state;

    return (
      <FormContainer>
        {success ? (
          <Success
            text="You have been successfully registered"
            linkAddress="/"
            linkText="Back To Login"
          />
        ) : (
          <React.Fragment>
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
              <Center>
                <ButtonLarge
                  clickEvent={this.submit}
                  Link
                  to="/"
                  text="Sign Up Now!"
                  disabled={
                    isEmpty(name) ||
                    isEmpty(email) ||
                    isEmpty(password) ||
                    isEmpty(passwordConfirm)
                  }
                  color="btn-block dark-brown"
                  margin="1rem 0 0 0"
                />
              </Center>
            </Form>
          </React.Fragment>
        )}
      </FormContainer>
    );
  }
}

RegistrationForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  registerUser: (name, email, password) =>
    dispatch(registerUser(name, email, password)),
});

const mapStateToProps = state => ({
  auth: state.auth,
});

<<<<<<< HEAD
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);
=======
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegistrationForm)
);
>>>>>>> 6dc139ab7b0e2e15cb27cf164dd5f1492d6554f4
