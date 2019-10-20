import React from 'react';
import styled from 'styled-components';
import { mount, shallow } from 'enzyme';
import TestRoot from 'TestRoot';
import NavBrand from '../NavBrand';
import { NavLink } from 'react-router-dom';
import isEmpty from 'helpers/is-empty';

let wrapped;


const props={
    token: '100',
}

describe('The NavBrand component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <NavBrand {...props}/>
      </TestRoot>
    );
    
  });

  it('Renders the NavLink', () => {
    expect(
        wrapped.find(NavLink).length
    ).toEqual(1);
  });
});

afterEach(() => {
  wrapped.unmount();
});