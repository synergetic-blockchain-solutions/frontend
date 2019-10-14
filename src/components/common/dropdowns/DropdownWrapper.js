import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UnstyledBtn from 'components/common/buttons/UnstyledButton';

const DropdownContainer = styled.div`
  display: inline-block;
  width: fit-content;
  position: relative;
  @media (max-width: ${props => props.theme.breakpoints.smallScreen}) {
    display: none;
  }
`;
const DropdownBody = styled.div`
  position: absolute;
  opacity: 0;
  display: none;
  width: 100%;
  background-color: ${props => props.theme.colors.colorWhite};
  border: 1px solid ${props => props.theme.colors.colorPrimaryLight};
  border-top: none;
  border-bottom-left-radius: ${props => props.theme.borders.borderRadiusSmall};
  border-bottom-right-radius: ${props => props.theme.borders.borderRadiusSmall};

  &.visible {
    display: block;
    opacity: 1;
  }
`;

class DropdownWrapper extends Component {
  static displayName = 'DropdownWrapper';

  state = {
    dropDownVisible: false,
  };

  showDropDown = e => {
    e.preventDefault();
    this.setState({ dropDownVisible: true }, () => {
      document.addEventListener('click', this.closeDropDown);
    });
  };

  closeDropDown = e => {
    if (this.dropdownMenu && !this.dropdownMenu.contains(e.target)) {
      this.setState({ dropDownVisible: false }, () => {
        document.removeEventListener('click', this.closeDropDown);
      });
    }
  };

  render() {
    const { dropDownVisible } = this.state;

    const { button } = this.props;

    return (
      <DropdownContainer>
        <UnstyledBtn type="button" onClick={this.showDropDown}>
          {button}
        </UnstyledBtn>
        <DropdownBody
          className={dropDownVisible && 'visible'}
          id="dropdown-info"
          ref={element => {
            this.dropdownMenu = element;
          }}
        >
          {this.props.children}
        </DropdownBody>
      </DropdownContainer>
    );
  }
}

DropdownWrapper.propTypes = {
  button: PropTypes.element.isRequired,
};

export default DropdownWrapper;
