import React from 'react';
import PropTypes from 'prop-types';
import ArtifactSummary from './ArtifactSummary';
import { FlexedCenter } from 'components/common/containers/Flexed';
import isEmpty from 'helpers/is-empty';

function Artifacts(props) {
  const { artifacts } = props;
  return (
    <FlexedCenter>
      {artifacts &&
        artifacts.map(artifact => {
          return (
            <ArtifactSummary
              name={artifact.name}
              id={artifact.id}
              resource={
                !isEmpty(artifact.resources) ? artifact.resources[0] : null
              }
              key={artifact.id}
            />
          );
        })}
    </FlexedCenter>
  );
}

Artifacts.propTypes = {
  artifacts: PropTypes.array.isRequired,
};

export default Artifacts;
