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
  height: 20rem;
  width: 100%;
`;

const SummaryTitle = styled.h3`
  font-size: 1.6rem;
`;

function FamilySummary(props) {
  const { src, name } = props;
  return (
    <SummaryContainer>
      <Summary srcUrl={src}></Summary>
      <SummaryTitle>{name}</SummaryTitle>
    </SummaryContainer>
  );
}

FamilySummary.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FamilySummary;
