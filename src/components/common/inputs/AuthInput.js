import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label, Error, InputContainer, Input } from './InputHelpers';

function AuthInput(props) {
  const {
    handleStandardChange,
    value,
    type,
    name,
    placeholder,
    marginBottom,
    label,
    error,
    onFocus,
    onBlur,
    autoComplete,
  } = props;

  console.log(autoComplete);
  return (
    <InputContainer marginBottom={marginBottom}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input
        type={type}
        onChange={handleStandardChange}
        value={value}
        name={name}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete={autoComplete ? 'on' : 'off'}
      />
      {error && <Error>{error}</Error>}
    </InputContainer>
  );
}

AuthInput.defaultProps = {
  marginBottom: '0',
  autoComplete: false,
};

AuthInput.propTypes = {
  handleStandardChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  marginBottom: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  autoComplete: PropTypes.bool.isRequired,
};

export default AuthInput;
