import styled, { css } from 'styled-components'
// import { hoc, test } from '../styled-system/styled-components'
import hoc from './hoc'
import theme from '../theme.js'

// import { test } from '../styled-system/test'


// Root styles
const Root = hoc('p').extend``
// const Test = test('span').extend``

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
    letterSpacing='body'
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
// =====================================================================

// TODO: add ternarys to LineBreak as needed.
const LineBreak = hoc('span').extend`
  font: inherit;

  @media (min-width: 1024px) {
      display: table !important;
  }
`

const InlineText = Root.withComponent('span').extend`
  display: inline-block;
`

const TextBlock = styled('div')`
  p,
  li {
    font-size: 16px;
    font-family: ${theme.fonts.textLight};
    margin: 0;
    order: initial;
    padding: 0;
    width: 100%;

    @media (min-width: ${theme.containers.sm}) {
      font-size: 19px;
    }
  }

  p + p,
  ul + p {
    margin-top: 2em;
  }

  ul {
    margin: 2em 0;
  }

  li {
    list-style-type: disc;
    margin-left: 1em;
    padding-left: 8px;
    width: auto;
  }
`

const DangerouslyResetTextBlock = styled(TextBlock)`
  > div,
  > div div {
    font-size: 16px;
    font-family: ${theme.fonts.textLight};
    margin: 0;
    order: initial;
    padding: 0;
    width: 100%;

    @media (min-width: ${theme.containers.sm}) {
      font-size: 19px;
    }
  }
`

const Divider = styled.span`
  --spacing: 1rem;
  color: inherit;
  margin-left: var(--spacing);
  margin-right: var(--spacing);

  :after {
    color: inherit;
    content: '•';
  }
`;


export {
  Text,
  LargeText,
  MediumText,
  SmallText,
  AuthorText,
  LineBreak,
  InlineText,
  TextBlock,
  DangerouslyResetTextBlock,
  Divider
}