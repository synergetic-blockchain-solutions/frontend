import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import CreateOptions from '../CreateOptions';
import { Link } from 'react-router-dom';


let wrapped;

describe('The Adder Component', () => {
  beforeEach(() => {

    wrapped = mount(
      <TestRoot>
        <CreateOptions/>
      </TestRoot>
    );
  });

  it('Renders the Containers', () => {
    expect(
        wrapped.find('div').length
    ).toEqual(4);
  });

  it('Renders the two option titles', () => {
    expect(
        wrapped.find('h2').length
    ).toEqual(2);
  });

  it('Renders 2 buttonLinks', () => {
    expect(
        wrapped.find(Link).length
    ).toEqual(2);
  });
 
  
  });
  afterEach(() => {
    wrapped.unmount();
  });
