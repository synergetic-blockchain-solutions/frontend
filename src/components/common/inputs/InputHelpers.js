import styled from 'styled-components';

export const Input = styled.input`
  font-size: 1.4rem;
  border: 1px solid ${props => props.theme.colors.colorGrayMedium};
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.2);
  padding: 1rem 1rem;
  width: 100%;
  :focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.colorPrimaryLight};
  }
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 1.6rem;
  padding-bottom: 1rem;
`;

export const Error = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.colorDanger};
`;

export const InputContainer = styled.div`
  margin-bottom: ${props => props.marginBottom};
`;
