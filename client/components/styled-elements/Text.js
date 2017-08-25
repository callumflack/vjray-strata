import styled, { css } from 'styled-components'
// import { hoc, test } from '../styled-system/styled-components'
import hoc from './hoc'
import theme from '../theme.js'

// import { test } from '../styled-system/test'


// Root styles
const Root = hoc('p').extend`
  a {
    ${props => props.noUnderline && css`
      background-image: initial;
    `}
  }

  ${props => props.hideAtDesktop && css`
    @media (min-width: 1024px) {
      display: none;
    }
  `}

  ${props => props.hideAtTablet && css`
    @media (max-width: 768px) {
      display: none;
    }
  `}

  ${props => props.hideAtMobile && css`
    @media (max-width: 512px) {
      display: none;
    }
  `}
`

const Text = props =>
  <Root
    color='text'
    font='textLight'
    fontSize={[ 2, 2, 2, 3 ]}
    {...props}
  />

const TinyText = props =>
  <Text
    fontSize={[ 0, 0, 1 ]}
    letterSpacing='body'
    {...props}
  />

const SmallText = props =>
  <Text
    fontSize={[ 1, 1, 2 ]}
    letterSpacing='body'
    {...props}
  />

const MediumText = props =>
  <Text
    fontSize={[ 3, 3, 4 ]}
    {...props}
  />

const LargeText = props =>
  <Text
    font='displayLight'
    fontSize={[ 3, 3, 4, 5 ]}
    letterSpacing='text'
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
    fontSize={[ 2, 2, 2, 3, 4 ]}
    letterSpacing='touch'
    uppercase
    {...props}
  />




// Utils
// =====================================================================

const LineBreak = hoc('span').extend`
  font: inherit;

  @media (min-width: ${theme.breakpoints[2]}em) {
      display: table !important;
  }

  ${props => props.bp && css`
    @media (min-width: ${theme.breakpoints[props.bp]}em) {
        display: table !important;
    }
  `}
`

const LineBreakMax = hoc('span').extend`
  font: inherit;

  @media (max-width: ${theme.breakpoints[1]}em) {
      display: table !important;
  }

  ${props => props.bp && css`
    @media (max-width: ${theme.breakpoints[props.bp]}em) {
        display: table !important;
    }
  `}
`

const LineBreakAll = hoc('span').extend`
  font: inherit;
  display: table;
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
  --spacing: 0.75rem;
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
  LineBreakMax,
  LineBreakAll,
  InlineText,
  TextBlock,
  DangerouslyResetTextBlock,
  Divider
}