import React from 'react';
import { mount } from 'enzyme';
import TestRoot from 'TestRoot';
import ViewSingleArtifact from '../ViewSingleArtifact';

let wrapped;

describe('The ViewSingleArtifact Component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <ViewSingleArtifact />
      </TestRoot>
    );
    wrapped.update();
  });

  it('Renders the SingleArtifactPage section', () => {
    expect(
        wrapped.find('section').length
    ).toEqual(1);
  });

  it('Renders the SingleArtifactTitle', () => {
    expect(
        wrapped.find('h1').length
    ).toEqual(1);
  });

  it('Renders the description', () => {
    expect(
        wrapped.find('div').length
    ).toEqual(1);
  });
 
  
  });
  afterEach(() => {
    wrapped.unmount();
  });
