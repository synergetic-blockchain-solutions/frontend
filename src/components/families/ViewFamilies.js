import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FamilySummary from './FamilySummary';
import { getGroups } from 'actions/group';
import { ButtonIcon } from 'components/common/icons/Icons';

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
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const EditButton = styled(Link)`
  position: absolute;
  bottom: 5rem;
  right: 4rem;
  color: ${props => props.theme.colors.colorWarning};
  font-size: 7rem;
`;

class ViewFamilies extends Component {
  componentDidMount() {
    this.props.getGroups();
  }

  render() {
    const { groups, user } = this.props;
    return (
      <ViewFamiliesPage>
        <ViewFamiliesTitle>View Families</ViewFamiliesTitle>
        <ViewFamiliesContainer>
          {groups &&
            groups
              .filter(grp => grp.id !== user.privateGroup.id)
              .map(group => {
                return <FamilySummary name={group.name} id={group.id} />;
              })}
        </ViewFamiliesContainer>

        <EditButton to={`/families/create`}>
          <ButtonIcon className="fas fa-plus-circle"></ButtonIcon>
        </EditButton>
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
