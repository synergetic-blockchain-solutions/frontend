import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import FamilySummary from './FamilySummary';
import { getGroups } from 'actions/group';
import NoContent from 'components/common/containers/NoContent';
import isEmpty from 'helpers/is-empty';
import { ButtonLink } from 'components/common/buttons/Button';

const ViewFamiliesPage = styled.section`
  margin-top: 8rem;
  padding: 2rem;
`;

const ViewFamiliesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;
`;

const ViewFamiliesTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

class ViewFamilies extends Component {
  componentDidMount() {
    this.props.getGroups();
  }

  render() {
    const { groups, user } = this.props;
    const nonPersonalGroups = groups.filter(
      grp => grp.id !== user.privateGroup.id
    );
    return (
      <ViewFamiliesPage>
        <Flex>
          <ViewFamiliesTitle>View Families</ViewFamiliesTitle>
          <ButtonLink className="dark-brown" to="/families/create">
            Create Family
          </ButtonLink>
        </Flex>

        <ViewFamiliesContainer>
          {!isEmpty(nonPersonalGroups) ? (
            nonPersonalGroups
              .filter(grp => grp.id !== user.privateGroup.id)
              .map(group => {
                return <FamilySummary name={group.name} id={group.id} />;
              })
          ) : (
            <NoContent text="You Arent A Part Of Any Groups Yet" />
          )}
        </ViewFamiliesContainer>
      </ViewFamiliesPage>
    );
  }
}

const mapStateToProps = state => ({
  groups: state.group.groups,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  getGroups: () => dispatch(getGroups()),
});

ViewFamilies.propTypes = {
  getGroups: PropTypes.func.isRequired,
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewFamilies);
