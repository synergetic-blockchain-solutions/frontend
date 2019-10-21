import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getAlbum } from 'actions/album';
import Page from 'components/common/containers/Page';
import { ButtonLinkLarge } from 'components/common/buttons/Button';
import Artifacts from 'components/artifact/Artifacts';

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-top: 1rem;
`;

const Container = styled.div`
  margin: 0 2rem;
`;

class ViewAlbum extends Component {
  componentDidMount() {
    this.props.getAlbum(this.props.match.params.id);
  }
  render() {
    const { artifacts } = this.props.album;
    return (
      <Page>
        <Flex>
          <Title>View Albums</Title>
          <ButtonLinkLarge className="dark-brown" to="/artifact/create">
            Add Artifact
          </ButtonLinkLarge>
        </Flex>
        <Container>
          <Artifacts artifacts={artifacts} />
        </Container>
      </Page>
    );
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
