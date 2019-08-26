import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import ButtonMedium from '../ButtonMedium';

let wrapped;

describe('The button component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <ButtonMedium
          clickEvent={() => true}
          text="Button"
          disabled={false}
          color="btn-primary-light"
          margin=""
        />
      </TestRoot>
    );
  });

  it('Renders correct text', () => {
    expect(wrapped.find('button').text()).toEqual('Button');
  });

  it('is disabled', () => {
    expect(wrapped.find('button').props().disabled).toEqual(false);
  });

  it('has the correct classes', () => {
    expect(wrapped.find('button').hasClass('btn-primary-light')).toEqual(true);
  });
});

describe('The button component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <ButtonMedium
          clickEvent={() => true}
          text="Submit"
          disabled={true}
          color=""
          margin="0 0 1rem 0"
        />
      </TestRoot>
    );
  });

  it('Renders correct text', () => {
    expect(wrapped.find('button').text()).toEqual('Submit');
  });

  it('is disabled', () => {
    expect(wrapped.find('button').props().disabled).toEqual(true);
  });

  it('has the correct classes', () => {
    expect(wrapped.find('button').hasClass('btn-primary-light')).toEqual(false);
  });
});

afterEach(() => {
  wrapped.unmount();
});
