import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Input = styled.input`
  font-size: 1.2rem;
  border: 1px solid ${props => props.theme.colors.colorGrayMedium};
  border-radius: 5px;
  padding: 1rem 1rem;
  width: 100%;
  margin-bottom: ${props => props.marginBottom};
  :focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.colorPrimaryLight};
  }
`;

const Label = styled.label`
  font-size: 1.2rem;
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
  } = props;
  return (
    <React.Fragment>
      {label && <Label>{label}</Label>}
      <Input
        type={type}
        onChange={handleStandardChange}
        value={value}
        name={name}
        placeholder={placeholder}
        marginBottom={marginBottom}
      />
    </React.Fragment>
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
  marginBottom: PropTypes.string,
  label: PropTypes.string,
};

export default AuthInput;
