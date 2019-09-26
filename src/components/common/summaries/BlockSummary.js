import styled from 'styled-components';

export const SummaryContainer = styled.div`
  margin-bottom: 2rem;
`;

export const Summary = styled.div`
  position: relative;
  border: 1px solid ${props => props.theme.colors.colorBlack};
  padding: 1.5rem;
  background-image: url("${props => props.srcUrl}");
  background-size: cover;
  height: 30rem;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors.colorBlack};
    opacity: 0.3;
  }
`;
