import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AssociatedGroup from './AssociatedGroup';

const GroupsContainer = styled.div`
  font-size: 1.5rem;
`;

function AssociatedGroups(props) {
  const { groups } = props;
  return (
    <GroupsContainer>
      <h3>This is shared with:</h3>
      {groups &&
        groups.map(group => {
          return <AssociatedGroup name={group.name} id={group.id} />;
        })}
    </GroupsContainer>
  );
}

AssociatedGroups.propTypes = {
  groups: PropTypes.array.isRequired,
};

export default AssociatedGroups;
