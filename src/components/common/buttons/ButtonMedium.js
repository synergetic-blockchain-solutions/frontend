import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import debouncedButton from './debouncedButton';
import { ButtonBase } from './Button';

const Button = styled(ButtonBase)`
  width: 15rem;
  height: 4rem;
  border: none;
  border-radius: 30px;
  font-size: 1.6rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  margin: ${props => props.margin};
  outline: none;

  &.btn-primary-light {
    color: ${props => props.theme.colors.colorWhite};
    background-color: ${props => props.theme.colors.colorPrimaryLight};

    :hover {
      background-color: ${props =>
        props.theme.colors.colorPrimaryLightDarkened};
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
    width: 100%;
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
