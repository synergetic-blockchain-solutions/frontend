import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'components/common/buttons/Button';

const MyArtifactsPageToggler = styled.div`
  margin-bottom: 2rem;
`;

const ButtonLeft = styled(Button)`
  border: 2px solid ${props => props.theme.colors.colorGrayDarker};
  border-right: 1px solid ${props => props.theme.colors.colorGrayDarker};
`;

const ButtonMiddle = styled(Button)`
  border: 2px solid ${props => props.theme.colors.colorGrayDarker};
  border-right: 1px solid ${props => props.theme.colors.colorGrayDarker};
  border-left: 1px solid ${props => props.theme.colors.colorGrayDarker};
`;

const ButtonRight = styled(Button)`
  border: 2px solid ${props => props.theme.colors.colorGrayDarker};
  border-left: 1px solid ${props => props.theme.colors.colorGrayDarker};
`;

function ToggleFamilyView(props) {
  const { toggleView, view } = props;
  return (
    <MyArtifactsPageToggler>
      <ButtonLeft
        selected={view === 'artifacts'}
        onClick={() => toggleView('artifacts')}
        className="dark-gray"
      >
        View Artifacts
      </ButtonLeft>
      <ButtonMiddle
        selected={view === 'info'}
        onClick={() => toggleView('info')}
        className="dark-gray"
      >
        View Albums
      </ButtonMiddle>
      <ButtonRight
        selected={view === 'info'}
        onClick={() => toggleView('info')}
        className="dark-gray"
      >
        View Group Info
      </ButtonRight>
    </MyArtifactsPageToggler>
  );
}

ToggleFamilyView.propTypes = {
  toggleView: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
};

export default ToggleFamilyView;
