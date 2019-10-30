import React from 'react';
import { mount, shallow } from 'enzyme';
import TestRoot from 'TestRoot';
import FamilySummary from '../FamilySummary';
import {
    SummaryContainer,
    Summary,
  } from 'components/common/summaries/BlockSummary';

let wrapped;

describe('The ArtifactSummary component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <FamilySummary/>
      </TestRoot>
    );
    
  });

  it('renders the summary', ()=>{
    expect(
        shallow(
            <Summary/>
        ).length
    ).toEqual(1);
  });

  it('renders the summary container', ()=>{
    expect(
        shallow(
            <SummaryContainer/>
        ).length
    ).toEqual(1);
  });
  
  

});

afterEach(() => {
  wrapped.unmount();
});