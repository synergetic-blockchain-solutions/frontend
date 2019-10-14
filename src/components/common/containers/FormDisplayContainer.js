import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => props.theme.colors.colorLightBlue};
  padding: 3rem;
  border-radius: 30px;
  width: 50rem;
  min-width: 80%;
  margin-bottom: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.phoneScreen}) {
    width: calc(100vw - 2rem);
    max-width: 50rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.smallScreen}) {
    left: 50%;
    transform: translateX(-50%);
  }
`;
