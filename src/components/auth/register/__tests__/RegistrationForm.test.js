import React from 'react';
import { mount } from 'enzyme';
import Root from 'components/Root';
import RegistrationForm from '../RegistrationForm';
import 'jest-styled-components';

let wrapped;

describe('The Registration Form Component', () => {
  beforeEach(() => {
    wrapped = mount(
      <Root>
        <RegistrationForm />
      </Root>
    );
  });

  it('Renders the correct amount of input elements', () => {
    console.log(wrapped);
    console.log(wrapped.text());
    expect(wrapped.find('StyledComponent').length).toEqual(4);
  });
});

afterEach(() => {
  wrapped.unmount();
});
