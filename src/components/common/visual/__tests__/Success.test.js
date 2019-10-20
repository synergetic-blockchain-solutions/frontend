import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import Success from '../Success';
import { Link } from 'react-router-dom';

let wrapped;



describe('The Success component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <Success/>
      </TestRoot>
    );
    
  });

  it('Renders the Success container', () => {
    expect(
        wrapped.find('div').length
    ).toEqual(1);
  });

  it('Renders the Success text', () => {
    expect(
        wrapped.find('h2').length
    ).toEqual(1);
  });

  it('Renders the SucccessLink', () => {
    expect(
        wrapped.find(Link).length
    ).toEqual(1);
  });

});

afterEach(() => {
  wrapped.unmount();
});