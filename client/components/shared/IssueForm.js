import React from 'react'
import Formsy, { HOC } from 'formsy-react';
import styled, { css } from 'styled-components'

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


class IssueForm extends React.Component {
  constructor(props) {
    super(props);
  }

  async submit(model) {
  }

  render() {
    return (
      <FormContainer submit={this.submit}>
        <Input placeholder='Your name' name='name' validations='isExisty' validationError='Your name is required' />
        <Input placeholder='Your email' name='email' validations={{isExisty: true, isEmail: true}} validationErrors={{isExisty: 'Your email is required', isEmail: 'Not a valid email'}} />
        <Input placeholder='Your phone number' name='phoneNumber' validations='isExisty' validationError='Your phone number is required' />
        <Input placeholder='Your strata address' name='address' />
        <Input placeholder='Your postcode' name='postcode' />
        <Select placeholder='Total units in your strata scheme' name='unitsInScheme'>
          {Array(11).fill(0).map((item, i) =>
            <option value={i} key={i}>{i}</option>
          )}
        </Select>
        <Textarea placeholder='Add any comments…' name='comments' rows='7' />
      </FormContainer>
    );
  }
}

export default IssueForm;
