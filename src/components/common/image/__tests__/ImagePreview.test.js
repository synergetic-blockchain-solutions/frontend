import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import ImagePreview from '../ImagePreview';

let wrapped;



describe('The ImagePreview component', () => {
  beforeEach(() => {

    const props={
      src: "sourceTest",
      deleteImage: jest.fn(),
      position: 1,
      metaData: {},
      handleMetaDataChange: jest.fn(),
    }

    wrapped = mount(
      <TestRoot>
        <ImagePreview {...props}/>
      </TestRoot>
    );
    
  });

  it('Renders one ImageContainer', () => {
    expect(
        wrapped.find('div').length
    ).toEqual(3);
  });

  /*
  it('Renders one button', () => {
    expect(
        wrapped.find('UnstyledButton').length
    ).toEqual(1);
  });*/

  it('Renders the image', () => {
    expect(
        wrapped.find('img').length
    ).toEqual(1);
  });

});

afterEach(() => {
  wrapped.unmount();
});