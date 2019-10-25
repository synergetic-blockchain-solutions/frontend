import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import isEmpty from 'helpers/is-empty';

const NotFoundPage = styled.div`
  position: absolute;
  top: calc(50% - 8rem);
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const NotFoundTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const NotFoundSubTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const NotFoundLink = styled(Link)`
  font-size: 1.8rem;
  text-decoration: none;
  margin-right: 2rem;
`;

function NotFound(props) {
  const { user } = props;
  return (
    <NotFoundPage>
      <NotFoundTitle>Page Not Found</NotFoundTitle>
      <NotFoundSubTitle>Go to</NotFoundSubTitle>
      {!isEmpty(user) ? (
        <React.Fragment>
          <NotFoundLink to="/my-artifacts">
            My Artifacts <i className="fas fa-hand-holding-heart"></i>
          </NotFoundLink>
          <NotFoundLink to="/families">
            Families <i className="fas fa-users"></i>
          </NotFoundLink>
          <NotFoundLink to="/create">
            Create <i className="fas fa-plus-square"></i>
          </NotFoundLink>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <NotFoundLink to="/">
            Login <i className="fas fa-sign-in"></i>
          </NotFoundLink>
          <NotFoundLink to="/sign-up">
            Register <i className="far fa-file-contract"></i>
          </NotFoundLink>
        </React.Fragment>
      )}
    </NotFoundPage>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

NotFound.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(NotFound);
