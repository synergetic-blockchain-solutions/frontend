import React from 'react';
import styled from 'styled-components';
import LogoImg from './LogoImg';

const LogoContainer = styled.div`
  padding: 2rem;
  font-size: 1.4rem;
  font-style: italic;
  color: ${props => props.theme.colors.colorBlack};
  margin-bottom: 1rem;
  border-radius: 30px;
  text-align: center;
  width: 90%;
  margin: 0 auto;
`;

const LogoMotto = styled.h3`
  color: ${props => props.theme.colors.colorBlack};
  font-family: ${props => props.theme.fonts.fontFancy};
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImg />
      <LogoMotto>Store and share family memories</LogoMotto>
    </LogoContainer>
  );
}

export default Logo;
