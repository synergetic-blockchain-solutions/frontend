import styled from 'styled-components';

export const ButtonBase = styled.button`
  :disabled {
    background-color: ${props => props.theme.colors.colorGrayLight2} !important;
    cursor: auto;
  }

  :hover:enabled {
    cursor: pointer;
    transform: translateY(-2px);
    transition: 0.2s ease-in;
  }

  :active:enabled {
    transform: translateY(1px);
    outline: none;
  }
`;
