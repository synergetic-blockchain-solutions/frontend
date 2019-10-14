import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  SummaryTitle,
  SummaryFooter,
} from 'components/common/summaries/BlockSummary';
import isEmpty from 'helpers/is-empty';

const FamilyBannerContainer = styled.div`
  position: absolute;
  top: -1rem;
  left: 0;
  height: 20rem;
  width: 100%;
  background: url(${props => props.srcUrl});
`;

const FamilyBannerTitle = styled(SummaryTitle)`
  height: 5rem;
`;

class FamilyBanner extends Component {
  state = {
    srcUrl: '',
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get(`${process.env.REACT_APP_API_URL}/group/${this.props.id}/image`)
      .then(res => {
        this.setState({ image: res.data });
      })
      .catch(err => {
        this.setState({ image: '' });
      });
  }

  render() {
    const { image } = this.state;
    const { name, description } = this.props;
    return (
      <FamilyBannerContainer
        srcUrl={!isEmpty(image) ? `data:image/png;base64,${image}` : ''}
      >
        <FamilyBannerTitle>{name}</FamilyBannerTitle>
        <SummaryFooter>{description}</SummaryFooter>
      </FamilyBannerContainer>
    );
  }
}

FamilyBanner.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FamilyBanner;
