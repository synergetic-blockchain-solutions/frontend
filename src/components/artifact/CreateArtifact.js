import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AuthInput from 'components/common/inputs/AuthInput';
import TextAreaInput from 'components/common/inputs/TextAreaInput';
import ButtonMedium from 'components/common/buttons/ButtonMedium';
//import isEmpty from 'helpers/is-empty';
import { registerArtifact, resetArtifact } from 'actions/artifact';
import { addResourceToArtifact } from 'actions/resource';
import { REGISTER_ARTIFACT_SUCCESS } from 'actions/types';
import FormValidator from 'components/common/help-component/FormValidator';
import FormContainer from 'components/common/containers/FormDisplayContainer';
import ImageDropzone from 'components/common/image/ImageDropzone';
import ImagePreview from 'components/common/image/ImagePreview';
import isEmpty from 'helpers/is-empty';
import Success from 'components/common/visual/Success';

const Form = styled.form``;

const DivSpacing = styled.div`
  margin: 1rem 0;
`;

class CreateArtifact extends Component {
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
    image: [],
    tag: '',
    dateTaken: '',
    description: '',
    addToFamilies: '',
    address: '',
    validation: this.validator.valid(),
    finished: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      !isEmpty(nextProps.artifact.artifact) &&
      nextProps.artifact.success === REGISTER_ARTIFACT_SUCCESS &&
      !isEmpty(prevState.image)
    ) {
      for (let file in prevState.image) {
        let formData = new FormData();
        formData.append(
          'metadata',
          JSON.stringify({
            name: 'flathem',
            description: 'flathem',
          })
        );
        formData.append('resource', prevState.image[file].file);
        nextProps.addResourceToArtifact(
          nextProps.artifact.artifact.id,
          formData
        );
      }
    }

    if (
      nextProps.artifact.successCount === prevState.image.length &&
      nextProps.artifact.success
    ) {
      return { finished: true };
    }
    return prevState;
  }

  componentWillUnmount() {
    this.props.resetArtifact();
  }

  submitted = false;

  handleStandardChange = e =>
    this.setState({ [e.target.name]: e.target.value });

  recieveImage = image => {
    this.setState(prevState => {
      return { image: [...prevState.image, image] };
    });
  };

  deleteImage = e => {
    const name = e.target.name.toString();
    this.setState(prevState => ({
      image: prevState.image.filter((img, index) => {
        return index.toString() !== name;
      }),
    }));
  };

  submit = e => {
    e.preventDefault();

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    const {
      name,
      tag,
      dateTaken,
      description,
      addToFamilies,
      address,
    } = this.state;

    if (validation.isValid) {
      this.props.registerArtifact(
        name,
        tag,
        dateTaken,
        description,
        addToFamilies,
        address
      );
    }
  };

  render() {
    console.log(this.state);
    // if the form has been submitted at least once
    // then check validity every time we render
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    const {
      name,
      tag,
      dateTaken,
      description,
      addToFamilies,
      address,
      image,
      finished,
    } = this.state;

    const { artifact } = this.props.artifact;

    return (
      <FormContainer>
        {finished ? (
          <Success
            text="Artifact Was Created Successfully"
            linkAddress={`/artifact/${artifact.id}`}
            linkText="Click Here To View Artifact"
          />
        ) : (
          <React.Fragment>
            <h2>
              <center>Add a new artifact</center>
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
                <ImageDropzone
                  recieveImage={this.recieveImage}
                  image={this.recieveImage}
                  images={image}
                />
              </DivSpacing>
              <DivSpacing>
                {image.map((img, index) => {
                  return (
                    <ImagePreview
                      src={img.preview}
                      deleteImage={this.deleteImage}
                      position={index}
                    />
                  );
                })}
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
                text="Add Artifact"
                color="btn-block btn-primary-light"
                margin="1rem 0 0 0"
                disabled={isEmpty(name) || isEmpty(description)}
              />
            </Form>
          </React.Fragment>
        )}
      </FormContainer>
    );
  }
}

CreateArtifact.propTypes = {
  registerArtifact: PropTypes.func.isRequired,
  artifact: PropTypes.object.isRequired,
  addResourceToArtifact: PropTypes.func.isRequired,
  resetArtifact: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  registerArtifact: (
    name,
    image,
    tag,
    dateTaken,
    description,
    addToFamilies,
    address
  ) =>
    dispatch(
      registerArtifact(
        name,
        image,
        tag,
        dateTaken,
        description,
        addToFamilies,
        address
      )
    ),
  addResourceToArtifact: (id, formData) =>
    dispatch(addResourceToArtifact(id, formData)),
  resetArtifact: () => dispatch(resetArtifact()),
});

const mapStateToProps = state => ({
  artifact: state.artifact,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateArtifact);
