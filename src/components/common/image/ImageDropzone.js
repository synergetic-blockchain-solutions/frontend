import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isEmpty from 'helpers/is-empty';
import UnstyledBtn from 'components/common/buttons/UnstyledButton';

const ImageContainer = styled.label`
  display: block;
  position: relative;
  width: 100%;
  height: 30rem;
  border: 2px dashed
    ${props =>
      props.dragOver
        ? props.theme.colors.primaryLight
        : props.theme.colors.colorBlack};
  border-radius: 10px;
`;

const ImageText = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.6rem;
  width: fit-content;
`;

const ImageInput = styled.input`
  display: none;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const Button = styled(UnstyledBtn)`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

const Icon = styled.i`
  font-size: 2rem;
  color: ${props => props.theme.colors.colorDanger};
`;

class ImageDropzone extends Component {
  state = {
    preview: '',
    files: null,
    dragOver: false,
  };

  fileInputRef = React.createRef();

  static getDerivedStateFromProps(nextProps, prevState) {
    if (isEmpty(nextProps.images)) {
      return { preview: '', files: null, dragOver: false };
    } else if (
      !isEmpty(nextProps.images) &&
      nextProps.images.length !== prevState.files.length
    ) {
      return {
        ...prevState,
        preview: nextProps.images[0].preview,
        files: nextProps.images,
      };
    }
  }

  onDragOver = e => {
    e.preventDefault();
    this.setState({ dragOver: true });
  };

  onDragLeave = e => {
    e.preventDefault();
    this.setState({ dragOver: false });
  };

  onDrop = e => {
    e.preventDefault();

    const files = e.dataTransfer.files;

    const preview = URL.createObjectURL(files[0]);

    this.setState({ files: files, preview: preview });
  };

  onChange = e => {
    const files = e.target.files;

    const preview = URL.createObjectURL(files[0]);

    this.setState({ files, preview });

    for (let file in files) {
      if (files.hasOwnProperty(file)) {
        this.props.recieveImage({
          file: files[file],
          preview: URL.createObjectURL(files[file]),
        });
      }
    }
  };

  render() {
    console.log(this.state);
    const { preview, dragOver } = this.state;
    return (
      <React.Fragment>
        <ImageContainer
          dragOver={dragOver}
          onDragOver={this.onDragOver}
          onDragLeave={this.onDragLeave}
          onDrop={this.onDrop}
          htmlFor="dropzone"
        >
          <ImageText>
            Drag Image or Click Inside Dotted Line{' '}
            <i className="far fa-image"></i>
          </ImageText>
          {!isEmpty(preview) && <Image src={preview} />}
          {!isEmpty(preview) && (
            <Button type="button">
              <Icon className="fas fa-times-circle"></Icon>
            </Button>
          )}
        </ImageContainer>
        <ImageInput
          id="dropzone"
          name="dropzone"
          type="file"
          onChange={this.onChange}
          multiple
        />
      </React.Fragment>
    );
  }
}

ImageDropzone.propTypes = {
  recieveImage: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default ImageDropzone;
