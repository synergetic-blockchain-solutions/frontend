import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getGroup } from 'actions/group';
import Page from 'components/common/containers/Page';

const ViewFamilyPage = styled(Page)``;

const FamilyTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

class ViewFamily extends Component {
  componentDidMount() {
    this.props.getGroup(this.props.match.params.id);
  }

  render() {
    const { group } = this.props;
    const { name, admins, albums, artifacts, description, id, members } = group;

    return (
      <ViewFamilyPage>
        <FamilyTitle>{name}</FamilyTitle>
      </ViewFamilyPage>
    );
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
