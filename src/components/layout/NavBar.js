import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import NavBrand from './NavBrand';
import NavBody from './NavBody';

import NavDropdown from './NavDropdown';

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

class NavBar extends Component {
  state = {
    display: false,
  };

  toggle = () => this.setState(prevState => ({ display: !prevState.display }));

  render() {
    const { display } = this.state;
    console.log(this.props);
    return (
      <Nav>
        <NavBrand />
        <NavDropdownButton onClick={this.toggle}>
          <i className="fas fa-bars"></i>
        </NavDropdownButton>
        <NavBody display={display} />
        <NavDropdown />
      </Nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(NavBar);
