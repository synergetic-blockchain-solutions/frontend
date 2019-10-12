import React from 'react';
import { mount, shallow } from 'enzyme';
import TestRoot from 'TestRoot';
import ArtifactSummary from '../ArtifactSummary';
import {
    SummaryContainer,
    Summary,
  } from 'components/common/summaries/BlockSummary';


let wrapped;

const props={
  name: '',
  description: ''
}

describe('The ArtifactSummary component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <ArtifactSummary {...props} description= "testd" name="testn"/>
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

  /*it('renders the nameof the artifact',()=>{
    expect(
      wrapped.prop('name')
    ).toEqual("testn");
  });*/
  
});

afterEach(() => {
  wrapped.unmount();
});