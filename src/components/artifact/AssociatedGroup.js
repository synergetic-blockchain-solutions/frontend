import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Group = styled.div`
  display: inline-block;
`;

function AssociatedGroup(props) {
  return <Group>{props.name}</Group>;
}

AssociatedGroup.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AssociatedGroup;
