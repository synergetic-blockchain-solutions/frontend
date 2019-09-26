import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AuthInput from 'components/common/inputs/AuthInput';
import ButtonMedium from 'components/common/buttons/ButtonMedium';
//import isEmpty from 'helpers/is-empty';
import { registerGroup } from 'actions/group';
import FormValidator from 'components/common/help-component/FormValidator';
import FormContainer from 'components/auth/FormContainer';
import ImageDropZone from "react-image-dropzone";

const Form = styled.form``;

class CreateGroup extends Component {

  validator = new FormValidator([
    {
      field: 'groupName',
      method: 'isEmpty',
      validWhen: false,
      message: 'Group name is required.',
    },
  ]);

  state = {
    groupName: '',
    coverPhoto: '',
    details: '',
    tag: '',
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

    const { groupName, coverPhoto, details, tag} = this.state;
    if (validation.isValid) {
      this.props.registerGroup(groupName, coverPhoto, details, tag);
    }
  };

  render() {
    // if the form has been submitted at least once
     // then check validity every time we render
    let validation = this.submitted 
      ? this.validator.validate(this.state)
      : this.state.validation;

    const { groupName, coverPhoto, details, tag } = this.state;

    return (
      
      <FormContainer>
        <h2><center>Add a new artefact</center></h2>
        <Form onSubmit={this.submit}>
          <AuthInput
            handleStandardChange={this.handleStandardChange}
            value={groupName}
            type="text"
            name="groupName"
            placeholder="groupName"
            marginBottom="1rem"
            label="groupName"
            error={validation.groupName.message}
          />
          <ImageDropZone
            anySize

            width={420}
            height={359}
            coverPhoto={coverPhoto}
          />
          <AuthInput
            handleStandardChange={this.handleStandardChange}
            value={details}
            type="text"
            name="details"
            placeholder="details"
            marginBottom="1rem"
            label="details"
          />
          <AuthInput
            handleStandardChange={this.handleStandardChange}
            value={tag}
            type="text"
            name="tag"
            placeholder="tag"
            marginBottom="1rem"
            label="tag"
          />
          <ButtonMedium
            clickEvent={this.submit}
            text="Add Group"
            color="btn-block btn-primary-light"
            margin="1rem 0 0 0"
          />
        </Form>
      </FormContainer>
    );
  }
}

CreateGroup.propTypes = {
  registerGroup: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  registerGroup: (groupName, coverPhoto, details, tag) =>
    dispatch(registerGroup(groupName, coverPhoto, details, tag)),
});

export default connect(
  null,
  mapDispatchToProps
)(CreateGroup);
