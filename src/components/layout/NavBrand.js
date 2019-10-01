import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from 'components/common/visual/LogoImg';
import isEmpty from 'helpers/is-empty';

const NavBrandContainer = styled(NavLink)`
  display: block;
  height: 5rem;
  width: 18rem;
  margin-left: 2rem;
  margin-top: 1rem;
`;

function NavBrand(props) {
  const { token } = props;
  return (
    <NavBrandContainer to={isEmpty(token) ? '/' : '/dashboard'}>
      <Logo />
    </NavBrandContainer>
  );
}

const mapStateToProps = state => ({
  token: state.auth.token,
});

NavBrand.propTypes = {
  token: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(NavBrand);
