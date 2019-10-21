import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  /* background-color: ${props => props.theme.colors.colorLightBrown}; */
  background-image: linear-gradient(${props =>
    props.theme.colors.colorLightBrown}, ${props =>
  props.theme.colors.colorLighterBrown});
  padding: 3rem;
  /* border-radius: 30px; */
  width: 50rem;
  margin-bottom: 2rem;
  box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.1);

  @media (max-width: ${props => props.theme.breakpoints.phoneScreen}) {
    width: calc(100vw - 2rem);
    max-width: 50rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.smallScreen}) {
    left: 50%;
    transform: translateX(-50%);
  }
`;
