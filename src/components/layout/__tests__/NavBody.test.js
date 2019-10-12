import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';

let wrapped;



describe('The NavBody component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <NavBody/>
      </TestRoot>
    );
    
  });

  it('Renders one NavBodyContainer', () => {
    expect(
        wrapped.find('div').length
    ).toEqual(1);
  });


});

afterEach(() => {
  wrapped.unmount();
});