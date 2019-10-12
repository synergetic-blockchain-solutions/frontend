import React from 'react';
import styled from 'styled-components';
import { mount, shallow } from 'enzyme';
import TestRoot from 'TestRoot';
import NavBrand from '../NavBrand';
import { NavLink } from 'react-router-dom';
import isEmpty from 'helpers/is-empty';

let wrapped;


const NavBrandContainer = styled(NavLink)`
  display: block;
  height: 5rem;
  width: 18rem;
  margin-left: 2rem;
  margin-top: 1rem;
`;

const props={
    token: '100',
}

describe('The NavBrand component', () => {
  beforeEach(() => {
    wrapped = mount(
      <TestRoot>
        <NavBrand {...props}/>
      </TestRoot>
    );
    
  });

  /*it('renders the dashboard on non-empty token', ()=>{
    const comp = (
        <NavBrandContainer to={isEmpty(props.token) ? '/' : '/dashboard'} className={"test"}>
            NaveLink Test
        </NavBrandContainer>
    );
    wrapped= shallow(comp);
    expect(
        wrapped.find('NavBrandContainer').first().props().to).to.equal("/home");
});
*/
});

afterEach(() => {
  wrapped.unmount();
});