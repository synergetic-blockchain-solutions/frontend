import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AuthInput from 'components/common/inputs/AuthInput';
import ButtonMedium from 'components/common/buttons/ButtonMedium';
//import isEmpty from 'helpers/is-empty';
import { addMemberToGroup } from 'actions/group';
import FormValidator from 'components/common/help-component/FormValidator';
import FormContainer from 'components/auth/FormContainer';

const Form = styled.form``;

class AddMember extends Component {

  validator = new FormValidator([
    {
        field: 'memberEmail',
        method: 'isEmail',
        validWhen: true,
        message: 'That is not a valid email.',
      },
  ]);

  state = {
    memberEmail: '',
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

    const { memberEmail} = this.state;
    if (validation.isValid) {
      this.props.addMemberToGroup(memberEmail);
    }
  };

  render() {
    // if the form has been submitted at least once
     // then check validity every time we render
    let validation = this.submitted 
      ? this.validator.validate(this.state)
      : this.state.validation;

    const { memberEmail } = this.state;

    return (
      
      <FormContainer>
        <h2><center>Add a new Member to the group</center></h2>
        <Form onSubmit={this.submit}>
          <AuthInput
            handleStandardChange={this.handleStandardChange}
            value={memberEmail}
            type="email"
            name="memberEmail"
            placeholder="Member email"
            marginBottom="1rem"
            label="Member email"
            error={validation.memberEmail.message}
          />
          <ButtonMedium
            clickEvent={this.submit}
            text="Add Member"
            color="btn-block btn-primary-light"
            margin="1rem 0 0 0"
          />
        </Form>
      </FormContainer>
    );
  }
}

AddMember.propTypes = {
  addMemberToGroup: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  addMemberToGroup: (memberEmail) =>
    dispatch(addMemberToGroup(memberEmail)),
});

export default connect(
  null,
  mapDispatchToProps
)(AddMember);
