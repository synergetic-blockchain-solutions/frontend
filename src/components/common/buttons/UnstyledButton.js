import styled from 'styled-components';

const UnstyledButton = styled.button`
  border: none;
  background: transparent;
  -webkit-appearance: none;

  :active,
  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;
  }
`;

export default UnstyledButton;
