import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Page from 'components/common/containers/Page';
import FormContainer from 'components/common/containers/FormDisplayContainer';
import ButtonMedium from 'components/common/buttons/ButtonMedium';
import AuthInput from 'components/common/inputs/AuthInput';
import Adder from 'components/common/form/IdAndValueAdder';
import ProfileElement from './ProfileElement';
import ProfileArrayElement from './ProfileArrayElement';
import { updateUserData, getUsersOwnData, deleteUser } from 'actions/auth';
import ConfirmationModal from 'components/common/modals/ConfirmationModal';
import { FlexedCenter } from 'components/common/containers/Flexed';

const Welcome = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

/**
 * @desc the page which describes the user's important information
 */
class Profile extends Component {
  state = {
    edit: false,
    newEmail: '',
    newName: '',
    newGroups: [],
    hasEdited: false,
    user: {},
  };

  componentDidMount() {
    const { user } = this.props;
    const { email, groups, name, ownedAlbums, ownedArtifacts } = user;
    // Get the most up to date info about the user
    this.props.getUsersOwnData();

    // Set the state with the current user information
    this.setState({
      newEmail: email,
      newGroups: groups,
      newAlbums: ownedAlbums,
      newArtifacts: ownedArtifacts,
      newName: name,
      user: user,
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // if the user has changed any information from what we already had
    // update that info in the state
    if (nextProps.user.toString() !== prevState.user.toString()) {
      const {
        email,
        name,
        groups,
        user,
        ownedAlbums,
        ownedArtifacts,
      } = nextProps.user;

      return {
        ...prevState,
        newEmail: email,
        newGroups: groups,
        newName: name,
        newAlbums: ownedAlbums,
        newArtifacts: ownedArtifacts,
        user: user,
      };
    } else {
      return prevState;
    }
  }

  // Change the profile between edit and dont edit mode
  toggleEdit = () => this.setState(prevState => ({ edit: !prevState.edit }));

  // if they change any text flip to has edited
  handleStandardChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      hasEdited: true,
    });
  };

  //
  removeGroup = e => {
    const i = Number(e.target.name);
    this.setState(prevState => ({
      newGroups: prevState.newGroups.filter(
        (irr, index) => index !== Number(i)
      ),
    }));
  };

  submit = () => {
    const { newEmail, newName, newGroups } = this.state;
    this.props.updateUserData(
      this.props.user.id,
      newEmail,
      newName,
      newGroups.map(grp => grp.id)
    );
  };

  render() {
    const { user } = this.props;
    const { email, id, groups, name, ownedArtifacts, ownedAlbums } = user;
    const { edit, newEmail, newName, newGroups, hasEdited } = this.state;
    return (
      <Page>
        <FormContainer>
          <Welcome>Welcome, {name}</Welcome>
          {!edit ? (
            <React.Fragment>
              <ProfileElement label="Email:" value={email} />
              <ProfileElement label="Full Name:" value={name} />
              <ProfileArrayElement label="Your Groups:" value={groups} />
              <ProfileArrayElement label="Your Albums:" value={ownedAlbums} />
              <ProfileArrayElement
                label="Your Artifacts:"
                value={ownedArtifacts}
              />
              <FlexedCenter>
                <ButtonMedium
                  clickEvent={this.toggleEdit}
                  text="Edit Details"
                  disabled={false}
                  color="warning"
                />
              </FlexedCenter>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <AuthInput
                handleStandardChange={this.handleStandardChange}
                value={newEmail}
                type="email"
                name="newEmail"
                placeholder="Email"
                marginBottom="1rem"
                label="Email:"
              />
              <AuthInput
                handleStandardChange={this.handleStandardChange}
                value={newName}
                type="text"
                name="newName"
                placeholder="Name"
                marginBottom="1rem"
                label="Name:"
              />
              <h2>Groups: </h2>
              <Adder
                values={newGroups.map(group => ({
                  name: group.name,
                  id: group.id,
                }))}
                removeGroup={this.removeGroup}
              />
              <FlexedCenter>
                <ButtonMedium
                  clickEvent={this.submit}
                  text="Update Details"
                  disabled={!hasEdited}
                  color="success"
                  margin="1rem"
                />
                <ButtonMedium
                  clickEvent={this.toggleEdit}
                  text="Cancel"
                  color="info"
                  margin="1rem"
                />
                <ConfirmationModal
                  confirmAction={() => this.props.deleteUser(id)}
                  confirmationText="delete your account"
                  btnText="Delete Account"
                />
              </FlexedCenter>
            </React.Fragment>
          )}
        </FormContainer>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  updateUserData: (id, email, name, groups) =>
    dispatch(updateUserData(id, email, name, groups)),
  getUsersOwnData: () => dispatch(getUsersOwnData()),
  deleteUser: id => dispatch(deleteUser(id)),
});

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  updateUserData: PropTypes.func.isRequired,
  getUsersOwnData: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
