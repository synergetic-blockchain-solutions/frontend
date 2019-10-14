import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchBarContainer = styled.form`
  display: flex;
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 3.5rem;
  border-top-left-radius: ${props => props.theme.borders.borderRadiusLarge};
  border-bottom-left-radius: ${props => props.theme.borders.borderRadiusLarge};
  font-size: ${props => props.theme.fontSizes.prominent};
  padding: 0 2rem;
  border: 1px solid ${props => props.theme.colors.colorGrayMedium};

  :focus,
  :active {
    outline: none;
    border: 1px solid ${props => props.theme.colors.colorPrimaryLight};
  }
`;

const SearchBarButtonContainer = styled.div``;

const SearchBarButton = styled.button`
  font-size: 2rem;
  background-color: ${props => props.theme.colors.colorPrimaryLight};
  color: ${props => props.theme.colors.colorWhite};
  height: 3.5rem;
  padding-right: 1rem;
  padding-left: 0.5rem;
  border: none;
  border-top-right-radius: ${props => props.theme.borders.borderRadiusLarge};
  border-bottom-right-radius: ${props => props.theme.borders.borderRadiusLarge};
`;

const SearchBar = props => {
  const { placeholder, onChange, value, handleSubmit } = props;

  return (
    <SearchBarContainer onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <SearchBarButtonContainer>
        <SearchBarButton onClick={handleSubmit}>
          <i className="fas fa-search"></i>
        </SearchBarButton>
      </SearchBarButtonContainer>
    </SearchBarContainer>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
