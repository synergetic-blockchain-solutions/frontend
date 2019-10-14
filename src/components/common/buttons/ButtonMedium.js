import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import debouncedButton from './debouncedButton';
import { ButtonBase } from './Button';

const Button = styled(ButtonBase)`
  width: 15rem;
  height: 4rem;
  font-size: 1.6rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  margin: ${props => props.margin} auto;
  outline: none;

  &.dark-brown {
    color: ${props => props.theme.colors.colorWhite};
    background-color: ${props => props.theme.colors.colorDarkBrown};
    border-bottom: 0.5rem solid ${props => props.theme.colors.colorDarkerBrown};

    :hover {
      border-bottom: 0.1rem solid
        ${props => props.theme.colors.colorDarkerBrown};
    }
  }

  &.warning {
    color: ${props => props.theme.colors.colorWhite};
    background-color: ${props => props.theme.colors.colorWarning};
  }

  &.success {
    color: ${props => props.theme.colors.colorWhite};
    background-color: ${props => props.theme.colors.colorSuccess};
  }

  &.info {
    color: ${props => props.theme.colors.colorWhite};
    background-color: ${props => props.theme.colors.colorInfo};
  }

  &.gray {
    color: ${props => props.theme.colors.colorWhite};
    background-color: ${props => props.theme.colors.colorGrayMedium};
  }

  &.btn-block {
    margin-left: auto;
    margin-right: auto;
  }
`;

function ButtonMedium(props) {
  const { clickEvent, text, disabled, color, margin } = props;

  return (
    <Button
      onClick={clickEvent}
      disabled={disabled}
      margin={margin}
      className={color}
    >
      {text}
    </Button>
  );
}

ButtonMedium.defaultProps = {};

ButtonMedium.propTypes = {
  clickEvent: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  margin: PropTypes.string,
};

export default debouncedButton(ButtonMedium);
