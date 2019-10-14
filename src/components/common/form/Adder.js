import React from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from 'components/common/icons/Icons';
import { AddedContainer, AddedElem, AddedDelete } from './AdderHelpers';

function Adder(props) {
  const { values, removeGroup } = props;
  return (
    <AddedContainer>
      {values.map((value, index) => {
        return (
          <AddedElem key={index}>
            {value}
            <AddedDelete type="button" onClick={removeGroup} name={index}>
              <ButtonIcon className="fas fa-times-circle"></ButtonIcon>
            </AddedDelete>
          </AddedElem>
        );
      })}
    </AddedContainer>
  );
}

Adder.propTypes = {
  values: PropTypes.array.isRequired,
  removeGroup: PropTypes.func.isRequired,
};

export default Adder;
