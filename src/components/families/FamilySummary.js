import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  SummaryContainer,
  Summary,
} from 'components/common/summaries/BlockSummary';

const FamilyTitle = styled.h2`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 4rem;
  color: ${props => props.theme.colors.colorWhite};
  z-index: ${props => props.theme.zIndex.important};
`;

const FamilyLink = styled(Link)`
  display: block;
  width: 100%;
`;

function FamilySummary(props) {
  const { src, name, id } = props;
  return (
    <FamilyLink to={`/family/${id}`}>
      <SummaryContainer>
        <Summary srcUrl={src}>
          <FamilyTitle>{name}</FamilyTitle>
        </Summary>
      </SummaryContainer>
    </FamilyLink>
  );
}

FamilySummary.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FamilySummary;
