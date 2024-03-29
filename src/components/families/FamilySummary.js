import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  SummaryContainer,
  Summary,
} from 'components/common/summaries/BlockSummary';
import isEmpty from 'helpers/is-empty';

const FamilyTitle = styled.h2`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  font-size: 4rem;
  color: ${props => props.theme.colors.colorWhite};
  z-index: ${props => props.theme.zIndex.important};
`;

const FamilyLink = styled(Link)`
  display: block;
  width: fit-content;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

class FamilySummary extends Component {
  state = {
    image: '',
  };
  componentDidMount() {
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
    const { name, id } = this.props;
    const { image } = this.state;
    return (
      <FamilyLink to={`/family/${id}`}>
        <SummaryContainer>
          <Summary
            srcUrl={
              !isEmpty(image)
                ? `data:image/png;base64,${image}`
                : 'https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg'
            }
          >
            <FamilyTitle>{name}</FamilyTitle>
          </Summary>
        </SummaryContainer>
      </FamilyLink>
    );
  }
}

FamilySummary.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FamilySummary;
