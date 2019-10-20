import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import ProfileArrayElement from '../ProfileArrayElement';

let wrapped;

describe('The ProfileArrayElement Component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <ProfileArrayElement/>
      </TestRoot>
    );
  });

  it('Renders the ElementContainer', () => {
    expect(
        wrapped.find('div').length
    ).toEqual(1);
  });

  it('Renders the ElemLabel', () => {
    expect(
        wrapped.find('label').length
    ).toEqual(1);
  });
 
  
  });
  afterEach(() => {
    wrapped.unmount();
  });
