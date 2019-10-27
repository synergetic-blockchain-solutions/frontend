import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import CarouselResource from '../CarouselResource';

let wrapped;

describe('The CarouselResource component', () => {
  beforeEach(() => {

    const props={
        artifactId: 1,
        id: 2,
        contentType: "TestContentType",
        description: "TestDesc",
    }

    wrapped = mount(
      <TestRoot>
        <CarouselResource {...props}/>
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