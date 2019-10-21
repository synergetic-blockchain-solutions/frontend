import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import AuthInput from 'components/common/inputs/AuthInput';
import Adder from './Adder';
import { ReccomendButton } from './AdderHelpers';
import { getUserByName, clearUserSearch } from 'actions/auth';
import isEmpty from 'helpers/is-empty';

const Container = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const ReccomendationContainer = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: absolute;
  bottom: 0rem;
  left: 0;
  transform: translateY(100%);
  width: 20rem;
  background-color: ${props => props.theme.colors.colorDarkBrown};
  z-index: ${props => props.theme.zIndex.important};
  max-height: 8rem;
  overflow: auto;
`;

class InputAdder extends Component {
  state = {
    value: '',
    added: [],
    visible: false,
  };

  componentDidMount() {
    this.setState(prevState => ({
      added: [...prevState.added, ...this.props.initialValues],
    }));
  }

  handleStandardChange = e => {
    this.setState({ value: e.target.value });
    if (this.props.isUserSearch) {
      this.props.getUserByName(e.target.value);
    }
  };

  addInput = input => {
    console.log('here');
    const { id, name } = input;
    this.props.addElem(id);
    this.setState(prevState => ({
      value: '',
      added: [...prevState.added, { id: id, name: name }],
    }));
    if (this.props.isUserSearch) {
      this.props.clearUserSearch();
    }
  };

  removeGroup = id => {
    const delId = id;
    this.setState(prevState => ({
      added: prevState.added.filter(val => val.id !== delId),
    }));
    this.props.removeElem(id);
  };

  focus = () => {
    this.setState({ visible: true });
  };

  unFocus = () => {
    setTimeout(() => this.setState({ visible: false }), 500);
  };

  render() {
    const {
      type,
      inputName,
      placeholder,
      marginBottom,
      label,
      userSearch,
    } = this.props;
    const { value, added, visible } = this.state;
    return (
      <Container>
        <AuthInput
          handleStandardChange={this.handleStandardChange}
          value={value}
          type={type}
          name={inputName}
          placeholder={placeholder}
          marginBottom={marginBottom}
          label={label}
          onFocus={this.focus}
          onBlur={this.unFocus}
          autoComplete={false}
        />
        {!isEmpty(userSearch) && (
          <ReccomendationContainer visible={visible}>
            {userSearch.map(user => {
              return (
                <ReccomendButton
                  onClick={() =>
                    this.addInput({ id: user.id, name: user.name })
                  }
                >
                  <h4>{user.name}</h4>
                  <p>{user.email}</p>
                </ReccomendButton>
              );
            })}
          </ReccomendationContainer>
        )}
        <Adder values={added} removeGroup={this.removeGroup} />
      </Container>
    );
  }
}

InputAdder.propTypes = {
  type: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  initialValues: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  marginBottom: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  addElem: PropTypes.func.isRequired,
  removeElem: PropTypes.func.isRequired,
  isUserSearch: PropTypes.bool.isRequired,
  getUserByName: PropTypes.func.isRequired,
  clearUserSearch: PropTypes.func.isRequired,
  userSearch: PropTypes.array,
};

InputAdder.defaultProps = {
  marginBottom: '1rem',
  initialValues: [],
  isUserSearch: false,
};

const mapStateToProps = state => ({
  userSearch: state.auth.searchedUsers,
});

const mapDispatchToProps = dispatch => ({
  getUserByName: search => dispatch(getUserByName(search)),
  clearUserSearch: () => dispatch(clearUserSearch()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputAdder);
