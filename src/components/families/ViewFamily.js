import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getGroup } from 'actions/group';
import Page from 'components/common/containers/Page';
import FamilyBanner from './FamilyBanner';
import AddMemberModal from 'components/common/modals/AddMemberModal';
import Artifacts from 'components/artifact/Artifacts';
import Albums from 'components/album/Albums';
import NoContent from 'components/common/containers/NoContent';
import ToggleFamilyView from './ToggleFamilyView';
import isEmpty from 'helpers/is-empty';

const ViewFamilyPage = styled(Page)`
  padding: 2rem;
  padding-top: 20rem;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FamilyArtifacts = styled.div`
  /* background-color: ${props => props.theme.colors.colorLightBrown}; */
  margin: 0 auto;
  background-image: linear-gradient(${props =>
    props.theme.colors.colorLightBrown}, ${props =>
  props.theme.colors.colorLighterBrown});
  padding: 3rem;
  /* border-radius: 30px; */
  width: 50rem;
  margin-bottom: 2rem;
  box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.1);

  @media (max-width: ${props => props.theme.breakpoints.phoneScreen}) {
    width: calc(100vw - 2rem);
    max-width: 50rem;
  }
`;

const FamilyTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const FamilySubtitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const FamilyText = styled.p`
  font-size: 1.4rem;
`;

const Seperator = styled.div`
  margin-bottom: 2rem;
`;

class ViewFamily extends Component {
  state = {
    view: 'artifacts',
  };

  componentDidMount() {
    this.props.getGroup(this.props.match.params.id);
  }

  toggleGroupInfo = val => this.setState({ view: val });

  render() {
    const { group } = this.props;
    const { name, admins, albums, artifacts, description, id, members } = group;
    const { view } = this.state;
    console.log(this.state);
    let output;
    if (view === 'artifacts') {
      output = (
        <NoContent text="There Aren't Any Artifacts Added To This Group Yet" />
      );
      if (!isEmpty(artifacts)) {
        output = <Artifacts artifacts={artifacts} />;
      }
    } else if (view === 'info') {
      output = (
        <FamilyArtifacts>
          <FamilyTitle>{name}</FamilyTitle>
          <Seperator>
            <FamilySubtitle>Family Description:</FamilySubtitle>
            <FamilyText>{description}</FamilyText>
          </Seperator>
          <Seperator>
            <FamilySubtitle>Family Admins:</FamilySubtitle>
            {admins.map(admin => (
              <FamilyText>{admin.name}</FamilyText>
            ))}
          </Seperator>
          <Seperator>
            <FamilySubtitle>Family Members:</FamilySubtitle>
            {members.map(member => (
              <FamilyText>{member.name}</FamilyText>
            ))}
          </Seperator>
        </FamilyArtifacts>
      );
    } else if (view === 'albums') {
      output = (
        <NoContent text="There Aren't Any Albums Added To This Group Yet" />
      );
      if (albums) {
        output = <Albums albums={albums} />;
      }
    }

    return (
      <ViewFamilyPage>
        {id && <FamilyBanner name={name} id={id} description={description} />}
        <Flex>
          <ToggleFamilyView toggleView={this.toggleGroupInfo} view={view} />
          <AddMemberModal groupName={name} group={group} />
        </Flex>

        {output}
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
