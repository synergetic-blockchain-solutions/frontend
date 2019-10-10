import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getArtifact } from 'actions/artifact';
import Container from 'components/common/containers/FormDisplayContainer';
import AssociatedGroups from './AssociatedGroups';
import ResourceCarousel from 'components/common/utilities/ResourceCarousel';
import isEmpty from 'helpers/is-empty';

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

class ViewSingleArtifact extends Component {
  componentDidMount() {
    this.props.getArtifact(this.props.match.params.id);
  }
  render() {
    const { artifact } = this.props;
    console.log(artifact);
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

    return (
      <Container>
        <SingleArtifactTitle>Artifact Name: {name}</SingleArtifactTitle>
        <InfoSeperator>
          <SingleArtifactDescription>
            <h3>Artifact Description:</h3>{' '}
            {isEmpty(description)
              ? 'There is currently no description for this artifact'
              : description}
          </SingleArtifactDescription>
        </InfoSeperator>
        <InfoSeperator>
          <AssociatedGroups groups={groups} />
        </InfoSeperator>
        <InfoSeperator>
          <ResourceCarousel resources={resources} />
        </InfoSeperator>
      </Container>
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
