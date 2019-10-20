import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import Logo from '../Logo';
import LogoImg from '../LogoImg';

let wrapped;



describe('The Logo component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <Logo/>
      </TestRoot>
    );
    
  });

  it('Renders the LogoContainer', () => {
    expect(
        wrapped.find('div').length
    ).toEqual(1);
  });

  it('Renders the LogoMotto', () => {
    expect(
        wrapped.find('h3').length
    ).toEqual(1);
  });

  it('Renders the LogoImg', () => {
    expect(
        wrapped.find(LogoImg).length
    ).toEqual(1);
  });

});

afterEach(() => {
  wrapped.unmount();
});