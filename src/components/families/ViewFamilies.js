import React, { Component } from 'react';
import styled from 'styled-components';
import FamilySummary from './FamilySummary';

const ViewFamiliesPage = styled.section`
  margin-top: 8rem;
  padding: 2rem;
`;

const ViewFamiliesTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

class ViewFamilies extends Component {
  render() {
    return (
      <ViewFamiliesPage>
        <ViewFamiliesTitle>View Families</ViewFamiliesTitle>
        <FamilySummary
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          name="The Smiths"
        />
        <FamilySummary
          src="https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          name="The Geralds"
        />
      </ViewFamiliesPage>
    );
  }
}

export default ViewFamilies;
