import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Logo from 'components/common/visual/LogoImg';
import NavDropdown from './NavDropdown';

const moveInLeft = keyframes`
  0% {
    transform: translateX(-30rem);
  }

  100% {
    transform: translateX(0rem);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 7rem;
  background-color: ${props => props.theme.colors.colorPrimary};
  z-index: ${props => props.theme.zIndex.header};
`;

const NavBrandContainer = styled.div`
  height: 5rem;
  width: 18rem;
  margin-left: 2rem;
  margin-top: 1rem;
`;

const NavBodyContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: fit-content;

  @media (max-width: ${props => props.theme.breakpoints.smallScreen}) {
    background-color: ${props => props.theme.colors.colorPrimaryLight};
    display: ${props => (props.display ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 7rem;
    left: 0;
    width: 30rem;
    animation: ${moveInLeft} 0.3s ease-out;
    height: calc(100vh - 7rem);
  }
`;

const NavDropdownButton = styled.button`
  @media (max-width: ${props => props.theme.breakpoints.smallScreen}) {
    display: block;
    margin-right: 2rem;
    font-size: 4rem;
    color: ${props => props.theme.colors.colorDarkBlue};
    cursor: pointer;
  }

  display: none;
`;

const NavBarLink = styled(NavLink)`
  @media (max-width: ${props => props.theme.breakpoints.smallScreen}) {
    width: 100%;
    &:not(:last-child) {
      border-bottom: 1px solid ${props => props.theme.colorGrayLight2};
    }
  }

  color: ${props => props.theme.colorDarkBlue};
  width: fit-content;
  height: 7rem;
  font-size: 1.6rem;
  text-decoration: none;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavBarLinkCollapsing = styled(NavBarLink)`
  display: none;
  @media (max-width: ${props => props.theme.breakpoints.smallScreen}) {
    display: flex;
  }
`;

const NavLinkText = styled.span`
  margin-right: 2rem;
`;

class NavBar extends Component {
  state = {
    display: false,
  };

  toggle = () => this.setState(prevState => ({ display: !prevState.display }));

  render() {
    const { display } = this.state;
    return (
      <Nav>
        <NavBrandContainer>
          <Logo />
        </NavBrandContainer>
        <NavDropdownButton onClick={this.toggle}>
          <i className="fas fa-bars"></i>
        </NavDropdownButton>
        <NavBodyContainer display={display}>
          <NavBarLink to="/familys">
            <NavLinkText> Familys </NavLinkText>
            <i className="fas fa-users"></i>
          </NavBarLink>
          <NavBarLink to="/my-artefacts">
            <NavLinkText>My Artefacts</NavLinkText>{' '}
            <i className="fas fa-hand-holding-heart"></i>
          </NavBarLink>
          <NavBarLink to="/create">
            <NavLinkText>Create</NavLinkText>{' '}
            <i className="fas fa-plus-square"></i>
          </NavBarLink>
          <NavBarLinkCollapsing to="/profile">
            <NavLinkText>My Profile</NavLinkText>{' '}
            <i className="fas fa-user"></i>
          </NavBarLinkCollapsing>
          <NavBarLinkCollapsing to="/logout">
            <NavLinkText>Logout</NavLinkText>{' '}
            <i className="fas fa-power-off"></i>
          </NavBarLinkCollapsing>
        </NavBodyContainer>
        <NavDropdown />
      </Nav>
    );
  }
}
export default NavBar;
