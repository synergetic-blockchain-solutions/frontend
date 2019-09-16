import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DropdownWrapper from 'components/common/dropdowns/DropdownWrapper';
import UnstyledButton from 'components/common/buttons/UnstyledButton';

const NavDropdownList = styled.ul`
  width: 100%;
`;

const NavDropdownListItem = styled.li`
  display: inline-block;
  width: 100%;
  height: 3rem;
  font-size: 1.6rem;
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.colors.colorPrimaryLight};
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  :hover {
    background-color: ${props => props.theme.colors.colorPrimaryLight};
    color: ${props => props.theme.colors.colorWhite};
  }

  :not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.colorPrimaryLight};
  }

  :last-child {
    border-bottom-left-radius: ${props =>
      props.theme.borders.borderRadiusSmall};
    border-bottom-right-radius: ${props =>
      props.theme.borders.borderRadiusSmall};
  }
`;

const LogoutButton = styled(UnstyledButton)`
  font-size: ${props => props.theme.fontSizes.prominent2};
  height: 100%;
  width: 100%;
  cursor: pointer;
  color: inherit;
`;

const IconProfile = styled.i`
  font-size: 3.5rem;
  margin-top: 1.4rem;
`;

const ArrowDown = styled.i`
  position: absolute;
  top: 4rem;
  right: 0;
  transform: translateY(-50%);
  font-size: 2.5rem;
`;

const ProfileContainer = styled.span`
  position: relative;
  display: inline-block;
  height: 7rem;
  width: 10rem;
  margin-right: 2rem;
  color: ${props => props.theme.colors.colorPrimaryDarkBlue};
`;

const LogoutIcon = styled.i`
  margin-right: 1rem;
`;

function NavDropdown() {
  return (
    <DropdownWrapper
      button={
        <ProfileContainer>
          <IconProfile className="fas fa-user-alt"></IconProfile>
          <ArrowDown className="fas fa-chevron-down"></ArrowDown>
        </ProfileContainer>
      }
    >
      <NavDropdownList>
        <NavDropdownListItem>
          <LogoutButton>
            <LogoutIcon className="fas fa-power-off"></LogoutIcon>Logout
          </LogoutButton>
        </NavDropdownListItem>
        <NavDropdownListItem>
          <LogoutButton>
            <LogoutIcon className="fas fa-user"></LogoutIcon>Profile
          </LogoutButton>
        </NavDropdownListItem>
      </NavDropdownList>
    </DropdownWrapper>
  );
}

export default NavDropdown;