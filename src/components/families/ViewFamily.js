import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getGroup } from 'actions/group';

const ViewFamilyPage = styled.section`
  margin-top: 8rem;
`;

class ViewFamily extends Component {
  componentDidMount() {
    this.props.getGroup(this.props.match.params.id);
  }

  render() {
    const { group } = this.props;
    const { name } = group;
    console.log(this.props);
    return <ViewFamilyPage>{name}</ViewFamilyPage>;
  }
}

const mapDispatchToProps = dispatch => ({
  getGroup: id => dispatch(getGroup(id)),
});

const mapStateToProps = state => ({
  group: state.group.group,
});

ViewFamily.propTypes = {
  getGroup: PropTypes.func.isRequired,
  group: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewFamily);
