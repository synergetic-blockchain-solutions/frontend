import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ButtonIcon } from 'components/common/icons/Icons';
import { AddedContainer, AddedElem, AddedDelete } from './AdderHelpers';

function Adder(props) {
  const { values, removeGroup, group } = props;
  return (
    <AddedContainer>
      {values.map((value, index) => {
        return (
          <AddedElem key={index}>
            {value.name}
            {group.id !== value.id && (
              <AddedDelete type="button" onClick={removeGroup} name={index}>
                <ButtonIcon className="fas fa-times-circle"></ButtonIcon>
              </AddedDelete>
            )}
          </AddedElem>
        );
      })}
    </AddedContainer>
  );
}

Adder.propTypes = {
  values: PropTypes.array.isRequired,
  removeGroup: PropTypes.func.isRequired,
  group: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  group: state.auth.user.privateGroup,
});

export default connect(mapStateToProps)(Adder);
