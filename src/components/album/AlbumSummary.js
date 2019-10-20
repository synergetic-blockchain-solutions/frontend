import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ButtonLink } from 'components/common/buttons/Button';

const Album = styled.div`
  display: block;
  margin: 1rem;
`;

const IconContainer = styled(ButtonLink)`
  height: 50rem;
  width: 50rem;
  font-size: 40rem;
  line-height: 50rem;
  background-color: ${props => props.theme.colors.colorDarkBrown};
  color: ${props => props.theme.colors.colorWhite};
`;

const AlbumTitle = styled.h2`
  font-size: 3rem;
  color: ${props => props.theme.colors.colorDarkBrown};
  text-align: center;
`;

function AlbumSummary(props) {
  const { name, id } = props;
  return (
    <Album>
      <AlbumTitle>{name}</AlbumTitle>
      <IconContainer to={`/album/${id}`}>
        <i className="fal fa-images"></i>
      </IconContainer>
    </Album>
  );
}

AlbumSummary.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default AlbumSummary;
