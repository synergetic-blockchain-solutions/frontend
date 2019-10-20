import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import AuthInput from 'components/common/inputs/AuthInput';
import TextAreaInput from 'components/common/inputs/TextAreaInput';
import ButtonLarge from 'components/common/buttons/ButtonLarge';
import { CREATE_ALBUM_SUCCESS } from 'actions/types';
import { createAlbum, resetAlbum } from 'actions/album';
import { getGroups } from 'actions/group';
import { Center, MY1X0 } from 'components/common/containers/GeneralContainers';
import FormValidator from 'components/common/help-component/FormValidator';
import FormContainer from 'components/common/containers/FormDisplayContainer';
import isEmpty from 'helpers/is-empty';
import Success from 'components/common/visual/Success';
import InputAdder from 'components/common/form/InputAdder';
import Select from 'components/common/inputs/Select';
import { Title } from 'components/artifact/artifact-helpers';

const Form = styled.div``;

class CreateAlbum extends Component {
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

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.album.success === CREATE_ALBUM_SUCCESS &&
      !this.state.finished
    ) {
      this.setState({ finished: true });
    }
    return true;
  }

  componentWillUnmount() {
    this.props.resetAlbum();
  }

  handleStandardChange = e =>
    this.setState({ [e.target.name]: e.target.value });

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

    const { name, description, groups, sharedWith, owners } = this.state;

    if (validation.isValid) {
      this.props.createAlbum(
        name,
        description,
        owners,
        groups.map(group => group.value),
        sharedWith
      );
    }
  };

  render() {
    // if the form has been submitted at least once
    // then check validity every time we render
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    const { name, description, finished } = this.state;

    const { usersGroups, user } = this.props;
    const { album } = this.props.album;

    console.log(this.state);

    return (
      <FormContainer>
        {finished ? (
          <Success
            text="Album Was Created Successfully"
            linkAddress={`/album/${album.id}`}
            linkText="Click Here To View Album"
          />
        ) : (
          <React.Fragment>
            <Title>Add A New Album</Title>
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
                  label="Select groups to share this album with"
                />
              )}
              <InputAdder
                type="text"
                inputName="owners"
                placeholder="Add owners"
                label="Add owners of the album (owners can edit it)"
                addElem={this.addOwner}
                removeElem={this.removeOwner}
                isUserSearch
              />
              <InputAdder
                type="text"
                name="sharedWith"
                placeholder="Share album with other users"
                label="Share album with other users"
                addElem={this.addUser}
                removeElem={this.removeUser}
                isUserSearch
              />
              <Center>
                <ButtonLarge
                  clickEvent={this.submit}
                  text="Create Album"
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

CreateAlbum.propTypes = {
  createAlbum: PropTypes.func.isRequired,
  album: PropTypes.object.isRequired,
  resetAlbum: PropTypes.func.isRequired,
  getGroups: PropTypes.func.isRequired,
  usersGroups: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createAlbum: (name, description, owners, groups, sharedWith) =>
    dispatch(createAlbum(name, description, owners, groups, sharedWith)),
  getGroups: () => dispatch(getGroups()),
  resetAlbum: () => dispatch(resetAlbum()),
});

const mapStateToProps = state => ({
  album: state.album,
  usersGroups: state.group.groups,
  user: state.auth.user,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAlbum);
