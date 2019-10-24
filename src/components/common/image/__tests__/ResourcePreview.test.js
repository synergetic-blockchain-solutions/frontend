import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import ResourcePreview from '../ResourcePreview';

let wrapped;

describe('The Adder Component', () => {
  beforeEach(() => {

    const props={
        contentType: "testString",
        description: "testString",
        artifactId: 12,
        id: 12,
    }

    wrapped = mount(
      <TestRoot>
        <ResourcePreview {...props}/>
      </TestRoot>
    );
  });

  it('Renders the PreviewContainer', () => {
    expect(
        wrapped.find('div').length
    ).toEqual(1);
  });

  it('Renders the Image component', () => {
    expect(
        wrapped.find('img').length
    ).toEqual(1);
  });
 
  
  });
  afterEach(() => {
    wrapped.unmount();
  });
