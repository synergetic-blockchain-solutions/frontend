import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import FamilySummary from './FamilySummary';
import { getGroups } from 'actions/group';

const ViewFamiliesPage = styled.section`
  margin-top: 8rem;
  padding: 2rem;
`;

const ViewFamiliesTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

class ViewFamilies extends Component {
  componentDidMount() {
    this.props.getGroups();
  }

  render() {
    const { groups } = this.props;
    return (
      <ViewFamiliesPage>
        <ViewFamiliesTitle>View Families</ViewFamiliesTitle>
        {groups &&
          groups.map(group => {
            return (
              <FamilySummary
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                name={group.name}
                id={group.id}
              />
            );
          })}
      </ViewFamiliesPage>
    );
  }
}

const mapStateToProps = state => ({
  groups: state.group.groups,
});

const mapDispatchToProps = dispatch => ({
  getGroups: () => dispatch(getGroups()),
});

ViewFamilies.propTypes = {
  getGroups: PropTypes.func.isRequired,
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewFamilies);
