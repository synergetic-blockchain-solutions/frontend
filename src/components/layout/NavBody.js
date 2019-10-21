import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const moveInLeft = keyframes`
  0% {
    transform: translateX(-30rem);
  }

  100% {
    transform: translateX(0rem);
  }
`;

const NavBarLink = styled(NavLink)`
  color: ${props => props.theme.colors.colorWhite};
  width: fit-content;
  height: 7rem;
  font-size: 2rem;
  text-decoration: none;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.breakpoints.smallScreen}) {
    width: 100%;
    &:not(:last-child) {
      border-bottom: 1px solid ${props => props.theme.colorGrayLight2};
    }
  }
`;

const NavBarLinkCollapsing = styled(NavBarLink)`
  display: none;
  @media (max-width: ${props => props.theme.breakpoints.smallScreen}) {
    display: flex;
  }
`;

const NavLinkText = styled.span`
  margin-right: 2rem;
  color: ${props => props.theme.colors.colorWhite};
`;

const NavBodyContainer = styled.div`
  display: flex;
  margin: 0 ${props => (props.hasAuth ? 'auto' : '0 0 auto')};
  width: fit-content;

  @media (max-width: ${props => props.theme.breakpoints.smallScreen}) {
    background-color: ${props => props.theme.colors.colorPrimary};
    display: ${props => (props.display === 'true' ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 7rem;
    left: 0;
    width: 30rem;
    animation: ${moveInLeft} 0.3s ease-out;
    height: calc(100vh - 7rem);
  }
`;

function NavBody(props) {
  const { display, hasAuth, bodyRef } = props;
  return (
    <NavBodyContainer
      ref={bodyRef}
      hasAuth={hasAuth}
      display={display.toString()}
    >
      {hasAuth ? (
        <React.Fragment>
          <NavBarLink to="/families">
            <NavLinkText> Families </NavLinkText>
            <i className="fas fa-users"></i>
          </NavBarLink>
          <NavBarLink to="/my-artifacts">
            <NavLinkText>My Artifacts</NavLinkText>{' '}
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
        </React.Fragment>
      ) : (
        <React.Fragment>
          <NavBarLink to="/">
            <NavLinkText> Login </NavLinkText>
            <i className="fas fa-sign-in"></i>
          </NavBarLink>
          <NavBarLink to="/sign-up">
            <NavLinkText> Register </NavLinkText>{' '}
            <i className="far fa-file-contract"></i>
          </NavBarLink>
        </React.Fragment>
      )}
    </NavBodyContainer>
  );
}

NavBody.propTypes = {
  display: PropTypes.bool.isRequired,
  hasAuth: PropTypes.bool.isRequired,
  bodyRef: PropTypes.bool.isRequired,
};

export default NavBody;
