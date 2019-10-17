import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import UnstyledButton from 'components/common/buttons/UnstyledButton';
import ButtonLarge from 'components/common/buttons/ButtonMedium';

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

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
`;

const ModalCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalTitle = styled.h3`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ModalSeperator = styled.div`
  margin-bottom: 2rem;
`;

class AddMemberModal extends Component {
  state = {
    modalIsOpen: false,
  };

  closeModal = () => this.setState({ modalIsOpen: false });

  openModal = () => this.setState({ modalIsOpen: true });

  confirm = () => {
    this.setState({ modalIsOpen: false });
    this.props.confirmAction();
  };

  render() {
    const { modalIsOpen } = this.state;
    const { confirmationText } = this.props;
    return (
      <React.Fragment>
        <ButtonLarge
          color="danger"
          text="Delete Image"
          clickEvent={this.openModal}
        />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Add User Modal"
          style={customStyles}
        >
          <ModalCenter>
            <ModalSeperator>
              <ModalTitle>
                Are you sure you want to {confirmationText}?
              </ModalTitle>
              <Flex>
                <ButtonLarge
                  color="danger mr-2"
                  text="Confirm Delete"
                  clickEvent={this.confirm}
                />
                <ButtonLarge
                  color="gray"
                  text="Cancel"
                  clickEvent={this.closeModal}
                />
              </Flex>
            </ModalSeperator>
          </ModalCenter>
        </Modal>
      </React.Fragment>
    );
  }
}

AddMemberModal.propTypes = {
  confirmAction: PropTypes.func.isRequired,
  confirmationText: PropTypes.string.isRequired,
};

AddMemberModal.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMemberModal);
