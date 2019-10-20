import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getAlbum } from 'actions/album';
import Page from 'components/common/containers/Page';

class ViewAlbum extends Component {
  componentDidMount() {
    this.props.getAlbum(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    return <Page></Page>;
  }
}

const mapStateToProps = state => ({
  album: state.album.album,
});

const mapDispatchToProps = dispatch => ({
  getAlbum: id => dispatch(getAlbum(id)),
});

ViewAlbum.propTypes = {
  getAlbum: PropTypes.func.isRequired,
  album: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewAlbum);
