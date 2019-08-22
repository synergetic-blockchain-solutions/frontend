import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LogoContainer = styled.div`
  padding: 2rem;
  font-size: 2rem;
  background-color: ${props => props.theme.colors.colorPrimaryLight};
  color: ${props => props.theme.colors.colorBlack};
  margin-bottom: 1rem;
  border-radius: 30px;
  text-align: center;
`;

const LogoHeading = styled.h1``;

function Logo() {
  return (
    <LogoContainer>
      <LogoHeading>Logo</LogoHeading>
    </LogoContainer>
  );
}

export default Logo;
