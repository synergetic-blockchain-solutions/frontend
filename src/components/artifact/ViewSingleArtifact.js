import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getArtifact } from 'actions/artifact';
import Container from 'components/common/containers/FormDisplayContainer';
import Associations from './ArtifactAssociations';
import ResourceCarousel from 'components/common/utilities/ResourceCarousel';
import UnstyledButton from 'components/common/buttons/UnstyledButton';
import { ButtonIcon } from 'components/common/icons/Icons';
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

export const EditButton = styled(Link)`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  font-size: 5rem;
  color: ${props => props.theme.colors.colorWarning};
`;

class ViewSingleArtifact extends Component {
  componentDidMount() {
    this.props.getArtifact(this.props.match.params.id);
  }
  render() {
    const { artifact, user } = this.props;
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
        <InfoSeperator>
          <Associations
            groups={tags}
            title="This artifact has the following tags"
          />
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
});

const mapDispatchToProps = dispatch => ({
  getArtifact: id => dispatch(getArtifact(id)),
});

ViewSingleArtifact.propTypes = {
  getArtifact: PropTypes.func.isRequired,
  artifact: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewSingleArtifact);
