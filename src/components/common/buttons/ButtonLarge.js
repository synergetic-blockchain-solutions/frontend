import React from 'react';
import PropTypes from 'prop-types';
import debouncedButton from './debouncedButton';
import { ButtonLarge } from './Button';

function ButtonL(props) {
  const { clickEvent, text, disabled, color, margin } = props;

  return (
    <ButtonLarge
      onClick={clickEvent}
      disabled={disabled}
      margin={margin}
      className={color}
    >
      {text}
    </ButtonLarge>
  );
}

ButtonL.defaultProps = {};

ButtonL.propTypes = {
  clickEvent: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  margin: PropTypes.string,
};

export default debouncedButton(ButtonL);
