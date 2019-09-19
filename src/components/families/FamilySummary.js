import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SummaryContainer = styled.div`
  margin-bottom: 2rem;
`;

const Summary = styled.div`
  position: relative;
  border: 1px solid ${props => props.theme.colors.colorBlack};
  padding: 1.5rem;
  background-image: url("${props => props.srcUrl}");
  background-size: cover;
  height: 30rem;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors.colorBlack};
    opacity: 0.3;
  }
`;

const FamilyTitle = styled.h2`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 4rem;
  color: ${props => props.theme.colors.colorWhite};
  z-index: ${props => props.theme.zIndex.important};
`;

function FamilySummary(props) {
  const { src, name } = props;
  return (
    <SummaryContainer>
      <Summary srcUrl={src}>
        <FamilyTitle>{name}</FamilyTitle>
      </Summary>
    </SummaryContainer>
  );
}

FamilySummary.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FamilySummary;
