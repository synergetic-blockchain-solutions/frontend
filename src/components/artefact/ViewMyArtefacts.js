import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getArtifacts } from 'actions/artefact';
import ArtefactSummary from './ArtefactSummary';

const MyArtefactsPage = styled.section`
  margin-top: 8rem;
  padding: 2rem;
`;

const MyArtefactsPageTitle = styled.h1`
  margin-bottom: 2rem;
`;

class ViewMyArtefacts extends Component {
  componentDidMount() {
    this.props.getArtifacts();
  }
  render() {
    const { artifacts } = this.props;

    console.log(artifacts);

    return (
      <MyArtefactsPage>
        <MyArtefactsPageTitle>My Artefacts</MyArtefactsPageTitle>
        {artifacts &&
          artifacts.map(artifact => {
            return (
              <ArtefactSummary
                name={artifact.name}
                description={artifact.description}
                id={artifact.id}
                src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              />
            );
          })}
      </MyArtefactsPage>
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

ViewMyArtefacts.propTypes = {
  artifacts: PropTypes.array.isRequired,
  getArtifacts: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewMyArtefacts);
