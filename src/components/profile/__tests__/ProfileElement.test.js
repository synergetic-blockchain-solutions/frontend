import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import ProfileElement from '../ProfileElement';

let wrapped;

describe('The ProfileElement  Component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <ProfileElement/>
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

  it('Renders the ElemValue', () => {
    expect(
        wrapped.find('p').length
    ).toEqual(1);
  });
 
  
  });
  afterEach(() => {
    wrapped.unmount();
  });
