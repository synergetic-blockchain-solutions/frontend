import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AuthInput from 'components/common/inputs/AuthInput';
import ButtonMedium from 'components/common/buttons/ButtonMedium';
//import isEmpty from 'helpers/is-empty';
import { registerArtefact } from 'actions/flow';
import FormValidator from 'components/common/help-component/FormValidator';
import FormContainer from 'components/auth/FormContainer';
import ImageDropZone from "react-image-dropzone";

const Form = styled.form``;

class CreateArtefact extends Component {

  validator = new FormValidator([
    {
      field: 'title',
      method: 'isEmpty',
      validWhen: false,
      message: 'Title is required.',
    },
  ]);

  state = {
    title: '',
    image: '',
    tag: '',
    dateTaken: '',
    details: '',
    addToFamilies: '',
    address: '',
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

    const { title, image, tag, dateTaken, details, addToFamilies, address} = this.state;
    if (validation.isValid) {
      this.props.registerArtefact(title, image, tag, dateTaken, details, addToFamilies, address);
    }
  };

  render() {
    // if the form has been submitted at least once
     // then check validity every time we render
    let validation = this.submitted 
      ? this.validator.validate(this.state)
      : this.state.validation;

    const { title, image, tag, dateTaken, details, addToFamilies, address } = this.state;

    return (
      
      <FormContainer>
        <h2><center>Add a new artefact</center></h2>
        <Form onSubmit={this.submit}>
          <AuthInput
            handleStandardChange={this.handleStandardChange}
            value={title}
            type="text"
            name="title"
            placeholder="title"
            marginBottom="1rem"
            label="title"
            error={validation.title.message}
          />
          <ImageDropZone
            anySize

            width={420}
            height={359}
            image={image}
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
          <AuthInput
            handleStandardChange={this.handleStandardChange}
            value={dateTaken}
            type="date"
            name="dateTaken"
            placeholder="dateTaken"
            marginBottom="1rem"
            label="dateTaken"
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
            value={addToFamilies}
            type="text"
            name="addToFamilies"
            placeholder="addToFamilies"
            marginBottom="1rem"
            label="addToFamilies"
          />
          <AuthInput
            handleStandardChange={this.handleStandardChange}
            value={address}
            type="text"
            name="address"
            placeholder="address"
            marginBottom="1rem"
            label="address"
          />
          <ButtonMedium
            clickEvent={this.submit}
            text="Add Artefact"
            color="btn-block btn-primary-light"
            margin="1rem 0 0 0"
          />
        </Form>
      </FormContainer>
    );
  }
}

CreateArtefact.propTypes = {
  registerArtefact: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  registerArtefact: (title, image, tag, dateTaken, details, addToFamilies, address) =>
    dispatch(registerArtefact(title, image, tag, dateTaken, details, addToFamilies, address)),
});

export default connect(
  null,
  mapDispatchToProps
)(CreateArtefact);