import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getUserByName, clearUserSearch } from 'actions/auth';
import { updateGroup } from 'actions/group';
import Modal from 'react-modal';
import UnstyledButton from 'components/common/buttons/UnstyledButton';
import { ButtonIcon } from 'components/common/icons/Icons';
import SearchBar from 'components/common/inputs/SearchBar';
import { AddedElem } from 'components/common/form/AdderHelpers';
import { ReccomendButton } from 'components/common/form/AdderHelpers';
import isEmpty from 'helpers/is-empty';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    zIndex: '99999',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    borderRadius: '20px',
    height: '60vh',
    width: '60vw',
  },
};

const ModalButton = styled(UnstyledButton)`
  position: absolute;
  bottom: 4rem;
  left: 4rem;
  color: ${props => props.theme.colors.colorWarning};
  font-size: 5rem;
`;

const ModalTitle = styled.h3`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ModalSubtitle = styled.h5`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const ModalSeperator = styled.div`
  margin-bottom: 2rem;
`;

const NoUsersFound = styled.div`
  width: 100%;
  height: 5rem;
  background-color: ${props => props.theme.colors.colorGrayLight2};
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
  border-radius: ${props => props.theme.borders.borderRadiusMedium};
`;

const GroupMember = styled.div`
  display: inline-block;
  background-color: ${props => props.theme.colors.colorSuccess};
  border-radius: ${props => props.theme.borders.borderRadiusMedium};
  color: ${props => props.theme.colors.colorWhite};
  padding: 0.5rem 2rem;
`;

const CurrentMembers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;
`;

class AddMemberModal extends Component {
  state = {
    modalIsOpen: false,
    search: '',
    lastSearch: '',
    added: [],
  };

  closeModal = () => this.setState({ modalIsOpen: false });

  openModal = () => this.setState({ modalIsOpen: true });

  handleSearchChange = e => this.setState({ search: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.getUserByName(this.state.search);
  };

  addInput = idAndName => {
    const { newId, newName } = idAndName;
    const { id, name, description, admins, members } = this.props.group;
    this.props.updateGroup(
      id,
      name,
      description,
      admins.map(admin => admin.id),
      [...members.map(member => member.id), newId]
    );
    this.setState(prevState => ({
      value: '',
      added: [...prevState.added, newName],
      lastSearch: prevState.value,
    }));
    this.props.clearUserSearch();
  };

  render() {
    const { modalIsOpen, search, lastSearch, added } = this.state;
    const { groupName, userSearch, group } = this.props;
    group.members && console.log(group.members.concat(added));
    return (
      <React.Fragment>
        <ModalButton onClick={this.openModal}>
          <ButtonIcon className="fas fa-user-plus"></ButtonIcon>
        </ModalButton>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Add User Modal"
          style={customStyles}
        >
          <ModalSeperator>
            <ModalTitle>Add A User To Group {groupName}</ModalTitle>
          </ModalSeperator>
          <ModalSeperator>
            <SearchBar
              placeholder="Search User To Add To The Group"
              onChange={this.handleSearchChange}
              value={search}
              handleSubmit={this.handleSubmit}
            />
          </ModalSeperator>
          <ModalSeperator>
            {!isEmpty(userSearch)
              ? userSearch.map(user => {
                  return (
                    <ReccomendButton
                      onClick={() =>
                        this.addInput({ newId: user.id, newName: user.name })
                      }
                    >
                      <h4>{user.name}</h4>
                      <p>{user.email}</p>
                    </ReccomendButton>
                  );
                })
              : !isEmpty(lastSearch) && (
                  <NoUsersFound>
                    No users found for search "{lastSearch}"
                  </NoUsersFound>
                )}
          </ModalSeperator>
          <ModalSeperator>
            <ModalSubtitle>Current Members Matching Search:</ModalSubtitle>
            <CurrentMembers>
              {group.members &&
                group.members
                  .concat(added)
                  .filter(mem => mem.name.includes(search))
                  .map(mem => {
                    return <GroupMember>{mem.name}</GroupMember>;
                  })}
            </CurrentMembers>
          </ModalSeperator>
        </Modal>
      </React.Fragment>
    );
  }
}

AddMemberModal.propTypes = {
  modalButton: PropTypes.element.isRequired,
  groupName: PropTypes.string.isRequired,
  getUserByName: PropTypes.string.isRequired,
  userSearch: PropTypes.array.isRequired,
  group: PropTypes.object.isRequired,
  clearUserSearch: PropTypes.func.isRequired,
  addElem: PropTypes.func.isRequired,
  updateGroup: PropTypes.func.isRequired,
};

AddMemberModal.defaultProps = {
  userSearch: [],
};

const mapStateToProps = state => ({
  userSearch: state.auth.searchedUsers,
});

const mapDispatchToProps = dispatch => ({
  getUserByName: search => dispatch(getUserByName(search)),
  clearUserSearch: () => dispatch(clearUserSearch()),
  updateGroup: (id, name, description, admins, members) =>
    dispatch(updateGroup(id, name, description, admins, members)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMemberModal);
