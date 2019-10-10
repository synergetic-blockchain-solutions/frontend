import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AuthInput from 'components/common/inputs/AuthInput';
import UnstyledButton from 'components/common/buttons/UnstyledButton';
import { ButtonIcon } from 'components/common/icons/Icons';

const Form = styled.form`
  margin-bottom: 1rem;
`;

const AddedContainer = styled.div``;

const AddedElem = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 30px;
  height: 3rem;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.colorPrimary};
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

const AddedDelete = styled(UnstyledButton)`
  position: absolute;
  font-size: 2rem;
  top: -0.5rem;
  right: -1rem;
  color: ${props => props.theme.colors.colorDanger};
`;

class InputAdder extends Component {
  state = {
    value: '',
  };

  handleStandardChange = e => this.setState({ value: e.target.value });

  addInput = e => {
    const { value } = this.state;
    this.props.addElem(value);
    this.setState({ value: '' });
  };

  removeGroup = e => this.props.removeElem(Number(e.target.name));

  render() {
    const {
      type,
      inputName,
      values,
      placeholder,
      marginBottom,
      label,
    } = this.props;
    const { value } = this.state;
    return (
      <Form onSubmit={this.addInput}>
        <AuthInput
          handleStandardChange={this.handleStandardChange}
          value={value}
          type={type}
          name={inputName}
          placeholder={placeholder}
          marginBottom={marginBottom}
          label={label}
        />
        <AddedContainer>
          {values.map((value, index) => {
            return (
              <AddedElem key={index}>
                {value}
                <AddedDelete
                  type="button"
                  onClick={this.removeGroup}
                  name={index}
                >
                  <ButtonIcon className="fas fa-times-circle"></ButtonIcon>
                </AddedDelete>
              </AddedElem>
            );
          })}
        </AddedContainer>
      </Form>
    );
  }
}

InputAdder.propTypes = {
  type: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  marginBottom: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  addElem: PropTypes.func.isRequired,
  removeElem: PropTypes.func.isRequired,
};

InputAdder.defaultProps = {
  marginBottom: '1rem',
  values: [],
};

export default InputAdder;
