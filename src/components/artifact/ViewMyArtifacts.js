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

    console.log(artifacts);

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
                src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
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
});

ViewMyArtifacts.propTypes = {
  artifacts: PropTypes.array.isRequired,
  getArtifacts: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewMyArtifacts);
