import React from 'react'
import Formsy, { HOC } from 'formsy-react';

import styled, { css } from 'styled-components'
import theme from '../theme'
import { Display, BoxedSubheadline, HeadlineDetail } from '../styled-elements/Headline'


const Form = styled(Formsy.Form)`
  --elementHeight: 54px;

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
    height: var(--elementHeight);
    padding: 0 1rem;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    resize: none;
    width: 100%;
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
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
    }

    &::-webkit-input-placeholder { color: ${theme.colors.text40}; }
    &::-moz-placeholder          { color: ${theme.colors.text40}; }
    &:-ms-input-placeholder      { color: ${theme.colors.text40}; }
    &:-moz-placeholder           { color: ${theme.colors.text40}; }
  }

  textarea {
    min-height: var(--elementHeight);
    height: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

const FormHeader = props =>
  <BoxedSubheadline bg='brand' color='white' {...props} />

const FormGroup = styled.div`
  & + & {
    margin-top: 3rem;
  }
`;

const FormGroupHeadline = styled(HeadlineDetail)`
  margin-left: 1rem;
`;

const SuccessMessage = styled.div`
  color: #42db41;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const ErrorMessage = styled.div`
  color: #f23030;
  margin-top: 0.5rem;
`;


class InputRoot extends React.Component {
  render() {
    return (
      <div>
        <input
          onChange={(e) => this.props.setValue(e.target.value)}
          placeholder={this.props.placeholder}
        />
        <ErrorMessage>{this.props.getErrorMessage()}</ErrorMessage>
      </div>
    )
  }
};

class SelectRoot extends React.Component {
  render() {
    return (
      <div>
        <select
          onChange={(e) => this.props.setValue(e.target.value)}
          placeholder={this.props.placeholder}
        >
          {this.props.children}
        </select>
        <ErrorMessage>{this.props.getErrorMessage()}</ErrorMessage>
      </div>
    )
  }
};

class TextareaRoot extends React.Component {
  render() {
    return (
      <div>
        <textarea
          onChange={(e) => this.props.setValue(e.target.value)}
          placeholder={this.props.placeholder}
          rows={this.props.rows}
          cols={this.props.cols}
        />
        <ErrorMessage>{this.props.getErrorMessage()}</ErrorMessage>
      </div>
    )
  }
};

const Input = HOC(InputRoot);
const Select = HOC(SelectRoot);
const Textarea = HOC(TextareaRoot);

export {
  Form,
  Input,
  Select,
  Textarea,
  FormGroup,
  FormGroupHeadline,
  SuccessMessage,
  FormHeader,
};