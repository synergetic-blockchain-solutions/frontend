import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import Artifacts from '../Artifacts';

let wrapped;

describe('The Artifacts Component', () => {
  beforeEach(() => {

    const props={
        artifacts: [{}],
    }

    wrapped = mount(
      <TestRoot>
        <Artifacts {...props}/>
      </TestRoot>
    );
  });

  it('Renders the ArtifactsContainer', () => {
    expect(
        wrapped.find('div').length
    ).toEqual(3);
  });
 
  
  });
  afterEach(() => {
    wrapped.unmount();
  });
