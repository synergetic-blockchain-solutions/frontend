import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ElemContainer = styled.div`
  margin-bottom: 2rem;
`;

const ElemLabel = styled.label`
  font-size: 2rem;
`;

const ElemValue = styled.p`
  font-size: 1.6rem;
`;

function ProfileElement(props) {
  const { label, value } = props;
  console.log(value);
  return (
    <ElemContainer>
      <ElemLabel>{label}</ElemLabel>
      {value &&
        value.map(val => {
          return <ElemValue>{val.name}</ElemValue>;
        })}
    </ElemContainer>
  );
}

ProfileElement.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired,
};

export default ProfileElement;
