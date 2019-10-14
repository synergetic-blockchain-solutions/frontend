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
  return (
    <ElemContainer>
      <ElemLabel>{label}</ElemLabel>
      <ElemValue>{value}</ElemValue>
    </ElemContainer>
  );
}

ProfileElement.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ProfileElement;
