import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import ViewFamily from '../ViewFamily';

let wrapped;

describe('The ViewFamily Component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <ViewFamily />
      </TestRoot>
    );
  });

  it('Renders the ViewFamilyPage section', () => {
    expect(
        wrapped.find('section').length
    ).toEqual(1);
  });
 
  
  });
  afterEach(() => {
    wrapped.unmount();
  });
