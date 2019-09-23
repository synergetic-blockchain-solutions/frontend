import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import CreateArtefact from '../CreateArtefact';

let wrapped;

describe('The Create Artefact Component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <CreateArtefact />
      </TestRoot>
    );
  });

  it('Renders the correct amount of input elements', () => {
    expect(wrapped.find('input').length).toEqual(7);
  });

  it('Renders the button', () => {
    expect(wrapped.find('button').length).toEqual(1);
  });

  it('All Inputs responds to change', () => {
    const text = 'Hello Worlds!';
    // Check the title
    expect(
      wrapped
        .find('input')
        .at(0)
        .props().value
    ).toEqual('');
    wrapped
      .find('input')
      .at(0)
      .simulate('change', { target: { value: text, name: 'title' } });
    wrapped.update();
    expect(
      wrapped
        .find('input')
        .at(0)
        .props().value
    ).toEqual(text);



    //image test component



    // Check the tag
    expect(
      wrapped
        .find('input')
        .at(2)
        .props().value
    ).toEqual('');
    wrapped
      .find('input')
      .at(2)
      .simulate('change', { target: { value: text, name: 'tag' } });
    wrapped.update();
    expect(
      wrapped
        .find('input')
        .at(2)
        .props().value
    ).toEqual(text);


    const date = '02/02/2019';
    // Check the date
    expect(
      wrapped
        .find('input')
        .at(3)
        .props().value
    ).toEqual('');
    wrapped
      .find('input')
      .at(3)
      .simulate('change', { target: { value: date, name: 'date' } });
    wrapped.update();
    expect(
      wrapped
        .find('input')
        .at(3)
        .props().value
    ).toEqual(date);


    // Check the details
    expect(
      wrapped
        .find('input')
        .at(4)
        .props().value
    ).toEqual('');
    wrapped
      .find('input')
      .at(4)
      .simulate('change', { target: { value: text, name: 'details' } });
    wrapped.update();
    expect(
      wrapped
        .find('input')
        .at(4)
        .props().value
    ).toEqual(text);


    // Check the addToFamilies
    expect(
      wrapped
        .find('input')
        .at(5)
        .props().value
    ).toEqual('');
    wrapped
      .find('input')
      .at(5)
      .simulate('change', { target: { value: text, name: 'addToFamilies' } });
    wrapped.update();
    expect(
      wrapped
        .find('input')
        .at(5)
        .props().value
    ).toEqual(text);


    // Check the address
    expect(
      wrapped
        .find('input')
        .at(6)
        .props().value
    ).toEqual('');
    wrapped
      .find('input')
      .at(6)
      .simulate('change', { target: { value: text, name: 'address' } });
    wrapped.update();
    expect(
      wrapped
        .find('input')
        .at(6)
        .props().value
    ).toEqual(text);
  });
  
  });
  afterEach(() => {
    wrapped.unmount();
  });
