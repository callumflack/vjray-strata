import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import gql from 'graphql-tag';

import apollo from '../../lib/apollo.js';
import theme from '../../css/theme.js';
import Button from '../shared/Button.js';


const Form = styled.form`
  --HeaderHeight: 3rem;

  position: absolute;
  z-index: 10;
  left: 50%;
  transform: translate(-50%, 100%);
  bottom: var(--HeaderHeight);
  background-color: #fff;
  box-shadow: 0 0 15px #aaa;
  width: 700px;
  transition: width 0.2s;

  ${props => props.floating && css`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    bottom: unset;
    transform: unset;
  `}
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--HeaderHeight);
  text-transform: uppercase;
  background-color: ${theme.colors.brand};
  color: #fff;
`;

const Body = styled.div`
  padding: 1.5rem 1.8rem;
`;

const Inputs = styled.div`
  --lineHeight: 3;

  display: flex;
  max-width: 700px;
  margin: auto;
`;

const Input = styled.input`
  flex-grow: 1;
  margin-right: 2rem;
  border: 0;
  border-bottom: 1px solid #aaa;
  line-height: var(--lineHeight);
`;

const StyledButton = styled(Button)`
  padding-top: 0;
  padding-bottom: 0;
  line-height: var(--lineHeight);
`;

const SuccessMessage = styled.div`
  color: #42db41;
  text-align: center;
  margin-bottom: 0.5rem;
`;

class QuickQuoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.updateFormPosition = this.updateFormPosition.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      floating: false,
      name: '',
      phoneNumber: '',
      messageSent: false,
    };
  }

  componentDidMount() {
    const formElement = ReactDOM.findDOMNode(this);
    const formOffsetYRelativeToDocument = formElement.getBoundingClientRect().top;
    const windowOffsetY = window.pageYOffset || document.documentElement.scrollTop;
    this.formRenderPosition = formOffsetYRelativeToDocument + windowOffsetY;

    this.updateFormPosition();
    window.addEventListener('scroll', this.updateFormPosition);
  }

  componentsWillUnmount() {
    document.documentElement.removeEventListener('scroll', this.updateFormPosition);
  }

  updateFormPosition() {
    const scrollPosition = window.scrollY;
    const floating = scrollPosition > this.formRenderPosition;

    this.setState({ floating });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const mutation = gql`mutation {
      createQuote(
        name: "${this.state.name}",
        phoneNumber: "${this.state.phoneNumber}"
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
      <Form floating={this.state.floating} onSubmit={this.handleSubmit}>
        <Header>Quick Response</Header>
        <Body>
          { this.state.messageSent ?  <SuccessMessage>Thank you! We will get back to you soon.</SuccessMessage> : null }

          <Inputs>
            <Input placeholder='Your name' name='name' onChange={this.handleChange} />
            <Input placeholder='Your phone number' name='phoneNumber' onChange={this.handleChange} />
            <StyledButton type='submit'>Send</StyledButton>
          </Inputs>
        </Body>
      </Form>
    );
  }
}

export default QuickQuoteForm;
