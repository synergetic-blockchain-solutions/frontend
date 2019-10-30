import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import SearchBar from '../SearchBar';

let wrapped;

describe('The SearchBar Component', () => {
  beforeEach(() => {

    const props={
        onChange: jest.fn(),
        value: "testValue",
        placeholder: "testPlaceholder",
        handleSubmit: jest.fn(),
    }

    wrapped = mount(
      <TestRoot>
        <SearchBar {...props}/>
      </TestRoot>
    );
  });

  it('Renders the SearchBar container', () => {
    expect(
        wrapped.find('form').length
    ).toEqual(1);
  });

  it('Renders the SearchInput', () => {
    expect(
        wrapped.find('input').length
    ).toEqual(1);
  });

  it('Renders the SearchBarButton Container', () => {
    expect(
        wrapped.find('div').length
    ).toEqual(1);
  });
  
  it('Renders the SearchBarButton', () => {
    expect(
        wrapped.find('button').length
    ).toEqual(1);
  });
  
  });
  afterEach(() => {
    wrapped.unmount();
  });
