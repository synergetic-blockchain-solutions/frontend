import styled from 'styled-components';
import UnstyledButton from 'components/common/buttons/UnstyledButton';

export const AddedContainer = styled.div``;

export const AddedElem = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 30px;
  height: 3rem;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.colorPrimary};
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

export const AddedDelete = styled(UnstyledButton)`
  position: absolute;
  font-size: 2rem;
  top: -0.5rem;
  right: -1rem;
  color: ${props => props.theme.colors.colorDanger};
  background-color: ${props => props.theme.colors.colorWhite};
  border-radius: 50%;
`;
