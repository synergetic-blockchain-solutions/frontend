import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ButtonLink } from 'components/common/buttons/Button';

const SuccessContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 8rem 1rem;
`;

const SuccessText = styled.h2`
  font-size: 2.5rem;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`;

const LinkText = styled(ButtonLink)`
  position: absolute;
  margin-top: 2rem;
  font-size: 1.8rem;
  left: 50%;
  top: calc(50% + 4rem);
  transform: translate(-50%, -50%);
`;

function Success(props) {
  const { text, linkAddress, linkText } = props;
  return (
    <SuccessContainer>
      <SuccessText>{text}</SuccessText>
      <LinkText className="dark-brown" to={linkAddress}>
        {linkText}
      </LinkText>
    </SuccessContainer>
  );
}

Success.propTypes = {
  text: PropTypes.string.isRequired,
  linkAddress: PropTypes.string,
  linkText: PropTypes.string,
};

export default Success;
