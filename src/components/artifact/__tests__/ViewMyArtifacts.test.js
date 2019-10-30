import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import ViewMyArtifacts from '../ViewMyArtifacts';

let wrapped;

describe('The Create Artefact Component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <ViewMyArtifacts/>
      </TestRoot>
    );
  });

  it('Renders the MyArtifactsPage section', () => {
    expect(
        wrapped.find('section').length
    ).toEqual(1);
  });

  it('Renders the MyArtifactsPageTitle', () => {
    expect(
        wrapped.find('h1').length
    ).toEqual(1);
  });
 
  
  });
  afterEach(() => {
    wrapped.unmount();
  });
