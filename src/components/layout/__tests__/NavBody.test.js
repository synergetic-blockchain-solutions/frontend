import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import NavBody from '../NavBody';

let wrapped;

const props={
  display: "display",
  hasAuth: 'true'
}


describe('The NavBody component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <NavBody {...props}/>
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