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

const Description = styled.p`
  font-size: 1.8rem;
  margin-top: 1rem;
`;

const Container = styled.div`
  margin: 0 2rem;
`;

const TitleContainer = styled.div`
  max-width: 50rem;
`;

class ViewAlbum extends Component {
  componentDidMount() {
    this.props.getAlbum(this.props.match.params.id);
  }
  render() {
    const { album } = this.props;
    const { artifacts, id, name, description } = album;
    return (
      <Page>
        <Flex>
          <TitleContainer>
            <Title>{name}</Title>
            <Description>{description}</Description>
          </TitleContainer>

          <ButtonLinkLarge
            className="dark-brown"
            to={`/artifact/create?album=${id}`}
          >
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
