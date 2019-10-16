import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import ToggleFamilyView from '../ToggleFamilyView';

let wrapped;

describe('The Adder Component', () => {
  beforeEach(() => {

    const props={
        toggleView: jest.fn(),
    }

    wrapped = mount(
      <TestRoot>
        <ToggleFamilyView {...props}/>
      </TestRoot>
    );
  });

  it('Renders the ToggleContainer', () => {
    expect(
        wrapped.find('div').length
    ).toEqual(1);
  });
 
  
  });
  afterEach(() => {
    wrapped.unmount();
  });
