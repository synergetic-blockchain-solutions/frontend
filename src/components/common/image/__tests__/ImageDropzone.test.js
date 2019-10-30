import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import ImageDropzone from '../ImageDropzone';

let wrapped;

describe('The ImageDropzone Component', () => {
  beforeEach(() => {

    const props={
        recieveImage: jest.fn(),
        multiple: true,
    }

    wrapped = mount(
      <TestRoot>
        <ImageDropzone {...props}/>
      </TestRoot>
    );
  });

  it('Renders the ImageContainer', () => {
    expect(
        wrapped.find('label').length
    ).toEqual(1);
  });

  it('Renders the ImageText', () => {
    expect(
        wrapped.find('h3').length
    ).toEqual(1);
  });

  it('Renders the ImageInput', () => {
    expect(
        wrapped.find('input').length
    ).toEqual(1);
  });
 
  
  });
  afterEach(() => {
    wrapped.unmount();
  });
