import React from 'react';
import { mount} from 'enzyme';
import TestRoot from 'TestRoot';
import ArtifactAssociation from '../ArtifactAssociations';
import AssociatedGroup from '../Association';

let wrapped;

describe('The Adder Component', () => {
  beforeEach(() => {

    const props={
        groups: [{}],
        title: "testTitle",
    }

    wrapped = mount(
      <TestRoot>
        <ArtifactAssociation {...props}/>
      </TestRoot>
    );
  });

  it('Renders the Groups container', () => {
    expect(
        wrapped.find('div').length
    ).toEqual(1);
  });

  it('Renders the GroupList', () => {
    expect(
        wrapped.find('ul').length
    ).toEqual(1);
  });

  it('Renders the AssociatedGroup', () => {
    expect(
        wrapped.find(AssociatedGroup).length
    ).toEqual(1);
  });
 
  
  });
  afterEach(() => {
    wrapped.unmount();
  });
