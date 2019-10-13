import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import LogoImg from '../LogoImg';

let wrapped;



describe('The Logo component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <LogoImg/>
      </TestRoot>
    );
    
  });

  it('Renders the Logo', () => {
    expect(
        wrapped.find('img').length
    ).toEqual(1);
  });

});

afterEach(() => {
  wrapped.unmount();
});