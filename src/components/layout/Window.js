import React from 'react';
import styled from 'styled-components';

const WindowView = styled.div`
  position: relative;
  margin: 8rem auto 0 auto;
  float: none;
  max-width: 1300px;
  height: fit-content;
  min-height: calc(100vh - 7.8rem);
  min-height: calc(var(--vh, 1vh) * 100 - 7.8rem);
  background-color: lighten($color-gray-light-1, 1%);
`;

function Window(props) {
  return <WindowView>{props.children}</WindowView>;
}

export default Window;
