import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Page from 'components/common/containers/Page';
import AuthInput from 'components/common/inputs/AuthInput';
import UnstyledButton from 'components/common/buttons/UnstyledButton';
import { ButtonIcon } from 'components/common/icons/Icons';
import ButtonLarge from 'components/common/buttons/ButtonMedium';
import ConfirmModal from 'components/common/modals/ConfirmationModal';

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 1rem;
  margin-right: 2rem;
  width: fit-content;
`;

const MetaDataContainer = styled.div`
  min-width: 40rem;
`;

const LargeImage = styled.img`
  max-width: 100%;
  max-height: calc(100vh - 20rem);
  margin-bottom: 1rem;
`;

const ResPage = styled(Page)`
  padding: 1.5rem;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
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

  deleteResource = () => {
    const { artifactId, resourceId } = this.props.match.params;
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/artifact/${artifactId}/resource/${resourceId}`
      )
      .then(res => {
        this.props.history.push(`/artifact/${artifactId}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  editResourceMetaData = () => {
    const { artifactId, resourceId } = this.props.match.params;
    const { name, description } = this.state;
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/artifact/${artifactId}/resource/${resourceId}`,
        {
          name,
          description,
        }
      )
      .then(res => {
        this.setState({
          name: res.data.name,
          description: res.data.description,
        });
        this.props.history.push(
          `/artifact/${artifactId}/resource/${resourceId}`
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleMetaDataChange = e =>
    this.setState({ [e.target.name]: e.target.value });

  render() {
    const { image, contentType, name, description } = this.state;
    console.log(this.state);
    return (
      <ResPage>
        <Flex>
          <ImageContainer>
            <LargeImage
              src={`data:${contentType};base64,${image}`}
              alt="user upload"
            />
            <ConfirmModal
              confirmationText="delete this image, all data attached
              to this image will also be deleted"
              confirmAction={this.deleteResource}
            />
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
            <ButtonLarge
              clickEvent={this.editResourceMetaData}
              color="dark-brown"
              text="Submit Changes"
            />
          </MetaDataContainer>
        </Flex>
      </ResPage>
    );
  }
}

export default ResourcePage;
