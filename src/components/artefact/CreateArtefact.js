import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AuthInput from 'components/common/inputs/AuthInput';
import TextAreaInput from 'components/common/inputs/TextAreaInput';
import ButtonMedium from 'components/common/buttons/ButtonMedium';
//import isEmpty from 'helpers/is-empty';
import { registerArtefact } from 'actions/artefact';
import FormValidator from 'components/common/help-component/FormValidator';
import FormContainer from 'components/auth/FormContainer';
import ImageDropzone from 'components/common/image/ImageDropzone';

const Form = styled.form``;

const DivSpacing = styled.div`
  margin: 1rem 0;
`;

class CreateArtefact extends Component {
  validator = new FormValidator([
    {
      field: 'name',
      method: 'isEmpty',
      validWhen: false,
      message: 'name is required.',
    },
  ]);

  state = {
    name: '',
    image: '',
    tag: '',
    dateTaken: '',
    description: '',
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

    const {
      name,
      image,
      tag,
      dateTaken,
      description,
      addToFamilies,
      address,
    } = this.state;
    if (validation.isValid) {
      this.props.registerArtefact(
        name,
        image,
        tag,
        dateTaken,
        description,
        addToFamilies,
        address
      );
    }
  };

  render() {
    // if the form has been submitted at least once
    // then check validity every time we render
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    const {
      name,
      image,
      tag,
      dateTaken,
      description,
      addToFamilies,
      address,
    } = this.state;

    return (
      <FormContainer>
        <h2>
          <center>Add a new artefact</center>
        </h2>
        <Form onSubmit={this.submit}>
          <AuthInput
            handleStandardChange={this.handleStandardChange}
            value={name}
            type="text"
            name="name"
            placeholder="Name"
            marginBottom="1rem"
            label="Name"
            error={validation.name.message}
          />
          <DivSpacing>
            <ImageDropzone />
          </DivSpacing>
          <AuthInput
            handleStandardChange={this.handleStandardChange}
            value={tag}
            type="text"
            name="tag"
            placeholder="Tag"
            marginBottom="1rem"
            label="Tag"
          />
          <AuthInput
            handleStandardChange={this.handleStandardChange}
            value={dateTaken}
            type="date"
            name="dateTaken"
            placeholder="Date Taken"
            marginBottom="1rem"
            label="Date Taken"
          />
          <TextAreaInput
            handleStandardChange={this.handleStandardChange}
            value={description}
            type="text"
            name="description"
            placeholder="Description"
            marginBottom="1rem"
            label="Description"
          />
          <AuthInput
            handleStandardChange={this.handleStandardChange}
            value={addToFamilies}
            type="text"
            name="addToFamilies"
            placeholder="Add To Families"
            marginBottom="1rem"
            label="Add To Families"
          />
          <AuthInput
            handleStandardChange={this.handleStandardChange}
            value={address}
            type="text"
            name="address"
            placeholder="Address"
            marginBottom="1rem"
            label="Address"
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
};

const mapDispatchToProps = dispatch => ({
  registerArtefact: (
    name,
    image,
    tag,
    dateTaken,
    description,
    addToFamilies,
    address
  ) =>
    dispatch(
      registerArtefact(
        name,
        image,
        tag,
        dateTaken,
        description,
        addToFamilies,
        address
      )
    ),
});

export default connect(
  null,
  mapDispatchToProps
)(CreateArtefact);
