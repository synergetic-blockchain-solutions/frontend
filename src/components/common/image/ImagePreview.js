import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UnstyledButton from 'components/common/buttons/UnstyledButton';

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

const Icon = styled.i`
  pointer-events: none;
`;

function ImagePreview(props) {
  const { src, deleteImage, position } = props;
  console.log(position);
  return (
    <ImageContainer>
      <DeleteButton name={position} onClick={deleteImage}>
        <Icon className="fas fa-times-circle"></Icon>
      </DeleteButton>
      <Image src={src} />
    </ImageContainer>
  );
}

ImagePreview.propTypes = {
  src: PropTypes.string.isRequired,
  deleteImage: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
};

export default ImagePreview;
