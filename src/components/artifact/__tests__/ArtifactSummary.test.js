import React from 'react';
import { mount, shallow } from 'enzyme';
import TestRoot from 'TestRoot';
import ArtifactSummary from '../ArtifactSummary';
import {
    SummaryContainer,
    Summary,
  } from 'components/common/summaries/BlockSummary';


let wrapped;

describe('The ArtifactSummary component', () => {
  beforeEach(() => {

    const props={
      name: "testname",
      description: "testDesc",
      resource: [],
      id: 1,
      getResource: jest.fn(),
      groups: [],
      owners: [],
    }

    wrapped = mount(
      <TestRoot>
        <ArtifactSummary {...props}/>
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

  it('Renders the SummaryContainer', () => {
    expect(
        wrapped.find(SummaryContainer).length
    ).toEqual(1);
  });
  
});

afterEach(() => {
  wrapped.unmount();
});