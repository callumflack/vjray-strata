import React from 'react'
import Formsy, { HOC } from 'formsy-react';

import gql from 'graphql-tag'
import apollo from '../../lib/apollo.js'

import theme from '../theme'
import FormContainer from '../shared/FormContainer'
import {
  Form,
  Input,
  Select,
  Textarea,
  FormGroup,
  FormGroupHeadline,
} from '../shared/Form';


class FullQuoteForm extends React.Component {
  constructor(props) {
    super(props);
  }

  async submit(model) {
    const comments = JSON.stringify(model.comments) || '';
    const mutation = gql`mutation {
      createQuote(
        name: "${model.name || ''}",
        email: "${model.email || ''}",
        phoneNumber: "${model.phoneNumber || ''}",
        address: "${model.address || ''}",
        postcode: "${model.postcode || ''}",
        unitsInScheme: ${model.unitsInScheme || 0},
        comments: "${comments}",
      ) {
        _id,
      }
    }`;

    await apollo.mutate({ mutation });
  }

  render() {
    return (
      <FormContainer submit={this.submit}>
        <FormGroup>
          <FormGroupHeadline>Your details</FormGroupHeadline>

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
            placeholder='Total units in your strata scheme'
            name='unitsInScheme'
          >
            {Array(11).fill(0).map((item, i) =>
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

export default FullQuoteForm;