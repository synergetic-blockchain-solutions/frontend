import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  SummaryContainer,
  Summary,
  SummaryTitle,
} from 'components/common/summaries/BlockSummary';
import isEmpty from 'helpers/is-empty';

const SummaryLink = styled(Link)`
  display: block;
  text-decoration: none;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

/**
 * @param {*} props
 * @prop {number} id
 * @prop {string} name
 * @prop {object, number} resource
 */
class ArtifactSummary extends Component {
  state = {
    image: '',
    error: false,
  };

  componentDidMount() {
    const { id, resource } = this.props;

    if (!isEmpty(resource)) {
      const file = typeof resource === 'number' ? resource : resource.id;
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/` +
            `artifact/${id}/resource/${file}/resource`
        )
        .then(res => {
          this.setState({ image: res.data });
        })
        .catch(err => {
          this.setState({ error: true });
        });
    }
  }
  render() {
    const { name, id, resource } = this.props;
    const { image, error } = this.state;

    return (
      <SummaryLink to={`/artifact/${id}`}>
        <SummaryContainer>
          <Summary
            srcUrl={
              resource && !error
                ? `data:${resource.contentType};base64,${image}`
                : 'https://upload.wikimedia.org/' +
                  'wikipedia/commons/6/6c/No_image_3x4.svg'
            }
          />
          <SummaryTitle>{name}</SummaryTitle>
        </SummaryContainer>
      </SummaryLink>
    );
  }
}

ArtifactSummary.propTypes = {
  name: PropTypes.string.isRequired,
  resource: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  id: PropTypes.number.isRequired,
};

export default ArtifactSummary;
