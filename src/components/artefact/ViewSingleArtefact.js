import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getArtifact } from 'actions/artefact';

const SingleArtefactPage = styled.section`
  margin-top: 8rem;
`;

const SingleArtefactTitle = styled.h1`
  margin-bottom: 2rem;
`;

const SingleArtefactDescription = styled.div`
  font-size: 1.6rem;
`;

class ViewSingleArtefact extends Component {
  componentDidMount() {
    this.props.getArtifact(this.props.match.params.id);
  }
  render() {
    const { artifact } = this.props;
    console.log(artifact);
    const { description, name } = artifact;

    return (
      <SingleArtefactPage>
        <SingleArtefactTitle>{name}</SingleArtefactTitle>
        <SingleArtefactDescription>{description}</SingleArtefactDescription>
      </SingleArtefactPage>
    );
  }
}

const mapStateToProps = state => ({
  artifact: state.artifact.artifact,
});

const mapDispatchToProps = dispatch => ({
  getArtifact: id => dispatch(getArtifact(id)),
});

ViewSingleArtefact.propTypes = {
  getArtifact: PropTypes.func.isRequired,
  artifact: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewSingleArtefact);
