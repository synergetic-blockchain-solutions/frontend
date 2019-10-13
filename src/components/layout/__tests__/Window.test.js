import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import Window from '../Window';

let wrapped;



describe('The Window component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <Window/>
      </TestRoot>
    );
    
  });

  it('Renders the WindowView', () => {
    expect(
        wrapped.find('div').length
    ).toEqual(1);
  });

});

afterEach(() => {
  wrapped.unmount();
});