import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from 'components/common/visual/LogoImg';

const NavBrandContainer = styled(NavLink)`
  display: block;
  height: 5rem;
  width: 18rem;
  margin-left: 2rem;
  margin-top: 1rem;
`;

export default function NavBrand() {
  return (
    <NavBrandContainer to="/dashboard">
      <Logo />
    </NavBrandContainer>
  );
}
