import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DropdownWrapper from 'components/common/dropdowns/DropdownWrapper';
import UnstyledButton from 'components/common/buttons/UnstyledButton';
import { logoutUser } from 'actions/auth';

const NavDropdownWrapper = styled(DropdownWrapper)`
  margin-right: 4rem;
`;

const NavDropdownList = styled.ul`
  width: 100%;
`;

const NavDropdownListItem = styled.li`
  display: inline-block;
  width: 100%;
  height: 3.5rem;
  font-size: 1.6rem;
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.colors.colorPrimary};
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  :hover {
    background-color: ${props => props.theme.colors.colorPrimary};
    color: ${props => props.theme.colors.colorWhite};
  }

  :not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.colorPrimary};
  }
`;

const LogoutButton = styled(UnstyledButton)`
  font-size: ${props => props.theme.fontSizes.prominent2};
  height: 100%;
  width: 100%;
  cursor: pointer;
  color: inherit;
`;

const ProfileButton = styled(Link)`
  display: block;
  font-size: ${props => props.theme.fontSizes.prominent2};
  text-decoration: none;
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
  color: ${props => props.theme.colors.colorWhite};
`;

const LogoutIcon = styled.i`
  margin-right: 1rem;
`;

const VertCenter = styled.span`
  margin: auto 0;
`;

function NavDropdown(props) {
  return (
    <NavDropdownWrapper
      button={
        <ProfileContainer>
          <IconProfile className="fas fa-user-alt"></IconProfile>
          <ArrowDown className="fas fa-chevron-down"></ArrowDown>
        </ProfileContainer>
      }
    >
      <NavDropdownList>
        <NavDropdownListItem>
          <ProfileButton to="/profile">
            <LogoutIcon className="fas fa-user"></LogoutIcon>
            <VertCenter>Profile</VertCenter>
          </ProfileButton>
        </NavDropdownListItem>
        <NavDropdownListItem>
          <LogoutButton onClick={props.logoutUser}>
            <LogoutIcon className="fas fa-power-off"></LogoutIcon>Logout
          </LogoutButton>
        </NavDropdownListItem>
      </NavDropdownList>
    </NavDropdownWrapper>
  );
}

const mapDispatchFromProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
});

NavDropdown.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchFromProps
)(NavDropdown);
