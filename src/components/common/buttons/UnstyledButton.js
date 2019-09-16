import styled from 'styled-components';

const UnstyledButton = styled.button`
  border: none;
  background: transparent;

  :active,
  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;
  }
`;

export default UnstyledButton;
