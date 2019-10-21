import React from 'react';
import styled from 'styled-components';
import LogoImg from './LogoImg';

const LogoContainer = styled.div`
  padding: 2rem;
  font-size: 1.4rem;
  font-style: italic;
  margin-bottom: 1rem;
  border-radius: 30px;
  text-align: center;
<<<<<<< HEAD
  width: 90%;

=======
  width: 100%;
  margin: 0 auto;
>>>>>>> 6dc139ab7b0e2e15cb27cf164dd5f1492d6554f4
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
