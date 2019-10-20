import React from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from 'components/common/icons/Icons';
import { AddedContainer, AddedElem, AddedDelete } from './AdderHelpers';

function Adder(props) {
  const { values, removeGroup } = props;
  console.log(values);
  return (
    <AddedContainer>
      {values.map((value, index) => {
        return (
          <AddedElem key={index}>
            {value.name}
            <AddedDelete
              type="button"
              onClick={() => removeGroup(value.id)}
              name={index}
            >
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
