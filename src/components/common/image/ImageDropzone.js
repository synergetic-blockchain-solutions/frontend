import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isEmpty from 'helpers/is-empty';
import { centerXY } from 'components/common/styled-helpers/mixins';

const ImageContainer = styled.label`
  display: block;
  position: relative;
  width: 100%;
  height: 20rem;
  border: 2px dashed
    ${props =>
      props.dragOver
        ? props.theme.colors.primaryLight
        : props.theme.colors.colorBlack};
`;

const ImageText = styled.h3`
  ${centerXY}
  font-size: 1.6rem;
  width: fit-content;
`;

const ImageInput = styled.input`
  display: none;
  width: 100%;
  height: 100%;
`;

const Error = styled.p`
  color: ${props => props.theme.colors.colorDanger};
  font-size: 1.6rem;
`;

class ImageDropzone extends Component {
  state = {
    // preview: '',
    files: null,
    dragOver: false,
    error: '',
  };

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
    for (let file in files) {
      if (files.hasOwnProperty(file)) {
        if (
          files[file].type !== 'image/png' &&
          files[file].type !== 'image/jpeg' &&
          files[file].type !== 'image/jpg'
        ) {
          this.setState({
            error: `Cannot accept file type ${files[file].type}`,
          });
          return;
        }
      }
    }
    if (files.length !== 0) {
      this.handleFile(files);
    }
  };

  handleFile = files => {
    const preview = URL.createObjectURL(files[0]);

    this.setState({ files, preview, error: '' });

    for (let file in files) {
      if (files.hasOwnProperty(file)) {
        this.props.recieveImage({
          file: files[file],
          preview: URL.createObjectURL(files[file]),
        });
      }
    }
  };

  onChange = e => {
    e.preventDefault();
    const files = e.target.files;
    if (files.length !== 0) {
      this.handleFile(files);
    }
  };

  render() {
    const { dragOver, error } = this.state;
    const { multiple } = this.props;
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
        </ImageContainer>
        <ImageInput
          id="dropzone"
          name="dropzone"
          type="file"
          onChange={this.onChange}
          multiple={multiple}
          accept="image/png, image/jpeg, image/jpg"
        />
        {!isEmpty(error) && <Error>{error}</Error>}
      </React.Fragment>
    );
  }
}

ImageDropzone.defaultProps = {
  multiple: true,
};

ImageDropzone.propTypes = {
  recieveImage: PropTypes.func.isRequired,
  multiple: PropTypes.bool.isRequired,
};

export default ImageDropzone;
