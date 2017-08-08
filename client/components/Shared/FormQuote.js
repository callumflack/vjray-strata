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

class FormQuote extends React.Component {
  constructor(props) {
    super(props);
  }

  async submit(model) {
    const response = await fetch('https://formspree.io/quickquote@vjray.com.au', {
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
      <FormContainer brand submit={this.submit}>
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
        </FormGroup>

        <FormGroup>
          <FormGroupHeadline>Strata details</FormGroupHeadline>

          <Input
            placeholder='Your strata address'
            name='address'
          />
          <Input
            placeholder='Your postcode'
            name='postcode'
          />

          <Select
            name='unitsInScheme'
            defaultValue=''
          >
            <option value='' hidden>Total units in your strata scheme</option>
            {Array.from({length: 10}, (v, k) => k+1).map(i =>
              <option value={i} key={i}>{i}</option>
            )}
          </Select>

          <Textarea
            placeholder='Add any comments…'
            name='comments'
            rows='7'
          />
        </FormGroup>
      </FormContainer>
    );
  }
}

export default FormQuote;