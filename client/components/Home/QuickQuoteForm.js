import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import gql from 'graphql-tag';

import apollo from '../../lib/apollo.js';
import theme from '../theme.js';
import { Flex, Box } from '../styled-grid'
import { hoc } from '../styled-system/styled-components'
import { InlineText } from '../shared/Text.js';
import { BoxedSubheadline } from '../shared/Headline.js';
import Button from '../shared/Button.js';


const Form = styled.form`
  --Header-height: 48px;

  background-color: #fff;
  bottom: var(--Header-height);
  box-shadow: 0 16px 24px 2px rgba(0,0,0,0.09), 0 6px 30px 5px rgba(0,0,0,0.06), 0 8px 10px -5px rgba(0,0,0,0.15);
  left: 50%;
  position: absolute;
  transition: width 0.2s;
  transform: translate(-50%, 100%);
  width: ${theme.containers.sm};
  z-index: 10;

  ${props => props.floating && css`
    bottom: unset;
    left: 0;
    margin: auto;
    position: fixed;
    right: 0;
    top: 0;
    transform: unset;
    width: 100%;
  `}
`;

const Inputs = styled.div`
  --Input-line-height: 54px;

  display: flex;
  max-width: ${theme.containers.sm};
  margin: auto;
`;

const Input = hoc('input').extend`
  border: 0;
  border-bottom: 1px solid ${theme.colors.text20};
  color: ${theme.colors.text70};
  font-family: ${theme.fonts.textBook};
  flex-grow: 1;
  line-height: var(--Input-line-height);
  margin-right: 2rem;
`;

const StyledButton = styled(Button)`
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
        <BoxedSubheadline color='white'>Get a Fast Quote</BoxedSubheadline>
        <Box p={3}>
          { this.state.messageSent &&
            <SuccessMessage>Thank you! We will get back to you soon.</SuccessMessage>
          }

          <Inputs>
            <Input fontSize={[ 2, 3 ]} placeholder='Your name' name='name' onChange={this.handleChange} />
            <Input fontSize={[ 2, 3 ]} placeholder='Your phone number' name='phoneNumber' onChange={this.handleChange} />
            <InlineText fontSize={[ 2, 3 ]} book>
              <StyledButton primary type='submit'>Send</StyledButton>
            </InlineText>
          </Inputs>
        </Box>
      </Form>
    );
  }
}

export default QuickQuoteForm;