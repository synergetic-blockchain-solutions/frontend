import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import GroupImagePreview from '../GroupImagePreview';

let wrapped;



describe('The GroupImagePreview component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <GroupImagePreview/>
      </TestRoot>
    );
    
  });

  it('Renders one ImageContainer', () => {
    expect(
        wrapped.find('div').length
    ).toEqual(1);
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