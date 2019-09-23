import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import CreateGroup from '../CreateGroup';

let wrapped;

describe('The Create Group Component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <CreateGroup />
      </TestRoot>
    );
  });

  it('Renders the correct amount of input elements', () => {
    expect(wrapped.find('input').length).toEqual(4);
  });

  it('Renders the button', () => {
    expect(wrapped.find('button').length).toEqual(1);
  });


  it('All Inputs responds to change', () => {
    const text = 'Hello Worlds!';
    // Check the groupName
    expect(
      wrapped
        .find('input')
        .at(0)
        .props().value
    ).toEqual('');
    wrapped
      .find('input')
      .at(0)
      .simulate('change', { target: { value: text, name: 'groupName' } });
    wrapped.update();
    expect(
      wrapped
        .find('input')
        .at(0)
        .props().value
    ).toEqual(text);

    
    //image test component


    // Check the details
    expect(
      wrapped
        .find('input')
        .at(2)
        .props().value
    ).toEqual('');
    wrapped
      .find('input')
      .at(2)
      .simulate('change', { target: { value: text, name: 'details' } });
    wrapped.update();
    expect(
      wrapped
        .find('input')
        .at(2)
        .props().value
    ).toEqual(text);

    // Check tags
    expect(
      wrapped
        .find('input')
        .at(3)
        .props().value
    ).toEqual('');
    wrapped
      .find('input')
      .at(3)
      .simulate('change', { target: { value: text, name: 'tag' } });
    wrapped.update();
    expect(
      wrapped
        .find('input')
        .at(3)
        .props().value
    ).toEqual(text);
  });

  
});

afterEach(() => {
  wrapped.unmount();
});
