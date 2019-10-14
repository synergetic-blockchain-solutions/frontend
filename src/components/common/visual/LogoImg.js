import React from 'react';
import styled from 'styled-components';
import logo from 'assets/Logo.jpg';

const LogoImg = styled.img`
  border-radius: 10px;
  width: 100%;
  /* height: 100%; */
`;

function Logo() {
  return <LogoImg src={logo} />;
}

export default Logo;
