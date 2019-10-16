import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import DropdownWrapper from '../DropdownWrapper';

let wrapped;



describe('The DropdownWrapper component', () => {
  beforeEach(() => {

    const props={

    }

    wrapped = mount(
      <TestRoot>
        <DropdownWrapper {...props}/>
      </TestRoot>
    );
    
  });

  it('Renders two divs', () => {
    expect(
        wrapped.find('div').length
    ).toEqual(2);
  });


});

afterEach(() => {
  wrapped.unmount();
});