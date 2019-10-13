import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Page from 'components/common/containers/Page';

const Welcome = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

class Profile extends Component {
  render() {
    const { user } = this.props;
    const { email, id, groups, name } = user;
    return (
      <Page>
        <Welcome>Welcome, {name}</Welcome>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Profile);
