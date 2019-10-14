import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ButtonBase } from 'components/common/buttons/Button';

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ToggleButtonLeft = styled(ButtonBase)`
  background-color: ${props => props.theme.colors.colorPrimary};
  border-radius: ${props => props.theme.borders.borderRadiusMedium};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ToggleButtonRight = styled(ButtonBase)`
  background-color: ${props => props.theme.colors.colorPrimary};
  border-radius: ${props => props.theme.borders.borderRadiusMedium};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

function ToggleFamilyView(props) {
  const { toggleView } = props;
  return (
    <ToggleContainer>
      <ToggleButtonLeft onClick={() => toggleView(false)}>
        View Artifacts
      </ToggleButtonLeft>
      <ToggleButtonRight onClick={() => toggleView(true)}>
        View Group Info
      </ToggleButtonRight>
    </ToggleContainer>
  );
}

ToggleFamilyView.propTypes = {
  toggleView: PropTypes.func.isRequired,
};

export default ToggleFamilyView;
