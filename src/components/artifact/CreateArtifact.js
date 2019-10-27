import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import AuthInput from 'components/common/inputs/AuthInput';
import TextAreaInput from 'components/common/inputs/TextAreaInput';
import ButtonLarge from 'components/common/buttons/ButtonLarge';
import { registerArtifact, resetArtifact } from 'actions/artifact';
import { addResourceToArtifact } from 'actions/resource';
import { getGroups } from 'actions/group';
import { REGISTER_ARTIFACT_SUCCESS } from 'actions/types';
import { Center, MY1X0 } from 'components/common/containers/GeneralContainers';
import FormValidator from 'components/common/help-component/FormValidator';
import FormContainer from 'components/common/containers/FormDisplayContainer';
import ImageDropzone from 'components/common/image/ImageDropzone';
import ImagePreview from 'components/common/image/ImagePreview';
import isEmpty from 'helpers/is-empty';
import Success from 'components/common/visual/Success';
import InputAdder from 'components/common/form/InputAdder';
import Select from 'components/common/inputs/Select';
import { Title } from './artifact-helpers';

const Form = styled.div``;

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
    tag: [],
    date: '',
    description: '',
    groups: [],
    owners: [],
    sharedWith: [],
    validation: this.validator.valid(),
    finished: false,
  };

  componentDidMount() {
    this.props.getGroups();
  }

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
          JSON.stringify(prevState.image[file].metaData)
        );
        formData.append('resource', prevState.image[file].image.file);
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
      return {
        image: [
          ...prevState.image,
          { image, metaData: { name: '', description: '', tags: [] } },
        ],
      };
    });
  };

  handleMetaDataChange = e => {
    const [field, position] = e.target.name.split('-');
    const { image } = this.state;
    const newImages = image;
    const changedImage = newImages[Number(position)];
    changedImage.metaData[field] = e.target.value;
    this.setState({ images: newImages });
  };

  deleteImage = e => {
    const name = e.target.name.toString();
    this.setState(prevState => ({
      image: prevState.image.filter((img, index) => {
        return index.toString() !== name;
      }),
    }));
  };

  handleGroupSelect = groups => {
    this.setState({ groups: groups });
  };

  addOwner = owner =>
    this.setState(prevState => ({
      owners: [...prevState.owners, owner],
    }));

  removeOwner = ownerIndex =>
    this.setState(prevState => ({
      owners: prevState.owners.filter((gr, index) => {
        return index !== ownerIndex;
      }),
    }));

  addUser = user =>
    this.setState(prevState => ({
      sharedWith: [...prevState.sharedWith, user],
    }));

  removeUser = userIndex =>
    this.setState(prevState => ({
      sharedWith: prevState.sharedWith.filter((gr, index) => {
        return index !== userIndex;
      }),
    }));

  submit = e => {
    e.preventDefault();

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    const {
      name,
      tag,
      date,
      description,
      groups,
      sharedWith,
      owners,
    } = this.state;

    if (validation.isValid) {
      this.props.registerArtifact(
        name,
        description,
        owners,
        groups.map(group => group.value),
        sharedWith,
        tag,
        moment(date).format()
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
      date,
      description,
      owners,
      sharedWith,
      image,
      finished,
    } = this.state;

    const { usersGroups, user } = this.props;
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
            <Title>Add A New Artifact</Title>
            <Form onSubmit={this.submit}>
              <AuthInput
                handleStandardChange={this.handleStandardChange}
                value={name}
                type="text"
                name="name"
                placeholder="Name"
                marginBottom="1rem"
                label="Name*"
                error={validation.name.message}
              />
              <MY1X0>
                <ImageDropzone
                  recieveImage={this.recieveImage}
                  image={this.recieveImage}
                  images={image}
                />
              </MY1X0>
              <MY1X0>
                {image.map((img, index) => {
                  return (
                    <ImagePreview
                      src={img.image.preview}
                      deleteImage={this.deleteImage}
                      position={index}
                      metaData={img.metaData}
                      handleMetaDataChange={this.handleMetaDataChange}
                      key={index}
                    />
                  );
                })}
              </MY1X0>
              {
                // <AuthInput
                //   handleStandardChange={this.handleStandardChange}
                //   value={date}
                //   type="date"
                //   name="date"
                //   placeholder="Date Taken"
                //   marginBottom="1rem"
                //   label="Date Taken"
                // />s
              }

              <TextAreaInput
                handleStandardChange={this.handleStandardChange}
                value={description}
                type="text"
                name="description"
                placeholder="Description"
                marginBottom="1rem"
                label="Description*"
              />
              {!isEmpty(usersGroups) && (
                <Select
                  groups={usersGroups.filter(
                    usr => usr.id !== user.privateGroup.id
                  )}
                  handleSelect={this.handleGroupSelect}
                  marginBottom="1rem"
                  label="Select groups to share this artifact with"
                />
              )}
              <InputAdder
                type="text"
                inputName="owners"
                placeholder="Add owners"
                label="Add owners of the artifact (owners can edit it)"
                addElem={this.addOwner}
                removeElem={this.removeOwner}
                isUserSearch
              />
              <InputAdder
                type="text"
                name="sharedWith"
                placeholder="Share artifact with other users"
                label="Share artifact with other users"
                addElem={this.addUser}
                removeElem={this.removeUser}
                isUserSearch
              />
              <Center>
                <ButtonLarge
                  clickEvent={this.submit}
                  text="Add Artifact"
                  color="dark-brown"
                  margin="1rem 0 0 0"
                  disabled={isEmpty(name) || isEmpty(description)}
                />
              </Center>
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
  getGroups: PropTypes.func.isRequired,
  usersGroups: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  registerArtifact: (
    name,
    description,
    owners,
    groups,
    sharedWith,
    tag,
    date
  ) =>
    dispatch(
      registerArtifact(name, description, owners, groups, sharedWith, tag, date)
    ),
  addResourceToArtifact: (id, formData) =>
    dispatch(addResourceToArtifact(id, formData)),
  resetArtifact: () => dispatch(resetArtifact()),
  getGroups: () => dispatch(getGroups()),
});

const mapStateToProps = state => ({
  artifact: state.artifact,
  usersGroups: state.group.groups,
  user: state.auth.user,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateArtifact);
