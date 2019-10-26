import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import qs from 'query-string';
import { Link } from 'react-router-dom';
import AuthInput from 'components/common/inputs/AuthInput';
import TextAreaInput from 'components/common/inputs/TextAreaInput';
import ButtonLarge from 'components/common/buttons/ButtonLarge';
import { registerArtifact, resetArtifact } from 'actions/artifact';
import { getAlbums } from 'actions/album';
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

const AlreadyAdded = styled.h3`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.colorDarkBrown};
  margin-bottom: 1.5rem;
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
    tag: [],
    date: '',
    description: '',
    groups: [],
    owners: [],
    sharedWith: [],
    albums: [],
    validation: this.validator.valid(),
    finished: false,
    query: {},
  };

  componentDidMount() {
    this.props.getGroups();
    this.props.getAlbums();
    const query = qs.parse(this.props.location.search);
    this.setState(prevState => ({
      albums: prevState.albums.concat([Number(query.album)]),
      query: !isEmpty(query) ? query : {},
    }));
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

  handleAlbumSelect = album => {
    this.setState({ albums: album });
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
      albums,
      query,
    } = this.state;

    if (validation.isValid) {
      this.props.registerArtifact(
        name,
        description,
        owners,
        groups.map(group => group.value),
        sharedWith,
        tag,
        !isEmpty(date) ? moment(date).format() : null,
        albums
          .map(alb => alb.value)
          .concat([Number(query.album)])
          .filter(alb => !isEmpty(alb))
      );
    }
  };

  render() {
    // if the form has been submitted at least once
    // then check validity every time we render
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    const { name, date, description, image, finished, query } = this.state;

    const { usersGroups, user, albums } = this.props;
    const { artifact } = this.props.artifact;
    let selectedAlbum = {};
    if (albums) {
      selectedAlbum = albums.find(alb => alb.id === Number(query.album));
      selectedAlbum = selectedAlbum ? selectedAlbum : {};
    }

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
              <AuthInput
                handleStandardChange={this.handleStandardChange}
                value={date}
                type="date"
                name="date"
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
              {!isEmpty(albums) && (
                <React.Fragment>
                  <Select
                    groups={albums.filter(alb => alb.id !== selectedAlbum.id)}
                    handleSelect={this.handleAlbumSelect}
                    marginBottom="1rem"
                    label="Select albums to add this artifact to"
                  />
                  {!isEmpty(query.album) && (
                    <AlreadyAdded>
                      You've selected to add to {selectedAlbum.name}{' '}
                    </AlreadyAdded>
                  )}
                </React.Fragment>
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
  getAlbums: PropTypes.func.isRequired,
  usersGroups: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  albums: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
  registerArtifact: (
    name,
    description,
    owners,
    groups,
    sharedWith,
    tag,
    date,
    albums
  ) =>
    dispatch(
      registerArtifact(
        name,
        description,
        owners,
        groups,
        sharedWith,
        tag,
        date,
        albums
      )
    ),
  addResourceToArtifact: (id, formData) =>
    dispatch(addResourceToArtifact(id, formData)),
  resetArtifact: () => dispatch(resetArtifact()),
  getGroups: () => dispatch(getGroups()),
  getAlbums: () => dispatch(getAlbums()),
});

const mapStateToProps = state => ({
  artifact: state.artifact,
  usersGroups: state.group.groups,
  user: state.auth.user,
  albums: state.album.albums,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateArtifact);
