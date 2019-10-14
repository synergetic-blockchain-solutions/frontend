import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UnstyledButton from 'components/common/buttons/UnstyledButton';
import { ButtonIcon } from 'components/common/icons/Icons';

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  width: 100%;
  max-height: 20rem;
  object-fit: cover;
`;

const DeleteButton = styled(UnstyledButton)`
  position: absolute;
  height: fit-content;
  width: fit-content;
  top: 2rem;
  right: 2rem;
  color: ${props => props.theme.colors.colorDanger};
  font-size: 3rem;
`;

function ImagePreview(props) {
  const { src, deleteImage } = props;
  console.log(props);
  return (
    <ImageContainer>
      <DeleteButton onClick={deleteImage}>
        <ButtonIcon className="fas fa-times-circle"></ButtonIcon>
      </DeleteButton>
      <Image src={src} />
    </ImageContainer>
  );
}

ImagePreview.propTypes = {
  src: PropTypes.string.isRequired,
  deleteImage: PropTypes.func.isRequired,
};

export default ImagePreview;
