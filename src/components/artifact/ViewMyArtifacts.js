import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getArtifacts } from 'actions/artifact';
import ArtifactSummary from './ArtifactSummary';

const MyArtifactsPage = styled.section`
  margin-top: 8rem;
  padding: 2rem;
`;

const MyArtifactsPageTitle = styled.h1`
  margin-bottom: 2rem;
`;

class ViewMyArtifacts extends Component {
  componentDidMount() {
    this.props.getArtifacts();
  }
  render() {
    const { artifacts } = this.props;

    console.log(this.props);

    return (
      <MyArtifactsPage>
        <MyArtifactsPageTitle>My Artifacts</MyArtifactsPageTitle>
        {artifacts &&
          artifacts.map(artifact => {
            return (
              <ArtifactSummary
                name={artifact.name}
                description={artifact.description}
                id={artifact.id}
                resources={artifact.resources}
                key={artifact.id}
              />
            );
          })}
      </MyArtifactsPage>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getArtifacts: (group, owner, shared) =>
    dispatch(getArtifacts(group, owner, shared)),
});

const mapStateToProps = state => ({
  artifacts: state.artifact.artifacts,
  resources: state.artifact.resources,
});

ViewMyArtifacts.propTypes = {
  artifacts: PropTypes.array.isRequired,
  getArtifacts: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewMyArtifacts);
