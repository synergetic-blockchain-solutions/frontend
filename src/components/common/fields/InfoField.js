import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Field = styled.div`
  margin-bottom: 2rem;
`;

const FieldName = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const FieldValue = styled.h4`
  font-size: 1.8rem;
`;

function InfoField(props) {
  const { fieldName, value } = props;
  return (
    <Field>
      <FieldName>{fieldName}</FieldName>
      <FieldValue>{value}</FieldValue>
    </Field>
  );
}

InfoField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InfoField;
