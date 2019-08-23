import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import RegistrationForm from '../RegistrationForm';

let wrapped;

describe('The Registration Form Component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <RegistrationForm />
      </TestRoot>
    );
  });

  it('Renders the correct amount of input elements', () => {
    expect(wrapped.find('input').length).toEqual(4);
  });

  it('Renders the button', () => {
    expect(wrapped.find('button').length).toEqual(1);
  });

  it('Renders the logo', () => {
    expect(wrapped.find('img').length).toEqual(1);
  });

  it('All Inputs responds to change', () => {
    const text = 'Hello Worlds!'
    // Check the name
    expect(wrapped.find('input').at(0).props().value).toEqual('');
    wrapped.find('input').at(0).simulate('change', { target: { value: text, name: 'name' } });
    wrapped.update();
    expect(wrapped.find('input').at(0).props().value).toEqual(text);

    // Check the email
    expect(wrapped.find('input').at(1).props().value).toEqual('');
    wrapped.find('input').at(1).simulate('change', { target: { value: text, name: 'email' } });
    wrapped.update();
    expect(wrapped.find('input').at(1).props().value).toEqual(text);

    // Check the password
    expect(wrapped.find('input').at(2).props().value).toEqual('');
    wrapped.find('input').at(2).simulate('change', { target: { value: text, name: 'password' } });
    wrapped.update();
    expect(wrapped.find('input').at(2).props().value).toEqual(text);

    // Check password confirmation
    expect(wrapped.find('input').at(3).props().value).toEqual('');
    wrapped.find('input').at(3).simulate('change', { target: { value: text, name: 'passwordConfirm' } });
    wrapped.update();
    expect(wrapped.find('input').at(3).props().value).toEqual(text);
  });

  it('Disables and enables the button correctly', () => {
    const text = 'Hello Worlds!';

    expect(wrapped.find('button').props().disabled).toEqual(true);

    // Check the name
    wrapped.find('input').at(0).simulate('change', { target: { value: text, name: 'name' } });
    wrapped.find('input').at(1).simulate('change', { target: { value: text, name: 'email' } });
    wrapped.find('input').at(2).simulate('change', { target: { value: text, name: 'password' } });
    wrapped.find('input').at(3).simulate('change', { target: { value: text, name: 'passwordConfirm' } });
    wrapped.update();

    expect(wrapped.find('button').props().disabled).toEqual(false);

  })
});

afterEach(() => {
  wrapped.unmount();
});
