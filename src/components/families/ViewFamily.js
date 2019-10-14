import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getGroup } from 'actions/group';
import Page from 'components/common/containers/Page';
import FamilyBanner from './FamilyBanner';
import ArtifactSummary from 'components/artifact/ArtifactSummary';
import AddMemberModal from 'components/common/modals/AddMemberModal';
import Container from 'components/common/containers/FormDisplayContainer';
import ToggleFamilyView from './ToggleFamilyView';
import isEmpty from 'helpers/is-empty';

const ViewFamilyPage = styled(Page)``;

const FamilyArtifacts = styled.div`
  margin: 0 auto 2rem auto;
  padding-top: 20rem;
  min-width: 40rem;
  max-width: 80%;
`;

const FamilyTitle = styled.h2``;

class ViewFamily extends Component {
  state = {
    showGroupInfo: false,
  };

  componentDidMount() {
    this.props.getGroup(this.props.match.params.id);
  }

  toggleGroupInfo = val => this.setState({ showGroupInfo: val });

  render() {
    const { group } = this.props;
    const { name, admins, albums, artifacts, description, id, members } = group;
    const { showGroupInfo } = this.state;

    return (
      <ViewFamilyPage>
        {id && <FamilyBanner name={name} id={id} description={description} />}
        <ToggleFamilyView toggleView={this.toggleGroupInfo} />
        {showGroupInfo ? (
          <FamilyArtifacts>
            <Container>
              <FamilyTitle>{name}</FamilyTitle>
            </Container>
          </FamilyArtifacts>
        ) : (
          <FamilyArtifacts>
            {artifacts &&
              artifacts.map(artifact => {
                return (
                  <ArtifactSummary
                    name={artifact.name}
                    description={artifact.description}
                    groups={artifact.groups}
                    id={artifact.id}
                    owners={artifact.owners}
                    resource={
                      !isEmpty(artifact.resources)
                        ? artifact.resources[0]
                        : null
                    }
                    key={artifact.id}
                  />
                );
              })}
          </FamilyArtifacts>
        )}
        <AddMemberModal groupName={name} group={group} />
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
