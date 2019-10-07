import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from 'actions/auth';
import isEmpty from 'helpers/is-empty';
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
    const { auth } = this.props;
    console.log(this.props);
    return (
      <Nav>
        <NavBrand />
        <NavDropdownButton onClick={this.toggle}>
          <i className="fas fa-bars"></i>
        </NavDropdownButton>
        {!isEmpty(auth) ? (
          <React.Fragment>
            <NavBody hasAuth display={display} />
            <NavDropdown />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <NavBody hasAuth={!isEmpty(auth)} display={display} />
          </React.Fragment>
        )}
      </Nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
});

NavBar.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
