import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  SummaryContainer,
  Summary,
  SummaryTitle,
  SummaryFooter,
} from 'components/common/summaries/BlockSummary';
import isEmpty from 'helpers/is-empty';

const SummaryLink = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none;
`;

class ArtifactSummary extends Component {
  state = {
    image: '',
  };
  componentDidMount() {
    const { id, resource } = this.props;
    const file = typeof resource === 'number' ? resource : resource.id;
    if (!isEmpty(resource)) {
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
              resource ? `data:${resource.contentType};base64,${image}` : ''
            }
          >
            <SummaryTitle>{name}</SummaryTitle>
            <SummaryFooter>{description}</SummaryFooter>
          </Summary>
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
