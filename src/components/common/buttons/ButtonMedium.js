import React from 'react';
import PropTypes from 'prop-types';
import debouncedButton from './debouncedButton';
import { Button } from './Button';

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
