import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getArtifact } from 'actions/artifact';
import { getAlbums, addArtifactToAlbum } from 'actions/album';
import Container from 'components/common/containers/FormDisplayContainer';
import Associations from './ArtifactAssociations';
import ResourceCarousel from 'components/common/utilities/ResourceCarousel';
import { Button } from 'components/common/buttons/Button';
import { ButtonIcon } from 'components/common/icons/Icons';
import isEmpty from 'helpers/is-empty';
import Select from 'components/common/inputs/Select';

const SingleArtifactTitle = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2.5rem;
`;

const SingleArtifactDescription = styled.div`
  font-size: 1.6rem;
`;

const InfoSeperator = styled.div`
  margin-bottom: 2rem;
`;

export const EditButton = styled(Link)`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  font-size: 5rem;
  color: ${props => props.theme.colors.colorWarning};
`;

class ViewSingleArtifact extends Component {
  state = {
    selectedAlbums: [],
  };

  componentDidMount() {
    this.props.getArtifact(this.props.match.params.id);
    this.props.getAlbums();
  }

  handleGroupSelect = albs => this.setState({ selectedAlbums: albs });

  addArtifactToAlbum = () => {
    this.state.selectedAlbums.forEach(album => {
      this.props.addArtifactToAlbum(album.value, this.props.artifact.id);
    });
    this.setState({ selectedAlbums: [] });
  };

  render() {
    const { artifact, user, albums } = this.props;
    console.log(this.props);
    console.log(this.state);
    const {
      description,
      groups,
      id,
      name,
      owners,
      resources,
      sharedWith,
      tags,
    } = artifact;

    let artifactAlbumIds = [];
    if (artifact.albums) {
      artifactAlbumIds = artifact.albums.map(alb => alb.id);
    }
    const { selectedAlbums } = this.state;

    return (
      <Container>
        <SingleArtifactTitle>{name}</SingleArtifactTitle>
        <InfoSeperator>
          <ResourceCarousel resources={resources} />
        </InfoSeperator>
        <InfoSeperator>
          <SingleArtifactDescription>
            <h3>Artifact Description:</h3>{' '}
            {isEmpty(description)
              ? 'There is currently no description for this artifact'
              : description}
          </SingleArtifactDescription>
        </InfoSeperator>
        <InfoSeperator>
          <Associations
            groups={groups}
            title="Groups this artifact is shared with"
          />
        </InfoSeperator>
        <InfoSeperator>
          <Associations groups={owners} title="Owners of this artifact" />
        </InfoSeperator>
        {
          //   <InfoSeperator>
          //   <Associations
          //     groups={tags}
          //     title="This artifact has the following tags"
          //   />
          // </InfoSeperator>
        }

        <InfoSeperator>
          <Select
            groups={albums.filter(alb => !artifactAlbumIds.includes(alb.id))}
            handleSelect={this.handleGroupSelect}
            marginBottom="1rem"
            label="Select Albums You Want To Add To"
          />
          <Button
            disabled={isEmpty(selectedAlbums)}
            className="dark-brown"
            onClick={this.addArtifactToAlbum}
          >
            Add Artifact To Albums
          </Button>
        </InfoSeperator>
        {owners && owners.findIndex(owner => owner.id === user.id) !== -1 && (
          <EditButton to={`/artifact/edit/${id}`}>
            <ButtonIcon className="fas fa-edit"></ButtonIcon>
          </EditButton>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  artifact: state.artifact.artifact,
  user: state.auth.user,
  albums: state.album.albums,
});

const mapDispatchToProps = dispatch => ({
  getArtifact: id => dispatch(getArtifact(id)),
  getAlbums: () => dispatch(getAlbums()),
  addArtifactToAlbum: (id, artifactId) =>
    dispatch(addArtifactToAlbum(id, artifactId)),
});

ViewSingleArtifact.propTypes = {
  getArtifact: PropTypes.func.isRequired,
  artifact: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getAlbums: PropTypes.func.isRequired,
  albums: PropTypes.array.isRequired,
  addArtifactToAlbum: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewSingleArtifact);
