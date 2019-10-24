import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import ViewFamilies from '../ViewFamilies';

let wrapped;

describe('The ViewFamilies Component', () => {
  beforeEach(() => {

    const props={
      getGroups: jest.fn(),
      groups: [{}],
      user: {},
    }

    wrapped = mount(
      <TestRoot>
        <ViewFamilies {...props}/>
      </TestRoot>
    );
  });

  it('Renders the ViewFamiliesPage section', () => {
    expect(
        wrapped.find('section').length
    ).toEqual(1);
  });

  it('Renders the ViewFamiliesTitle', () => {
    expect(
        wrapped.find('h1').length
    ).toEqual(2);
  });

 
  
  });
  afterEach(() => {
    wrapped.unmount();
  });
