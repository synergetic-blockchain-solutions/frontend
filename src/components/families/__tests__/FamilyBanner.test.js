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

  it('Renders the FamilyBannerContainer and SummaryFooter', () => {
    expect(
        wrapped.find('div').length
    ).toEqual(2);
  });
 
  
  });
  afterEach(() => {
    wrapped.unmount();
  });
