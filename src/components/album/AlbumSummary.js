import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ButtonLink } from 'components/common/buttons/Button';

const Album = styled.div`
  display: block;
  margin: 1rem;
  width: 42rem;
  text-align: center;
`;

const IconContainer = styled(ButtonLink)`
  height: 30rem;
  width: 40rem;
  font-size: 24rem;
  line-height: 30rem;
  background-color: ${props => props.theme.colors.colorDarkBrown};
  color: ${props => props.theme.colors.colorWhite};
`;

const AlbumTitle = styled.h2`
  font-size: 2rem;
  color: ${props => props.theme.colors.colorDarkBrown};
  text-align: left;
  margin-left: 1rem;
`;

function AlbumSummary(props) {
  const { name, id } = props;
  return (
    <Album>
      <IconContainer to={`/album/${id}`}>
        <i className="fal fa-images"></i>
      </IconContainer>
      <AlbumTitle>{name}</AlbumTitle>
    </Album>
  );
}

AlbumSummary.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default AlbumSummary;
