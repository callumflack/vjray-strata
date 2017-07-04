import React from 'react'
import ReactDOM from 'react-dom'
import Formsy, { HOC } from 'formsy-react';


import gql from 'graphql-tag'
import apollo from '../../lib/apollo.js'

import styled, { css } from 'styled-components'
import theme from '../theme'
import { Flex, Box } from '../styled-grid'
import Button from '../shared/Button'
import { Text } from '../shared/Text'
import { Display, BoxedSubheadline } from '../shared/Headline'
import {
  Form,
  Input,
  Select,
  Textarea,
  FormGroup,
  FormGroupHeadline,
  SuccessMessage,
} from '../shared/Form';


const FormContainer = styled(Box)`
  background-color: white;
  border: 1px solid ${theme.colors.brand};
`;

class FullQuoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);

    this.state = {
      messageSent: false,
      canSubmit: false,
    };
  }

  async handleSubmit(model) {
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
    this.setState({ messageSent: true });
  }

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  }

  render() {
    return (
      <FormContainer mt={[ 3, 4 ]}>
        <BoxedSubheadline bg='brand' color='white'>Quick Response Message</BoxedSubheadline>
        <Box p={[ 2, 3 ]}>
          { this.state.messageSent
            ?  <SuccessMessage>Thank you! We'll get back to you soon.</SuccessMessage>
            : null
          }

          <Form onValidSubmit={this.handleSubmit} onValid={this.enableButton} onInvalid={this.disableButton}>
            <FormGroup>
              <FormGroupHeadline>Your details</FormGroupHeadline>

              <Input placeholder='Your name' name='name' required />
              <Input placeholder='Your email' name='email' validations='isEmail' validationError='Not a valid email' required />
              <Input placeholder='Your phone number' name='phoneNumber' required />
            </FormGroup>

            <FormGroup>
              <FormGroupHeadline>Strata details</FormGroupHeadline>

              <Input placeholder='Your strata address' name='address' />
              <Input placeholder='Your postcode' name='postcode' />
              <Select placeholder='Total units in your strata scheme' name='unitsInScheme'>
                {Array(11).fill(0).map((item, i) =>
                  <option value={i} key={i}>{i}</option>
                )}
              </Select>
              <Textarea placeholder='Add any comments…' name='comments' rows='7' />

              <Text align='right'>
                <Button primary type='submit' disabled={!this.state.canSubmit}>Send</Button>
              </Text>
            </FormGroup>
          </Form>
        </Box>
      </FormContainer>
    );
  }
}

export default FullQuoteForm;