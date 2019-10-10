import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class TagAdder extends Component {
  render() {
    return (
      <form>
        <AuthInput
          handleStandardChange={this.handleStandardChange}
          value={tag}
          type="text"
          name="tag"
          placeholder="Tag"
          marginBottom="1rem"
          label="Tag"
        />
      </form>
    );
  }
}

export default TagAdder;
