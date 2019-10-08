import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getResource } from 'actions/resource';
import {
  SummaryContainer,
  Summary,
} from 'components/common/summaries/BlockSummary';
import isEmpty from 'helpers/is-empty';

const SummaryLink = styled(Link)`
  display: block;
  width: 100%;
`;

class ArtifactSummary extends Component {
  componentDidMount() {
    const { id, resources } = this.props;
    console.log(this.props);
    if (!isEmpty(resources)) {
      this.props.getResource(id, resources[0].id);
    }
  }
  render() {
    const { name, description, id } = this.props;
    return (
      <SummaryLink to={`artifact/${id}`}>
        <SummaryContainer>
          <Summary>{name}</Summary>
          {description}
        </SummaryContainer>
      </SummaryLink>
    );
  }
}

ArtifactSummary.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  resources: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  getResource: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getResource: (artifactId, resourceId) =>
    dispatch(getResource(artifactId, resourceId)),
});

export default connect(
  null,
  mapDispatchToProps
)(ArtifactSummary);
