import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArtifactSummary from './ArtifactSummary';
import isEmpty from 'helpers/is-empty';

const ArtifactsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;
`;

function Artifacts(props) {
  const { artifacts } = props;
  return (
    <ArtifactsContainer>
      {artifacts &&
        artifacts.map(artifact => {
          return (
            <ArtifactSummary
              name={artifact.name}
              description={artifact.description}
              groups={artifact.groups}
              id={artifact.id}
              owners={artifact.owners}
              resource={
                !isEmpty(artifact.resources) ? artifact.resources[0] : null
              }
              key={artifact.id}
            />
          );
        })}
    </ArtifactsContainer>
  );
}

Artifacts.propTypes = {
  artifacts: PropTypes.array.isRequired,
};

export default Artifacts;
