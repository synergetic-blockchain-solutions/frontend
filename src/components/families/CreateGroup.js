import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AuthInput from 'components/common/inputs/AuthInput';
import TextAreaInput from 'components/common/inputs/TextAreaInput';
import ButtonMedium from 'components/common/buttons/ButtonMedium';
import FormValidator from 'components/common/help-component/FormValidator';
import FormContainer from 'components/common/containers/FormDisplayContainer';
import ImageDropzone from 'components/common/image/ImageDropzone';
import ImagePreview from 'components/common/image/GroupImagePreview';
import isEmpty from 'helpers/is-empty';
import Success from 'components/common/visual/Success';
import InputAdder from 'components/common/form/InputAdder';
import { createGroup, addImageToGroup } from 'actions/group';
import { REGISTER_GROUP_SUCCESS, ADD_GROUP_IMAGE_SUCCESS } from 'actions/types';

const Form = styled.div``;

const DivSpacing = styled.div`
  margin: 1rem 0;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
`;

class Creategroup extends Component {
  validator = new FormValidator([
    {
      field: 'name',
      method: 'isEmpty',
      validWhen: false,
      message: 'name is required.',
    },
  ]);

  state = {
    name: '',
    image: null,
    description: '',
    members: [],
    admins: [],
    validation: this.validator.valid(),
    finished: false,
  };

  componentDidMount() {}

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      !isEmpty(nextProps.group.group) &&
      nextProps.group.success === REGISTER_GROUP_SUCCESS &&
      !isEmpty(prevState.image)
    ) {
      const formData = new FormData();
      formData.append('image', prevState.image.file);
      nextProps.addImageToGroup(nextProps.group.group.id, formData);
    } else if (nextProps.group === ADD_GROUP_IMAGE_SUCCESS) {
      return { ...prevState, finished: true };
    } else if (
      nextProps.group.success === REGISTER_GROUP_SUCCESS &&
      isEmpty(prevState.image)
    ) {
      return { ...prevState, finished: true };
    }
    return prevState;
  }

  componentWillUnmount() {}

  handleStandardChange = e =>
    this.setState({ [e.target.name]: e.target.value });

  recieveImage = image => {
    this.setState({
      image: image,
    });
  };

  deleteImage = e => this.setState({ image: null });

  addAdmin = admin =>
    this.setState(prevState => ({
      admins: [...prevState.admins, admin],
    }));

  removeAdmin = adminIndex =>
    this.setState(prevState => ({
      admins: prevState.admins.filter((gr, index) => {
        return index !== adminIndex;
      }),
    }));

  addMember = member =>
    this.setState(prevState => ({
      members: [...prevState.members, member],
    }));

  removeMember = memberIndex =>
    this.setState(prevState => ({
      members: prevState.members.filter((gr, index) => {
        return index !== memberIndex;
      }),
    }));

  submit = e => {
    e.preventDefault();

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    const { name, description, members, admins } = this.state;

    if (validation.isValid) {
      this.props.createGroup(name, description, admins, members);
    }
  };

  render() {
    // if the form has been submitted at least once
    // then check validity every time we render
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    const { name, description, admins, image, finished } = this.state;
    const { group } = this.props.group;
    console.log(this.state);
    console.log(this.props);
    return (
      <FormContainer>
        {finished ? (
          <Success
            text="group Was Created Successfully"
            linkAddress={`/family/${group.id}`}
            linkText="Click Here To View group"
          />
        ) : (
          <React.Fragment>
            <Title>Create a Group</Title>
            <Form onSubmit={this.submit}>
              <AuthInput
                handleStandardChange={this.handleStandardChange}
                value={name}
                type="text"
                name="name"
                placeholder="Name"
                marginBottom="1rem"
                label="Name"
                error={validation.name.message}
              />
              <DivSpacing>
                <ImageDropzone
                  recieveImage={this.recieveImage}
                  image={this.recieveImage}
                  images={image}
                  multiple={false}
                />
              </DivSpacing>
              <DivSpacing>
                {image && (
                  <ImagePreview
                    src={image.preview}
                    deleteImage={this.deleteImage}
                  />
                )}
              </DivSpacing>
              <TextAreaInput
                handleStandardChange={this.handleStandardChange}
                value={description}
                type="text"
                name="description"
                placeholder="Description"
                marginBottom="1rem"
                label="Description"
              />
              <InputAdder
                type="text"
                inputName="admins"
                placeholder="Add admins to this group"
                label="Add admins to this group (name or email)"
                addElem={this.addAdmin}
                removeElem={this.removeAdmin}
                values={admins}
              />
              <InputAdder
                type="text"
                inputName="members"
                placeholder="Add members to this group"
                label="Add members to this group (name or email)"
                addElem={this.addMember}
                removeElem={this.removeMember}
                values={admins}
              />
              <ButtonMedium
                clickEvent={this.submit}
                text="Create Group"
                color="btn-block btn-primary-light"
                margin="1rem 0 0 0"
                disabled={isEmpty(name) || isEmpty(description)}
              />
            </Form>
          </React.Fragment>
        )}
      </FormContainer>
    );
  }
}

Creategroup.propTypes = {
  createGroup: PropTypes.func.isRequired,
  group: PropTypes.object.isRequired,
  addImageToGroup: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createGroup: (name, description, admins, members) =>
    dispatch(createGroup(name, description, admins, members)),
  addImageToGroup: (id, formData) => dispatch(addImageToGroup(id, formData)),
});

const mapStateToProps = state => ({
  group: state.group,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Creategroup);
