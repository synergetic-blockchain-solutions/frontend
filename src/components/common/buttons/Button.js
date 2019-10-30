import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const ButtonBase = styled.button`
  min-width: fit-content;
  padding: 0rem 2rem;
  :disabled {
    background-color: ${props => props.theme.colors.colorGrayLight2} !important;
    border: none !important;
    cursor: auto;
  }
  :hover:enabled {
    cursor: pointer;
    /* transform: translateY(-2px); */
    transition: 0.2s ease-in;
  }
  :active:enabled {
    /* transform: translateY(1px); */
    outline: none;
  }
`;

export const ButtonLinkBase = styled(Link)`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  :hover:enabled {
    cursor: pointer;
    /* transform: translateY(-2px); */
    transition: 0.2s ease-in;
  }
  :active:enabled {
    /* transform: translateY(1px); */
    outline: none;
  }
`;

export const Button = styled(ButtonBase)`
  width: 15rem;
  height: 4rem;
  font-size: 1.6rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  margin: ${props => props.margin};
  outline: none;
  &.dark-brown {
    color: ${props => props.theme.colors.colorWhite};
    background-color: ${props => props.theme.colors.colorDarkBrown};
    border-bottom: 0.5rem solid ${props => props.theme.colors.colorDarkerBrown};
    :hover {
      border-bottom: 0.1rem solid
        ${props => darken(0.2, props.theme.colors.colorDarkerBrown)};
    }
  }
  &.warning {
    color: ${props => props.theme.colors.colorWhite};
    background-color: ${props => props.theme.colors.colorWarning};
  }
  &.success {
    color: ${props => props.theme.colors.colorWhite};
    background-color: ${props => props.theme.colors.colorSuccess};
  }
  &.info {
    color: ${props => props.theme.colors.colorWhite};
    background-color: ${props => props.theme.colors.colorInfo};
  }
  &.gray {
    color: ${props => props.theme.colors.colorBlack};
    background-color: ${props => props.theme.colors.colorGrayMedium};
    border: 1px solid
      ${props => darken(0.2, props.theme.colors.colorGrayMedium)};
  }
  &.dark-gray {
    color: ${props => props.theme.colors.colorWhite};
    background-color: ${props =>
      props.selected
        ? darken(0.2, props.theme.colors.colorGrayDark)
        : props.theme.colors.colorGrayDark};
    :hover {
      background-color: ${props =>
        darken(0.1, props.theme.colors.colorGrayDark)};
    }
  }
  &.danger {
    color: ${props => props.theme.colors.colorWhite};
    background-color: ${props => props.theme.colors.colorDanger};
    :hover {
      background-color: ${props => darken(0.1, props.theme.colors.colorDanger)};
    }
  }
  &.btn-block {
    margin-left: auto;
    margin-right: auto;
  }
  &.mr-2 {
    margin-right: 2rem;
  }
`;

export const ButtonLink = styled(ButtonLinkBase)`
  width: 15rem;
  height: 4rem;
  line-height: 4rem;
  font-size: 1.6rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  outline: none;
  &.dark-brown {
    color: ${props => props.theme.colors.colorWhite};
    background-color: ${props => props.theme.colors.colorDarkBrown};
    border-bottom: 0.5rem solid ${props => props.theme.colors.colorDarkerBrown};
    :hover {
      border-bottom: 0.1rem solid
        ${props => darken(0.2, props.theme.colors.colorDarkerBrown)};
    }
  }
  &.warning {
    color: ${props => props.theme.colors.colorWhite};
    background-color: ${props => props.theme.colors.colorWarning};
  }
  &.success {
    color: ${props => props.theme.colors.colorWhite};
    background-color: ${props => props.theme.colors.colorSuccess};
  }
  &.info {
    color: ${props => props.theme.colors.colorWhite};
    background-color: ${props => props.theme.colors.colorInfo};
  }
  &.gray {
    color: ${props => props.theme.colors.colorWhite};
    background-color: ${props => props.theme.colors.colorGrayMedium};
  }
  &.dark-gray {
    color: ${props => props.theme.colors.colorWhite};
    background-color: ${props =>
      props.selected
        ? darken(0.2, props.theme.colors.colorGrayDark)
        : props.theme.colors.colorGrayDark};
    :hover {
      background-color: ${props =>
        darken(0.1, props.theme.colors.colorGrayDark)};
    }
  }
  &.btn-block {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ButtonLarge = styled(Button)`
  height: 5rem;
  font-size: 2rem;
`;

export const ButtonLinkLarge = styled(ButtonLink)`
  height: 5rem;
  font-size: 2rem;
  line-height: 5rem;
`;