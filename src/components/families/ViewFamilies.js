import React, { Component } from 'react';
import styled from 'styled-components';

const ViewFamiliesPage = styled.section`
  margin-top: 8rem;
  padding: 2rem;
`;

const ViewFamiliesTitle = styled.h1`
  font-size: 2rem;
`;

class ViewFamilies extends Component {
  render() {
    return (
      <ViewFamiliesPage>
        <ViewFamiliesTitle>View Families</ViewFamiliesTitle>
      </ViewFamiliesPage>
    );
  }
}

export default ViewFamilies;
