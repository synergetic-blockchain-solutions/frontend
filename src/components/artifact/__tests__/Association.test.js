import React from 'react';
import { mount, shallow } from 'enzyme';
import TestRoot from 'TestRoot';
import Association from '../Association';


let wrapped;

const props={
  name: '',
  description: ''
}

describe('The Association component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <Association/>
      </TestRoot>
    );
    
  });

  it('Renders the Group', () => {
    expect(
        wrapped.find('li').length
    ).toEqual(1);
  });
  
});

afterEach(() => {
  wrapped.unmount();
});