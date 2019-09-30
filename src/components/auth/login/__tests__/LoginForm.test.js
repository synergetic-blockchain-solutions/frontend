import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import LoginForm from '../LoginForm';

let wrapped;

describe('The Login Form component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <LoginForm />
      </TestRoot>
    );
  });

  it('Renders the correct amount of input elements', () => {
    expect(wrapped.find('input').length).toEqual(2);
  });

  it('Renders the button', () => {
    expect(wrapped.find('button').length).toEqual(1);
  });

  it('Renders the logo', () => {
    expect(wrapped.find('img').length).toEqual(1);
  });

  it('All Inputs responds to change', () => {
    const text = 'Hello World!';

    // Check the email
    expect(
      wrapped
        .find('input')
        .at(0)
        .props().value
    ).toEqual('');
    wrapped
      .find('input')
      .at(0)
      .simulate('change', { target: { value: text, name: 'email' } });
    wrapped.update();
    expect(
      wrapped
        .find('input')
        .at(0)
        .props().value
    ).toEqual(text);

    // Check the password
    expect(
      wrapped
        .find('input')
        .at(1)
        .props().value
    ).toEqual('');
    wrapped
      .find('input')
      .at(1)
      .simulate('change', { target: { value: text, name: 'password' } });
    wrapped.update();
    expect(
      wrapped
        .find('input')
        .at(1)
        .props().value
    ).toEqual(text);
  });

    it('Disables and enables the button correctly', () => {
      const text = 'Hello World!';
  
      expect(wrapped.find('button').props().disabled).toEqual(true);
  
      // Check the name
      wrapped
        .find('input')
        .at(0)
        .simulate('change', { target: { value: text, name: 'email' } });
      wrapped
        .find('input')
        .at(1)
        .simulate('change', { target: { value: text, name: 'password' } });
      wrapped.update();
  
      expect(wrapped.find('button').props().disabled).toEqual(false);
    });


});

afterEach(() => {
  wrapped.unmount();
});