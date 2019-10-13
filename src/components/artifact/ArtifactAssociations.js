import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AssociatedGroup from './Association';

const GroupsContainer = styled.div`
  font-size: 1.5rem;
`;

const GroupsList = styled.ul`
  margin-left: 2rem;
`;

function AssociatedGroups(props) {
  const { groups, title } = props;
  groups && groups.push({ name: 'The Smiths', id: 9 });
  return (
    <GroupsContainer>
      <h3>{title}:</h3>
      <GroupsList>
        {groups &&
          groups.map(group => {
            return (
              <AssociatedGroup name={group.name} id={group.id} key={group.id} />
            );
          })}
      </GroupsList>
    </GroupsContainer>
  );
}

AssociatedGroups.propTypes = {
  groups: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default AssociatedGroups;
