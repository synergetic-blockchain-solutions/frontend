import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import AuthInput from 'components/common/inputs/AuthInput';
import { ButtonBase } from 'components/common/buttons/Button';
import Adder from './Adder';
import { getUserByName, clearUserSearch } from 'actions/auth';
import isEmpty from 'helpers/is-empty';

const Container = styled.div`
  margin-bottom: 1rem;
`;

const ReccomendButton = styled(ButtonBase)`
  padding: 0.5rem 2rem;
  background-color: ${props => props.theme.colors.colorSuccess};
  color: ${props => props.theme.colors.colorWhite};
  border-radius: 20px;
`;

const ReccomendationContainer = styled.div`
  margin-top: -1rem;
  margin-bottom: 1rem;
`;

class InputAdder extends Component {
  state = {
    value: '',
    added: [],
  };

  handleStandardChange = e => {
    this.setState({ value: e.target.value });
    if (this.props.isUserSearch) {
      this.props.getUserByName(e.target.value);
    }
  };

  addInput = e => {
    const [id, name] = e.target.name.split('-');
    this.props.addElem(id);
    this.setState(prevState => ({
      value: '',
      added: [...prevState.added, name],
    }));
    if (this.props.isUserSearch) {
      this.props.clearUserSearch();
    }
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
      userSearch,
    } = this.props;
    const { value, added } = this.state;

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
        />
        {!isEmpty(userSearch) && (
          <ReccomendationContainer>
            {userSearch.map(user => {
              return (
                <ReccomendButton
                  name={`${user.id}-${user.name}`}
                  onClick={this.addInput}
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
  values: PropTypes.array.isRequired,
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
  values: [],
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
