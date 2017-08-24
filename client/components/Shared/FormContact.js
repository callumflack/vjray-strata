import React from 'react'
import Formsy, { HOC } from 'formsy-react';

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


class FormContact extends React.Component {
  constructor(props) {
    super(props);
  }

  async submit(model) {
    const response = await fetch('https://formspree.io/hellothere@vjray.com.au', {
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
          <FormGroupHeadline>Your details (Required)</FormGroupHeadline>

          <Input
            placeholder='Your name*'
            name='name'
            required
          />
          <Input
            placeholder='Your email*'
            name='email'
            validations={{
              isEmail: true
            }}
            validationErrors={{
              isEmail: 'Not a valid email'
            }}
            required
          />
          <Input
            placeholder='Your phone number*'
            name='phoneNumber'
            validations='isExisty'
            required
          />
          <Textarea
            placeholder='Add your comments…'
            name='comments'
            rows='7'
          />
        </FormGroup>
      </FormContainer>
    );
  }
}

export default FormContact;