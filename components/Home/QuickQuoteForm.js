import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

import theme from '../../css/theme.js';


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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1.8rem;
`;

const Inputs = styled.div`
  max-width: 700px;
  margin: auto;
`;

const Input = styled.input`
  flex-grow: 1;
  border: 0;
  border-bottom: 1px solid #aaa;
  margin-right: 2rem;
  line-height: 3;
`;

const Button = styled.button`
  --gutter: 0.4rem;
  padding: 0.1rem 2.2rem;
  background-color: ${theme.colors.text};
  color: #fff;
  border: 0;
  font-weight: bold;
  line-height: 3;
`;


class QuickQuoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.updateFormState = this.updateFormState.bind(this);
    this.state = { floating: false };
  }

  componentDidMount() {
    const formElement = ReactDOM.findDOMNode(this);
    const formOffsetYRelativeToDocument = formElement.getBoundingClientRect().top;
    const windowOffsetY = window.pageYOffset || document.documentElement.scrollTop;
    this.formRenderPosition = formOffsetYRelativeToDocument + windowOffsetY;

    this.updateFormState();
    window.addEventListener('scroll', this.updateFormState);
  }

  componentsWillUnmount() {
    document.documentElement.removeEventListener('scroll', this.updateFormState);
  }

  updateFormState() {
    const scrollPosition = window.scrollY;
    const floating = scrollPosition > this.formRenderPosition;

    this.setState({ floating });
  }

  render() {
    return (
      <Form floating={this.state.floating}>
        <Header>Quick Response</Header>
        <Body>
          <Inputs>
            <Input placeholder='Your name' />
            <Input placeholder='Your phone number' />
            <Button type='submit'>Send</Button>
          </Inputs>
        </Body>
      </Form>
    );
  }
}

export default QuickQuoteForm;
