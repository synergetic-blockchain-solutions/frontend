import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import CreateArtifact from '../CreateArtifact';
import { MY1X0 } from 'components/common/containers/GeneralContainers';

let wrapped;

describe('The Create Artefact Component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <CreateArtifact />
      </TestRoot>
    );
  });

  it('Renders the correct amount of input elements', () => {
    expect(wrapped.find('input').length).toEqual(4);
  });

  it('Renders the correct amount of textarea elements', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
  });

  it('Renders the button', () => {
    expect(wrapped.find('button').length).toEqual(1);
  });

  it('Renders the correct amount of image fields', () => {
    expect(wrapped.find(MY1X0).length).toEqual(2);
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


    
  });
  
  });
  afterEach(() => {
    wrapped.unmount();
  });
