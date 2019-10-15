import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getArtifacts } from 'actions/artifact';
import Artifacts from './Artifacts';
import { Button, ButtonLink } from 'components/common/buttons/Button';

const MyArtifactsPage = styled.section`
  padding: 2rem 1rem;
  width: 100%;
`;

const MyArtifactsPageToggler = styled.div`
  margin-bottom: 2rem;
`;

const ButtonLeft = styled(Button)`
  border: 2px solid ${props => props.theme.colors.colorGrayDarker};
  border-right: 1px solid ${props => props.theme.colors.colorGrayDarker};
`;

const ButtonRight = styled(Button)`
  border: 2px solid ${props => props.theme.colors.colorGrayDarker};
`;

const ViewMyArtifactsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

class ViewMyArtifacts extends Component {
  state = {
    viewArtifacts: true,
  };

  componentDidMount() {
    this.props.getArtifacts();
  }

  viewArtifacts = val => this.setState({ viewArtifacts: val });

  render() {
    const { artifacts } = this.props;
    const { viewArtifacts } = this.state;
    return (
      <MyArtifactsPage>
        <ViewMyArtifactsHeader>
          <MyArtifactsPageToggler>
            <ButtonLeft
              selected={viewArtifacts}
              onClick={() => this.viewArtifacts(true)}
              className="dark-gray"
            >
              View Artifacts
            </ButtonLeft>
            <ButtonRight
              selected={!viewArtifacts}
              onClick={() => this.viewArtifacts(false)}
              className="dark-gray"
            >
              View Albums
            </ButtonRight>
          </MyArtifactsPageToggler>
          <ButtonLink className="dark-brown" to="/create">
            Create Artifact
          </ButtonLink>
        </ViewMyArtifactsHeader>

        <Artifacts artifacts={artifacts} />
      </MyArtifactsPage>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getArtifacts: (group, owner, shared) =>
    dispatch(getArtifacts(group, owner, shared)),
});

const mapStateToProps = state => ({
  artifacts: state.artifact.artifacts,
  resources: state.artifact.resources,
});

ViewMyArtifacts.propTypes = {
  artifacts: PropTypes.array.isRequired,
  getArtifacts: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewMyArtifacts);
