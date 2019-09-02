import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Logo from 'components/common/visual/LogoImg';

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
  display: ${props => (props.display ? 'flex' : 'none')};
`;

const NavDropdownButton = styled.button`
  margin-right: 2rem;
  font-size: 4rem;
  color: ${props => props.theme.colors.colorDarkBlue};
  cursor: pointer;
`;

const NavBarLink = styled(NavLink)`
  width: 10rem;
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
            <i className="fas fa-users"></i>
          </NavBarLink>
          <NavBarLink to="/my-artefacts">
            <i className="fas fa-hand-holding-heart"></i>
          </NavBarLink>
          <NavBarLink to="/create">
            <i className="fas fa-plus-square"></i>
          </NavBarLink>
        </NavBodyContainer>
      </Nav>
    );
  }
}
export default NavBar;
