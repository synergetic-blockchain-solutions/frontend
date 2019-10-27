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

class ArtifactSummary extends Component {
  state = {
    image: '',
  };

  componentDidMount() {
    const { id, resource } = this.props;

    if (!isEmpty(resource)) {
      const file = typeof resource === 'number' ? resource : resource.id;
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/artifact/${id}/resource/${file}/resource`
        )
        .then(res => {
          this.setState({ image: res.data });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  render() {
    const { name, description, groups, id, owners, resource } = this.props;
    const { image } = this.state;

    return (
      <SummaryLink to={`/artifact/${id}`}>
        <SummaryContainer>
          <Summary
            srcUrl={
              resource
                ? `data:${resource.contentType};base64,${image}`
                : 'https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg'
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
  description: PropTypes.string.isRequired,
  resource: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  getResource: PropTypes.func.isRequired,
  groups: PropTypes.array.isRequired,
  owners: PropTypes.array.isRequired,
};

export default ArtifactSummary;
