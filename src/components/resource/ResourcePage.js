import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import Page from 'components/common/containers/Page';
import Field from 'components/common/fields/InfoField';
import { getArtifact } from 'actions/artifact';
import { ButtonIcon } from 'components/common/icons/Icons';
import { EditButton } from 'components/artifact/ViewSingleArtifact';
import { ButtonLink } from 'components/common/buttons/Button';
import { FlexedCenter } from 'components/common/containers/Flexed';
import { LinkTitle } from './EditResourcePage';

const ImageContainer = styled.div`
  margin-bottom: 1rem;
  margin-right: 2rem;
  width: fit-content;
`;

const MetaDataContainer = styled.div`
  margin-top: 5rem;
  min-width: 40rem;
`;

const LargeImage = styled.img`
  max-width: 100%;
  max-height: calc(100vh - 20rem);
`;

const ResPage = styled(Page)`
  padding: 1.5rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

class ResourcePage extends Component {
  state = { image: '', contentType: 'image/png' };

  componentDidMount() {
    const { artifactId, resourceId } = this.props.match.params;
    this.props.getArtifact(artifactId);
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/artifact/${artifactId}/resource/${resourceId}/resource`
      )
      .then(res => {
        console.log(res);
        this.setState({
          image: res.data,
          contentType: res.headers['content-type'],
        });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get(
        `${process.env.REACT_APP_API_URL}/artifact/${artifactId}/resource/${resourceId}/metadata`
      )
      .then(res => {
        console.log(res);
        this.setState({
          name: res.data.name,
          description: res.data.description,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { image, contentType, name, description } = this.state;
    const { artifactId, resourceId } = this.props.match.params;
    const { user, artifact } = this.props;
    const { owners } = artifact;
    const edit =
      owners && owners.findIndex(owner => owner.id === user.id) !== -1;
    return (
      <ResPage>
        <LinkTitle to={`/artifact/${artifactId}`}>Back to Artifact</LinkTitle>
        <FlexedCenter>
          <ImageContainer>
            <Title>{name}</Title>
            <LargeImage
              src={
                image
                  ? `data:${contentType};base64,${image}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg'
              }
              alt="user upload"
            />
          </ImageContainer>
          <MetaDataContainer>
            <Field fieldName="Description:" value={description} />
            {edit && (
              <ButtonLink
                className="dark-brown"
                to={`/artifact/${artifactId}/resource/${resourceId}/edit`}
              >
                Edit Image
              </ButtonLink>
            )}
          </MetaDataContainer>

          {edit && (
            <EditButton
              to={`/artifact/${artifactId}/resource/${resourceId}/edit`}
            >
              <ButtonIcon className="fas fa-edit"></ButtonIcon>
            </EditButton>
          )}
        </FlexedCenter>
      </ResPage>
    );
  }
}

ResourcePage.propTypes = {
  user: PropTypes.object.isRequired,
  getArtifact: PropTypes.func.isRequired,
  artifact: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  artifact: state.artifact.artifact,
});

const mapDispatchToProps = dispatch => ({
  getArtifact: id => dispatch(getArtifact(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourcePage);
