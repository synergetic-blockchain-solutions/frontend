import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import SummaryResource from '../SummaryResource';

let wrapped;

describe('The SummaryResource component', () => {
  beforeEach(() => {

    const props={
        artifactId: 1,
        id: 2,
        contentType: "TestContentType",
        description: "TestDesc",
    }

    wrapped = mount(
      <TestRoot>
        <SummaryResource {...props}/>
      </TestRoot>
    );
  });

  it('Renders the Button', () => {
    expect(
        wrapped.find('img').length
    ).toEqual(1);
  });
  
});

afterEach(() => {
  wrapped.unmount();
});