import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Group = styled.li``;

function Association(props) {
  return <Group>{props.name}</Group>;
}

Association.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Association;
