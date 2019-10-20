import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PreviewContainer = styled.div`
  display: block;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
`;

const ResLink = styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  display: block;
`;

class ResourcePreview extends Component {
  state = {
    image: '',
    showFullImage: false,
  };

  componentDidMount() {
    const { artifactId, id } = this.props;

    axios
      .get(
        `${process.env.REACT_APP_API_URL}/artifact/${artifactId}/resource/${id}/resource`
      )
      .then(res => {
        this.setState({ image: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { image, showFullImage } = this.state;
    const { contentType, description, id, artifactId } = this.props;
    return (
      <PreviewContainer>
        <Image
          src={`data:${contentType};base64,${image}`}
          alt={description}
          showFullImage={showFullImage}
        />
        <ResLink target="_blank" to={`/artifact/${artifactId}/resource/${id}/`}>
          Click Here To View
        </ResLink>
        <ResLink
          target="_blank"
          to={`/artifact/${artifactId}/resource/${id}/edit`}
        >
          Click Here To Edit
        </ResLink>
      </PreviewContainer>
    );
  }
}

ResourcePreview.propTypes = {
  contentType: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  artifactId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default ResourcePreview;
