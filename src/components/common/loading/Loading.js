import React from 'react';
import styled from 'styled-components';
import loadingSrc from 'assets/loading.gif';

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5rem;
`;

export default function Loading() {
  return <Image src={loadingSrc} />;
}
