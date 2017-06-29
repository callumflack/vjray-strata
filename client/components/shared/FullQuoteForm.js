import React from 'react'
import ReactDOM from 'react-dom'

import gql from 'graphql-tag'
import apollo from '../../lib/apollo.js'

import styled, { css } from 'styled-components'
import theme from '../theme'
import { Flex, Box } from '../styled-grid'
import Button from '../shared/Button'
import { Text } from '../shared/Text'
import { Display, BoxedSubheadline } from '../shared/Headline'


const FormContainer = styled(Box)`
  background-color: white;
  border: 1px solid ${theme.colors.brand};
`;

const FormBody = styled.div`
  padding: 1.5rem 1.8rem;
`;

const SuccessMessage = styled.div`
  color: #42db41;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const FormGroup = styled.div`
  & + & {
    margin-top: 3rem;
  }
`;

// const FormGroupHeader = Text.extend`
const FormGroupHeader = styled('p')`
  margin-left: 1.5rem;
`;

const Form = styled.form`
  input,
  select,
  textarea,
  button {
    margin-top: 1rem;
  }

  input,
  select,
  textarea {
    border: 1px solid ${theme.colors.text20};
    height: 54px;
    padding: 0 1rem;
    width: 100%;
  }
`;


class FullQuoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      messageSent: false,
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
      postcode: '',
      unitsInScheme: 0,
      comments: '',
    };
  }

  async handleSubmit(event) {
    event.preventDefault();

    const mutation = gql`mutation {
      createQuote(
        name: "${this.state.name}",
        email: "${this.state.email}",
        phoneNumber: "${this.state.phoneNumber}",
        address: "${this.state.address}",
        postcode: "${this.state.postcode}",
        unitsInScheme: ${this.state.unitsInScheme},
        comments: ${JSON.stringify(this.state.comments)},
      ) {
        _id,
      }
    }`;

    await apollo.mutate({ mutation });
    this.setState({ messageSent: true });
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState ({
      [name]: value,
    });
  }

  render() {
    return (
      <FormContainer mt={[ 3, 4 ]}>
        <BoxedSubheadline>Quick Response Message</BoxedSubheadline>
        <Box p={[ 2, 3 ]}>
          { this.state.messageSent ?  <SuccessMessage>Thank you! We'll get back to you soon.</SuccessMessage> : null }

          <Form floating={this.state.floating} onSubmit={this.handleSubmit}>
            <FormGroup>
              <FormGroupHeader bold>Your details</FormGroupHeader>
              <input placeholder='Your name' name='name' onChange={this.handleChange} />
              <input placeholder='Your email' name='email' onChange={this.handleChange} />
              <input placeholder='Your phone number' name='phoneNumber' onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <FormGroupHeader bold>Strata details</FormGroupHeader>
              <input placeholder='Your strata address' name='address' onChange={this.handleChange} />
              <input placeholder='Your postcode' name='postcode' onChange={this.handleChange} />
              <select placeholder='Total units in your strata scheme' name='unitsInScheme' onChange={this.handleChange}>
                {Array(10).fill(0).map((item, i) =>
                  <option value={i} key={i}>{i}</option>
                )}
              </select>
              <textarea placeholder='Add any comments…' name='comments' onChange={this.handleChange} rows='7'/>

              <Button type='submit'>Send</Button>
            </FormGroup>
          </Form>
        </Box>
      </FormContainer>
    );
  }
}

export default FullQuoteForm;