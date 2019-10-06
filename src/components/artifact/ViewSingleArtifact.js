import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getArtifact } from 'actions/artifact';

const SingleArtifactPage = styled.section`
  margin-top: 8rem;
`;

const SingleArtifactTitle = styled.h1`
  margin-bottom: 2rem;
`;

const SingleArtifactDescription = styled.div`
  font-size: 1.6rem;
`;

class ViewSingleArtifact extends Component {
  componentDidMount() {
    this.props.getArtifact(this.props.match.params.id);
  }
  render() {
    const { artifact } = this.props;
    console.log(artifact);
    const { description, name } = artifact;

    return (
      <SingleArtifactPage>
        <SingleArtifactTitle>{name}</SingleArtifactTitle>
        <SingleArtifactDescription>{description}</SingleArtifactDescription>
      </SingleArtifactPage>
    );
  }
}

const mapStateToProps = state => ({
  artifact: state.artifact.artifact,
});

const mapDispatchToProps = dispatch => ({
  getArtifact: id => dispatch(getArtifact(id)),
});

ViewSingleArtifact.propTypes = {
  getArtifact: PropTypes.func.isRequired,
  artifact: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewSingleArtifact);
