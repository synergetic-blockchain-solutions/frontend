import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from 'components/artifact/artifact-helpers';

const NoArtifacts = styled.div`
  height: 40rem;
  line-height: 40rem;
  background-color: ${props => props.theme.colors.colorGrayMedium};
  width: 100%;
`;

const NoTitle = styled(Title)`
  color: ${props => props.theme.colors.colorDarkBrown};
`;

function NoContent(props) {
  const { text } = props;
  return (
    <NoArtifacts>
      <NoTitle>{text}</NoTitle>
    </NoArtifacts>
  );
}

NoContent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NoContent;
