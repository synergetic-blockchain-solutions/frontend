import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Input = styled.input`
  font-size: 0.8rem;
  border: 1px solid ${props => props.theme.colors.colorGrayMedium};
  border-radius: 5px;
  padding: 0.5rem 1rem;
  width: 20rem;
  :focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.colorPrimaryLight};
  }
`;

const Label = styled.label`
  font-size: 0.8rem;
  display: block;
`;

const Error = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.colorDanger};
`;

const InputContainer = styled.div`
  margin-bottom: ${props => props.marginBottom};
`;

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
  } = props;

  return (
    <InputContainer marginBottom={marginBottom}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input
        type={type}
        onChange={handleStandardChange}
        value={value}
        name={name}
        placeholder={placeholder}
      />
      {error && <Error>{error}</Error>}
    </InputContainer>
  );
}

AuthInput.defaultProps = {
  marginBottom: '0',
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
};

export default AuthInput;
