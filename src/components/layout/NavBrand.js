import React from 'react';
import styled from 'styled-components';
import Logo from 'components/common/visual/LogoImg';

const NavBrandContainer = styled.div`
  height: 5rem;
  width: 18rem;
  margin-left: 2rem;
  margin-top: 1rem;
`;

export default function NavBrand() {
  return (
    <NavBrandContainer>
      <Logo />
    </NavBrandContainer>
  );
}
