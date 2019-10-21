import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getArtifacts } from 'actions/artifact';
import { getAlbums } from 'actions/album';
import Artifacts from './Artifacts';
import { Button, ButtonLink } from 'components/common/buttons/Button';
import isEmpty from 'helpers/is-empty';
import NoContent from 'components/common/containers/NoContent';
import Albums from 'components/album/Albums';

const MyArtifactsPage = styled.section`
  padding: 2rem 1rem;
  width: 100%;
`;

const MyArtifactsPageToggler = styled.div`
  display: flex;

  margin-bottom: 2rem;
`;

const ButtonLeft = styled(Button)`
  border: 2px solid ${props => props.theme.colors.colorGrayDarker};
  border-right: 1px solid ${props => props.theme.colors.colorGrayDarker};
`;

const ButtonRight = styled(Button)`
  border: 2px solid ${props => props.theme.colors.colorGrayDarker};
`;

const ViewMyArtifactsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

class ViewMyArtifacts extends Component {
  state = {
    viewArtifacts: true,
  };

  componentDidMount() {
    this.props.getArtifacts();
    this.props.getAlbums();
  }

  viewArtifacts = val => this.setState({ viewArtifacts: val });

  render() {
    const { artifacts, albums } = this.props;
    const { viewArtifacts } = this.state;
    return (
      <MyArtifactsPage>
        <ViewMyArtifactsHeader>
          <MyArtifactsPageToggler>
            <ButtonLeft
              selected={viewArtifacts}
              onClick={() => this.viewArtifacts(true)}
              className="dark-gray"
            >
              View Artifacts
            </ButtonLeft>
            <ButtonRight
              selected={!viewArtifacts}
              onClick={() => this.viewArtifacts(false)}
              className="dark-gray"
            >
              View Albums
            </ButtonRight>
          </MyArtifactsPageToggler>
          <ButtonLink className="dark-brown" to="/artifact/create">
            Create Artifact
          </ButtonLink>
        </ViewMyArtifactsHeader>
        {viewArtifacts ? (
          !isEmpty(artifacts) ? (
            <Artifacts artifacts={artifacts} />
          ) : (
            <NoContent text="You Haven't Added Any Artifacts Yet" />
          )
        ) : !isEmpty(albums) ? (
          <Albums albums={albums} />
        ) : (
          <NoContent text="You Haven't Added Any Albums Yet" />
        )}
      </MyArtifactsPage>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getArtifacts: (group, owner, shared) =>
    dispatch(getArtifacts(group, owner, shared)),
  getAlbums: () => dispatch(getAlbums()),
});

const mapStateToProps = state => ({
  artifacts: state.artifact.artifacts,
  resources: state.artifact.resources,
  albums: state.album.albums,
});

ViewMyArtifacts.propTypes = {
  artifacts: PropTypes.array.isRequired,
  getArtifacts: PropTypes.func.isRequired,
  getAlbums: PropTypes.func.isRequired,
  albums: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewMyArtifacts);
