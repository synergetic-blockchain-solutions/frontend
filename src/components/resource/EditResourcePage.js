import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Page from 'components/common/containers/Page';
import AuthInput from 'components/common/inputs/AuthInput';
import UnstyledButton from 'components/common/buttons/UnstyledButton';
import { ButtonIcon } from 'components/common/icons/Icons';
import ButtonLarge from 'components/common/buttons/ButtonMedium';

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const MetaDataContainer = styled.div`
  max-width: 50rem;
`;

const LargeImage = styled.img`
  max-width: 100%;
  max-height: calc(100vh - 20rem);
`;

const ResPage = styled(Page)`
  padding: 1.5rem;
`;

const DeleteButton = styled(UnstyledButton)`
  position: absolute;
  bottom: -6rem;
  right: 5rem;
  font-size: 5rem;
  color: ${props => props.theme.colors.colorDanger};
`;

class ResourcePage extends Component {
  state = { image: '', contentType: 'image/png', name: '', description: '' };

  componentDidMount() {
    const { artifactId, resourceId } = this.props.match.params;
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/artifact/${artifactId}/resource/${resourceId}/resource`
      )
      .then(res => {
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
    console.log(this.state);
    return (
      <ResPage>
        <ImageContainer>
          <LargeImage
            src={`data:${contentType};base64,${image}`}
            alt="user upload"
          />
          <DeleteButton>
            <ButtonIcon className="fas fa-trash-alt"></ButtonIcon>
          </DeleteButton>
        </ImageContainer>
        <MetaDataContainer>
          <AuthInput
            value={name}
            handleStandardChange={this.handleMetaDataChange}
            type="text"
            name="name"
            placeholder="File Name"
            marginBottom="1rem"
            label="File Name"
          />
          <AuthInput
            value={description}
            handleStandardChange={this.handleMetaDataChange}
            type="text"
            name="description"
            placeholder="Description"
            marginBottom="1rem"
            label="Description"
          />
          <ButtonLarge color="dark-brown" text="Edit Metadata" />
        </MetaDataContainer>
      </ResPage>
    );
  }
}

export default ResourcePage;
