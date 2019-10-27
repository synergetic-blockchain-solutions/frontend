import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { InputContainer, Label } from './InputHelpers';

function MySelect(props) {
  const { groups, handleSelect, selected, marginBottom, label } = props;

  const options = groups.map(group => {
    return { label: group.name, value: group.id };
  });

  return (
    <InputContainer marginBottom={marginBottom}>
      {label && <Label>{label}</Label>}
      <Select
        options={options}
        onChange={handleSelect}
        value={selected}
        isMulti
      />
    </InputContainer>
  );
}

MySelect.propTypes = {
  groups: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
  selected: PropTypes.object,
  marginBottom: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default MySelect;
