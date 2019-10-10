import styled from 'styled-components';

export const Input = styled.input`
  font-size: 1.2rem;
  border: 1px solid ${props => props.theme.colors.colorGrayMedium};
  border-radius: 5px;
  padding: 1rem 1rem;
  width: 100%;
  :focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.colorPrimaryLight};
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
`;

export const Error = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.colorDanger};
`;

export const InputContainer = styled.div`
  margin-bottom: ${props => props.marginBottom};
`;
