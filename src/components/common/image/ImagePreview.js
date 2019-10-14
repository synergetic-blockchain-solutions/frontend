import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UnstyledButton from 'components/common/buttons/UnstyledButton';
import InputSmall from 'components/common/inputs/InputSmall';
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
  const { src, deleteImage, position, metaData, handleMetaDataChange } = props;
  console.log(props);
  return (
    <ImageContainer>
      <DeleteButton name={position} onClickEvent={deleteImage}>
        <ButtonIcon className="fas fa-times-circle"></ButtonIcon>
      </DeleteButton>
      <Image src={src} />
      <InputSmall
        value={metaData.name}
        handleStandardChange={handleMetaDataChange}
        type="text"
        name={`name-${position}`}
        placeholder="File Name"
        marginBottom="1rem"
        label="File Name"
      />
      <InputSmall
        value={metaData.description}
        handleStandardChange={handleMetaDataChange}
        type="text"
        name={`description-${position}`}
        placeholder="Description"
        marginBottom="1rem"
        label="Description"
      />
    </ImageContainer>
  );
}

ImagePreview.propTypes = {
  src: PropTypes.string.isRequired,
  deleteImage: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
  metaData: PropTypes.object.isRequired,
  handleMetaDataChange: PropTypes.func.isRequired,
};

export default ImagePreview;
