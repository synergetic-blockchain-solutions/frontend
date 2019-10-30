import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import Select from '../Select';
import { InputContainer, Label } from '../InputHelpers';

let wrapped;

describe('The Adder Component', () => {
  beforeEach(() => {

    const props={
      groups: [],
      handleSelect: jest.fn(),
      selected: {},
      marginBottom: "testMarginBottom",
      label: "testLabel",
    }

    wrapped = mount(
      <TestRoot>
        <Select {...props}/>
      </TestRoot>
    );
  });

  it('Renders the InputContainer section', () => {
    expect(
        wrapped.find(InputContainer).length
    ).toEqual(1);
  });

 
  
  });
  afterEach(() => {
    wrapped.unmount();
  });
