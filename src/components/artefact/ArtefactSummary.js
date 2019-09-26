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

function ArtefactSummary(props) {
  const { name, description, src, id } = props;
  return (
    <SummaryLink to={`artefact/${id}`}>
      <SummaryContainer>
        <Summary srcUrl={src}>{name}</Summary>
        {description}
      </SummaryContainer>
    </SummaryLink>
  );
}

ArtefactSummary.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ArtefactSummary;
