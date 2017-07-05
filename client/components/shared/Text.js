import styled, { css } from 'styled-components';
import { hoc, test } from '../styled-system/styled-components'
import theme from '../theme.js';

// import { test } from '../styled-system/test'


// Root styles
const Root = hoc('p').extend``
const Test = test('p').extend``

const Text = props =>
  <Root
    color='text'
    font='textLight'
    fontSize={[ 2, 3 ]}
    {...props}
  />

const SmallText = props =>
  <Text
    fontSize={[ 1, 2 ]}
    {...props}
  />

const MediumText = props =>
  <Text
    fontSize={[ 3, 4 ]}
    {...props}
  />

const LargeText = props =>
  <Text
    font='displayLight'
    fontSize={[ 4, 5 ]}
    lineHeight='subheadline'
    {...props}
  />


// Author (meta) text
// const AuthorTextRoot = styled(Root)`
// const AuthorTextRoot = Root.withComponent('span').extend`
const AuthorRoot = hoc('span').extend``

const AuthorText = props =>
  <AuthorRoot
    color='inherit'
    font='textBook'
    fontSize={[ 3, 4 ]}
    letterSpacing='touch'
    uppercase
    {...props}
  />




// Utils

// TODO: add ternarys to LineBreak as needed.
const LineBreak = hoc('span').extend`
  font: inherit;

  @media (min-width: 1024px) {
      display: table !important;
  }
`

// WIP. Not sure this is required…
const InlineText = Root.withComponent('span').extend`
  display: inline-block;
`

const TextBlock = styled('div')`
  p + p {
    margin-top: 1em;
  }
`


export {
  Text,
  LargeText,
  MediumText,
  SmallText,
  AuthorText,
  LineBreak,
  InlineText,
  TextBlock
}