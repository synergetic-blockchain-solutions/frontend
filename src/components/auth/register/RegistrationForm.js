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
import Modal from 'react-modal';
import { REGISTER_FAILURE } from '../../../actions/types';

const Form = styled.form``;


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

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
    modalIsOpen: false,
  };

  openModal = this.openModal.bind(this);
  afterOpenModal = this.afterOpenModal.bind(this);
  closeModal = this.closeModal.bind(this);

  submitted = false;

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

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
      this.props.registerUser(name, email, password)
      .then()
      .then(data=>{
        if(REGISTER_FAILURE){
          return data.message;
        }else{
          this.openModal(e);
        }
      })
      ;
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
        <Form onSubmit={this.submit} id= 'form'>
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
            clickEvent={(e) => { this.submit(e);}}
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
          <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          style= {customStyles}
          ariaHideApp={false}
          onRequestClose={this.closeModal}
          contentLabel="Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Successfully Registered</h2>
          <button onClick={this.closeModal}>close</button>
          <button><Link to= "/">Log in</Link></button>
        </Modal>
        </Form>
        <Link to="/" className="btn btn-link">
          Already registered? Log in!
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
