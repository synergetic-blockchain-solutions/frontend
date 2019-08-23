import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logo from 'assets/Logo.png';

const LogoContainer = styled.div`
  padding: 2rem;
  font-size: 1.4rem;
  font-style: italic;
  color: ${props => props.theme.colors.colorBlack};
  margin-bottom: 1rem;
  border-radius: 30px;
  text-align: center;
`;

const LogoImg = styled.img`
  border-radius: 10px;
`;

const LogoMotto = styled.h3`
  color: ${props => props.theme.colors.colorBlack};
  font-family: ${props => props.theme.fonts.fontFancy};
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImg src={logo} />
      <LogoMotto>Store and share family memories</LogoMotto>
    </LogoContainer>
  );
}

export default Logo;
