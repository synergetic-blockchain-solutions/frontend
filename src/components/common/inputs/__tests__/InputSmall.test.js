import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import InputSmall from '../InputSmall';

let wrapped;

describe('The Input component without an error', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <InputSmall 
          handleStandardChange={() => true}
          value='Test'
          type='password'
          name='password'
          placeholder='Password'
          marginBottom=""
          label="Password"
          error="" 
        />
      </TestRoot>
    );
  });

  it('has a label and an input', () => {
    expect(wrapped.find('input').length).toEqual(1);
    expect(wrapped.find('label').length).toEqual(1);
  });

  it('doesnt have an error', () => {
    expect(wrapped.find('p').length).toEqual(0);
  });

  it('has the correct properties', () => {
    expect(wrapped.find('input').props().type).toEqual('password');
    expect(wrapped.find('input').props().value).toEqual('Test');
    expect(wrapped.find('input').props().name).toEqual('password');
    expect(wrapped.find('input').props().placeholder).toEqual('Password');
  })
  
});


describe('The Input component with an Error', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <InputSmall 
          handleStandardChange={() => true}
          value='Test'
          type='password'
          name='password'
          placeholder='Password'
          marginBottom=""
          label="Password"
          error="Something Wrong" 
        />
      </TestRoot>
    );
  });

  it('has a label and an input', () => {
    expect(wrapped.find('input').length).toEqual(1);
    expect(wrapped.find('label').length).toEqual(1);
  });

  it('has the correct properties', () => {
    expect(wrapped.find('input').props().type).toEqual('password');
    expect(wrapped.find('input').props().value).toEqual('Test');
    expect(wrapped.find('input').props().name).toEqual('password');
    expect(wrapped.find('input').props().placeholder).toEqual('Password');
  });

  it('renders the error', () => {
    expect(wrapped.find('p').text()).toEqual('Something Wrong')
  })
  
});

afterEach(() => {
  wrapped.unmount();
});