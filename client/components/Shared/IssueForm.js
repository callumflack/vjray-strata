import React from 'react'
import Formsy, { HOC } from 'formsy-react';
import styled, { css } from 'styled-components'

import gql from 'graphql-tag'
import apollo from '../../lib/apollo.js'

import theme from '../theme'
import FormContainer from '../Shared/FormContainer'
import {
  Form,
  Input,
  Select,
  Textarea,
  FormGroup,
  FormGroupHeadline,
} from '../Shared/Form';


class IssueForm extends React.Component {
  constructor(props) {
    super(props);
  }

  async submit(model) {
    const response = await fetch('https://formspree.io/helpme@vjray.com.au', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(model),
    });
  }

  render() {
    return (
      <FormContainer submit={this.submit}>
        <FormGroup>
          <Input
            placeholder='Your name'
            name='name'
            validationErrors={{
              isDefaultRequiredValue: 'Your name is required'
            }}
            required
          />
          <Input
            placeholder='Your email'
            name='email'
            validations={{
              isEmail: true
            }}
            validationErrors={{
              isDefaultRequiredValue: 'Your email is required',
              isEmail: 'Not a valid email'
            }}
            required
          />
          <Input
            placeholder='Your phone number'
            name='phoneNumber'
            validations='isExisty'
            validationErrors={{
              isDefaultRequiredValue: 'Your phone number is required'
            }}
            required
          />
        </FormGroup>
      </FormContainer>
    );
  }
}

export default IssueForm;