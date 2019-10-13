import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import UnstyledButton from 'components/common/buttons/UnstyledButton';

const Image = styled.img`
  width: 100%;
  ${props => (props.showFullImage ? '' : 'max-height: 30rem;')}
  object-fit: cover;
`;

const Button = styled(UnstyledButton)`
  display: block;
  width: 100%;
  height: 100%;
`;

class Resource extends Component {
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

  toggleFullImage = () =>
    this.setState(prevState => ({ showFullImage: !prevState.showFullImage }));

  render() {
    const { image, showFullImage } = this.state;
    const { contentType, description } = this.props;
    console.log(this.state);
    return (
      <Image
        src={`data:${contentType};base64,${image}`}
        alt={description}
        showFullImage={showFullImage}
      />
    );
  }
}

Resource.propTypes = {
  artifactId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  contentType: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Resource;
