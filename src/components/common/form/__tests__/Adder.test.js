import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import Adder from '../Adder';
import { AddedContainer, AddedElem, AddedDelete } from '../AdderHelpers';

let wrapped;

describe('The Adder Component', () => {
  beforeEach(() => {

    const props={
      values: [1],
      removeGroup: jest.fn()
    }

    wrapped = mount(
      <TestRoot>
        <Adder {...props}/>
      </TestRoot>
    );
  });

  it('Renders the AddedContainer section', () => {
    expect(
        wrapped.find(AddedContainer).length
    ).toEqual(1);
  });

  it('Renders the AddedElem', () => {
    expect(
        wrapped.find(AddedElem).length
    ).toEqual(1);
  });

  it('Renders the AddedDelete', () => {
    expect(
        wrapped.find(AddedDelete).length
    ).toEqual(1);
  });
 
  
  });
  afterEach(() => {
    wrapped.unmount();
  });
