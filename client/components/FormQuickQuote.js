import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import gql from 'graphql-tag';

import apollo from '../../lib/apollo.js';
import theme from './theme.js';
import { Flex, Box } from './styled-grid'
import hoc from './Shared/hoc'
import { Text, InlineText } from './Shared/Text.js';
import { BoxedSubheadline } from './Shared/Headline.js';
import LaddaButton from './LaddaButton.js';


const Form = styled.form`
  --Header-height: 48px;
  background-color: #fff;
  bottom: var(--Header-height);
  box-shadow:
    0 16px 24px 2px rgba(0,0,0,0.09),
    0 6px 30px 5px rgba(0,0,0,0.06),
    0 8px 10px -5px rgba(0,0,0,0.15);
  display: none;
  left: 50%;
  position: absolute;
  transition: width 0.2s;
  transform: translate(-50%, 100%);
  width: 100%;

  @media (min-width: 700px) {
    display: block;
    margin: auto;
    width: ${theme.containers.sm};
  }

  ${props => props.floating && css`
    bottom: unset;
    left: 0;
    margin: auto;
    position: fixed;
    right: 0;
    top: 0;
    transform: unset;
    width: 100% !important;
    z-index: 10;
  `}
`;

const Inputs = styled(Flex)`
  --Input-line-height: 54px;
  width: 100%;

  @media (min-width: 700px) {
    margin: auto;
    max-width: ${theme.containers.sm};
  }

  @media (max-width: 700px) {
  }
`;

// width: 100%;
const Input = hoc('input').extend`
  border: 0;
  border-bottom: 1px solid ${theme.colors.text20};
  color: ${theme.colors.text70};
  font-family: ${theme.fonts.textBook};
  flex-grow: 1;
  line-height: var(--Input-line-height);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  resize: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  &:focus,
  &:active,
  &:hover,
  &:visited {
    outline: 0;
  }

  &:focus {
    border-color: ${theme.colors.brand};
  }

  @media (min-width: 768px) {
    margin-right: 2rem;
  }
`;

const ButtonText = hoc('span').extend`
  display: inline-block;
  text-align: right;

  @media (min-width: 768px) {
    text-align: initial;
  }
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
      name: '',
      phoneNumber: '',
      loading: false,
      floating: false,
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

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateFormPosition);
  }

  updateFormPosition() {
    const scrollPosition = window.scrollY;
    const floating = scrollPosition > this.formRenderPosition;

    this.setState({ floating });
  }

  async handleSubmit(event) {
    event.preventDefault();

    this.setState({
      loading: true,
    });

    const response = await fetch('https://formspree.io/xgaewyjx', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        phoneNumber: this.state.phoneNumber,
      }),
    });

    this.setState({
      messageSent: true,
      loading: false,
    });
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
        <BoxedSubheadline bg='brand' color='white'>
          { this.state.messageSent
            ? 'Thanks! We will contact you soon.'
            : 'Get a fast quote'
          }
        </BoxedSubheadline>
        <Box p={[ 2, 3 ]}>
          <Inputs direction={[ 'column', 'row' ]}>
            <Input
              fontSize={[ 2, 3 ]}
              placeholder='Your name'
              name='name'
              onChange={this.handleChange}
            />
            <Input
              fontSize={[ 2, 3 ]}
              mt={[ 2, 0 ]}
              placeholder='Your phone number'
              name='phoneNumber'
              onChange={this.handleChange}
            />

            {/* Formspree filters */}
            <input type="text" name="_gotcha" style={{display: "none" }} />
            <input type="hidden" name="_subject" value="Strata website new business submission" />

            <ButtonText
              font='textBook'
              fontSize={[ 2, 3 ]}
              letterSpacing='button'
              mt={[ 2, 0 ]}
            >
              <LaddaButton
                primary
                loading={this.state.loading}
                type='submit'
                disabled={this.state.messageSent}
              >
                { this.state.messageSent ? 'Sent' : 'Send'}
              </LaddaButton>
            </ButtonText>
          </Inputs>
        </Box>
      </Form>
    );
  }
}

export default QuickQuoteForm;