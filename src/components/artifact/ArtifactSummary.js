import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  SummaryContainer,
  Summary,
} from 'components/common/summaries/BlockSummary';

const SummaryLink = styled(Link)`
  display: block;
  width: 100%;
`;

function ArtifactSummary(props) {
  const { name, description, src, id } = props;
  return (
    <SummaryLink to={`artifact/${id}`}>
      <SummaryContainer>
        <Summary srcUrl={src}>{name}</Summary>
        {description}
      </SummaryContainer>
    </SummaryLink>
  );
}

ArtifactSummary.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ArtifactSummary;
