import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Input = styled.textarea`
  font-size: 1.4rem;
  border: 1px solid ${props => props.theme.colors.colorGrayMedium};
  padding: 1rem 1rem;
  width: 100%;
  height: 15rem;
  resize: none;
  margin-top: 1rem;
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.2);

  :focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.colorPrimaryLight};
  }
`;

const Label = styled.label`
  font-size: 1.6rem;
`;

const Error = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.colorDanger};
`;

const InputContainer = styled.div`
  margin-bottom: ${props => props.marginBottom};
`;

function TextAreaInput(props) {
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
      ></Input>
      {error && <Error>{error}</Error>}
    </InputContainer>
  );
}

TextAreaInput.defaultProps = {
  marginBottom: '0',
};

TextAreaInput.propTypes = {
  handleStandardChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  marginBottom: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
};

export default TextAreaInput;
