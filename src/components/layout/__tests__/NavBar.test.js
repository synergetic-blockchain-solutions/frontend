import React from 'react';
import styled from 'styled-components';
import { mount, shallow } from 'enzyme';
import TestRoot from 'TestRoot';
import NavBar from '../NavBar';
import NavBrand from '../NavBrand';
import NavBody from '../NavBody';

let wrapped;



describe('The NavBar component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <NavBar/>
      </TestRoot>
    );
    
  });

  it('Renders the NavBrand', () => {
    expect(
        wrapped.find(NavBrand).length
    ).toEqual(1);
  });

  it('Renders the Nav', () => {
    expect(
        wrapped.find('nav').length
    ).toEqual(1);
  });

  it('Renders the Button', () => {
    expect(
        wrapped.find('button').length
    ).toEqual(1);
  });

  it('Renders one NavBody', () => {
    expect(
        wrapped.find(NavBody).length
    ).toEqual(1);
  });

});

afterEach(() => {
  wrapped.unmount();
});