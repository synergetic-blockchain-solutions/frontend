import React from 'react';
import PropTypes from 'prop-types';
import { FlexedCenter } from 'components/common/containers/Flexed';
import AlbumSummary from './AlbumSummary';

/**
 *
 * @param {*} props
 * @desc takes albums as the props (the return from get albums endpoint)
 */
function Albums(props) {
  const { albums } = props;
  return (
    <FlexedCenter>
      {albums &&
        albums.map(album => {
          return (
            <AlbumSummary key={album.id} name={album.name} id={album.id} />
          );
        })}
    </FlexedCenter>
  );
}

Albums.propTypes = {
  albums: PropTypes.array.isRequired,
};

export default Albums;
