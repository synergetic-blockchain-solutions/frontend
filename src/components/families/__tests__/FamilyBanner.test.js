import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import FamilyBanner from '../FamilyBanner';

let wrapped;

describe('The Adder Component', () => {
  beforeEach(() => {

    const props={
        id: 1,
        name: "testName",
        description: "testDescription",
    }

    wrapped = mount(
      <TestRoot>
        <FamilyBanner{...props}/>
      </TestRoot>
    );
  });

  it('Renders the FamilyBannerContainer', () => {
    expect(
        wrapped.find('div').length
    ).toEqual(1);
  });
 
  
  });
  afterEach(() => {
    wrapped.unmount();
  });
