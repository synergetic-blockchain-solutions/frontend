import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getUserByName, clearUserSearch } from 'actions/auth';
import { updateGroup } from 'actions/group';
import Modal from 'react-modal';
import { Button } from 'components/common/buttons/Button';
import SearchBar from 'components/common/inputs/SearchBar';
import { FlexedBetween } from 'components/common/containers/Flexed';
import isEmpty from 'helpers/is-empty';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    zIndex: '99999',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    borderRadius: '20px',
    height: '40rem',
    width: '60vw',
    minWidth: '45rem',
  },
};

const ModalTitle = styled.h3`
  text-align: center;
  font-size: 2rem;
  margin: 2rem 0;
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
  line-height: 5rem;
  height: 5rem;
  background-color: ${props => props.theme.colors.colorGrayLight2};
  color: ${props => props.theme.colors.colorWhite};
  font-size: 2rem;
  text-align: center;
  border-radius: ${props => props.theme.borders.borderRadiusMedium};
`;

const ModalResults = styled.div`
  height: 15rem;
  overflow: auto;
  width: 100%;
`;

const Result = styled(FlexedBetween)`
  padding: 0.5rem 2rem;
  border-bottom: 1px solid ${props => props.theme.colors.colorDarkBrown};
`;

const ResultDetail = styled.div`
  margin-top: 0.8rem;
`;

const ResultField = styled.p`
  font-size: 1.2rem;
`;

const ResultButton = styled(Button)`
  width: 20rem;
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
    this.setState({ lastSearch: this.state.search });
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
      search: '',
    }));
    this.closeModal();
    this.props.clearUserSearch();
  };

  render() {
    const { modalIsOpen, search, lastSearch } = this.state;
    const { groupName, userSearch } = this.props;
    return (
      <React.Fragment>
        <Button className="dark-brown" onClick={this.openModal}>
          Add Member
        </Button>
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
            {!isEmpty(userSearch) ? (
              <React.Fragment>
                <ModalSubtitle>Results:</ModalSubtitle>
                <ModalResults>
                  {userSearch.map(user => {
                    return (
                      <Result>
                        <ResultDetail>
                          <ResultField>{user.name}</ResultField>
                          <ResultField>{user.email}</ResultField>
                        </ResultDetail>
                        <ResultButton
                          className="success"
                          onClick={() =>
                            this.addInput({
                              newId: user.id,
                              newName: user.name,
                            })
                          }
                        >
                          Add {user.name} <i className="fas fa-plus-circle"></i>
                        </ResultButton>
                      </Result>
                    );
                  })}
                </ModalResults>
              </React.Fragment>
            ) : (
              !isEmpty(lastSearch) && (
                <NoUsersFound>
                  No users found for search "{lastSearch}"
                </NoUsersFound>
              )
            )}
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
