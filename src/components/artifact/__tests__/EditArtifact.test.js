import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import EditArtifact from '../EditArtifact';

let wrapped;

describe('The Edit Artefact Component', () => {
  beforeEach(() => {

    const props={
        updateArtifact: jest.fn(),
        artifact: {},
        addResourceToArtifact: jest.fn(),
        resetArtifact: jest.fn(),
        getGroups: jest.fn(),
        usersGroups: [{}],
        getArtifact: jest.fn(),
        user: {},
    }

    wrapped = mount(
      <TestRoot>
        <EditArtifact {...props}/>
      </TestRoot>
    );
  });

  it('Renders the correct amount of input elements', () => {
    expect(wrapped.find('input').length).toEqual(5);
  });

  it('Renders the correct amount of textarea elements', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
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
      .simulate('change', { target: { value: text, name: 'name' } });
    wrapped.update();
    expect(
      wrapped
        .find('input')
        .at(0)
        .props().value
    ).toEqual(text);



    // Check the tag
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


    /*const date = new Date(2018, 11, 24);
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
        .find('textarea')
        .at(0)
        .props().value
    ).toEqual('');
    wrapped
      .find('textarea')
      .at(0)
      .simulate('change', { target: { value: text, name: 'details' } });
    wrapped.update();
    expect(
      wrapped
        .find('textarea')
        .at(0)
        .props().value
    ).toEqual(text);*/


    // Check the addToFamilie3
    expect(
      wrapped
        .find('input')
        .at(4)
        .props().value
    ).toEqual('');
    wrapped
      .find('input')
      .at(4)
      .simulate('change', { target: { value: text, name: 'addToFamilies' } });
    wrapped.update();
    expect(
      wrapped
        .find('input')
        .at(4)
        .props().value
    ).toEqual(text);
    
  });
  
  });
  afterEach(() => {
    wrapped.unmount();
  });
