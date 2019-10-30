import React from 'react';
import styled from 'styled-components';
import LogoImg from './LogoImg';

const LogoContainer = styled.div`
  padding: 2rem;
  font-size: 1.4rem;
  font-style: italic;
  margin: 0 auto;
  margin-bottom: 1rem;
  border-radius: 30px;
  text-align: center;
  width: 100%;
`;

const LogoMotto = styled.h3``;

function Logo() {
  return (
    <LogoContainer>
      <LogoImg />
      <LogoMotto>Store and share family memories</LogoMotto>
    </LogoContainer>
  );
}

export default Logo;
