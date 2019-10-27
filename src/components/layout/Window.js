import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import loadingSrc from 'assets/loading.gif';

const WindowView = styled.div`
  position: relative;
  margin: 8rem auto 0 auto;
  float: none;
  max-width: 1300px;
  height: fit-content;
  min-height: calc(100vh - 7.8rem);
  min-height: calc(var(--vh, 1vh) * 100 - 7.8rem);
  background-color: lighten($color-gray-light-1, 1%);
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Window(props) {
  const { auth, album, artifact, group } = props;
  const loading = auth || album || artifact || group;
  return (
    <WindowView>
      {props.children}
      {loading && <Image src={loadingSrc} />}
    </WindowView>
  );
}

Window.propTypes = {
  auth: PropTypes.bool.isRequired,
  album: PropTypes.bool.isRequired,
  artifact: PropTypes.bool.isRequired,
  group: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth.loading,
  album: state.album.loading,
  artifact: state.artifact.loading,
  group: state.group.loading,
});

export default connect(mapStateToProps)(Window);
