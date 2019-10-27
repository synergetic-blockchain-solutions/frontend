import styled from 'styled-components';

export const SummaryContainer = styled.div`
  margin-bottom: 2rem;
`;

export const Summary = styled.div`
  position: relative;
  /* border: 1px solid ${props => props.theme.colors.colorBlack}; */
  padding: 0;
  background-image: url("${props => props.srcUrl}");
  background-size: cover;
  height: 30rem;
  width: 30%;
  min-width: 40rem;

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

export const SummaryTitle = styled.h3`
  font-size: 1.6rem;
  color: ${props => props.theme.colors.colorDarkBrown};
`;

export const SummaryFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  color: ${props => props.theme.colors.colorWhite};
`;
