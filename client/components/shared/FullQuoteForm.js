import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import gql from 'graphql-tag';

import apollo from '../../lib/apollo.js';
import theme from '../../css/theme.js';
import Button from '../shared/Button.js';
import {
  Text,
} from '../shared/Text.js';


const FormContainer = styled.div`
  border: 1px solid ${theme.colors.brand};
  margin-top: 4rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  text-transform: uppercase;
  background-color: ${theme.colors.brand};
  color: #fff;
`;

const Body = styled.div`
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

const FormGroupHeader = Text.extend`
  margin-left: 1.5rem;
`;

const Form = styled.form`
  input, select, textarea, button {
    margin-top: 1rem;
  }

  input, select, textarea {
    padding: 0.8rem 0.5rem;
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
      <FormContainer>
        <Header>Quick Response Message</Header>
        <Body>
          { this.state.messageSent ?  <SuccessMessage>Thank you! We will get back to you soon.</SuccessMessage> : null }

          <Form floating={this.state.floating} onSubmit={this.handleSubmit}>
            <FormGroup>
              <FormGroupHeader bold>Your details</FormGroupHeader>
              <input placeholder='Your name' name='name' onChange={this.handleChange} />
              <input placeholder='Your email' name='email' onChange={this.handleChange} />
              <input placeholder='Your phone number' name='phoneNumber' onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <FormGroupHeader bold>Your details</FormGroupHeader>
              <input placeholder='Your strata address' name='address' onChange={this.handleChange} />
              <input placeholder='Your postcode' name='postcode' onChange={this.handleChange} />
              <select placeholder='Total units in your strata scheme' name='unitsInScheme' onChange={this.handleChange}>
                {Array(10).fill(0).map((item, i) =>
                  <option value={i} key={i}>{i}</option>
                )}
              </select>
              <textarea placeholder='Add any comments...' name='comments' onChange={this.handleChange} rows='7'/>

              <Button type='submit'>Send</Button>
            </FormGroup>
          </Form>
        </Body>
      </FormContainer>
    );
  }
}

export default FullQuoteForm;
