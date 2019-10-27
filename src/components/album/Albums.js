import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import isEmpty from 'helpers/is-empty';
import AlbumSummary from './AlbumSummary';

const AlbumsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;
`;

function Albums(props) {
  const { albums } = props;
  return (
    <AlbumsContainer>
      {albums &&
        albums.map(album => {
          return (
            <AlbumSummary key={album.id} name={album.name} id={album.id} />
          );
        })}
    </AlbumsContainer>
  );
}

Albums.propTypes = {
  albums: PropTypes.array.isRequired,
};

export default Albums;
