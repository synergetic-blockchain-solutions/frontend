import React, { Component } from 'react';
import Page from 'components/common/containers/Page';
import styled from 'styled-components';
import { ButtonLink } from 'components/common/buttons/Button';
import { FlexedAround } from 'components/common/containers/Flexed';

const Option = styled(ButtonLink)`
  background-color: ${props => props.theme.colors.colorDarkBrown};
  color: ${props => props.theme.colors.colorWhite};
  width: 40rem;
  height: 40rem;
  font-size: 30rem;
  line-height: 40rem;
  margin-bottom: 2rem;
`;

const OptionContainer = styled.div`
  text-align: center;
`;

const OptionTitle = styled.h2`
  font-size: 3.5rem;
  color: ${props => props.theme.colors.colorDarkBrown};
`;

class CreateOptions extends Component {
  render() {
    return (
      <Page>
        <FlexedAround>
          <OptionContainer>
            <OptionTitle>Create Album</OptionTitle>
            <Option to="/album/create">
              <i className="fal fa-images"></i>
            </Option>
          </OptionContainer>
          <OptionContainer>
            <OptionTitle>Create Artifact</OptionTitle>
            <Option to="artifact/create">
              <i className="far fa-file-image"></i>
            </Option>
          </OptionContainer>
        </FlexedAround>
      </Page>
    );
  }
}

export default CreateOptions;
