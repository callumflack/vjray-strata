import styled, { css } from 'styled-components';
import { hoc } from '../styled-system/styled-components'
import theme from '../theme.js';



// Root style
const Root = hoc('p').extend`
  line-height: ${theme.lineHeight.text};

  ${props => props.uppercase && css`
    text-transform: uppercase;
  `}
`

const Text = props =>
  <Root font='textLight' fontSize={[ 2, 3 ]} color='text' {...props} />

// Small text
const SmallText = props =>
  <Text fontSize={[ 1, 2 ]} {...props} />

// Large text
const LargeTextRoot = styled(Root)`
  font-family: ${theme.fonts.displayLight};
  letter-spacing: 0.01em;
  line-height: ${theme.lineHeight.subheadline};
`;

const LargeText = props =>
  <LargeTextRoot fontSize={[ 4, 5 ]} {...props} />

// Author (meta) text
// .withComponent().extend doesn't pass down props
// because it's a function of a function…
// const AuthorTextRoot = styled(Root)`
// const AuthorTextRoot = Root.withComponent('span').extend`
const AuthorTextRoot = hoc('span').extend`
  color: inherit;
  display: inline-block;
  font-family: ${theme.fonts.textBook};
  letter-spacing: ${theme.letterSpacing.touch};
  text-transform: uppercase;
`;

const AuthorText = props =>
  <AuthorTextRoot fontSize={[ 3, 4 ]} {...props} />


// Utils

// Will add ternarys to LineBreak as needed.
const LineBreak = hoc('span').extend`
  @media (min-width: 1024px) {
      display: table !important;
      font: inherit;
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


export { Text, LargeText, SmallText, AuthorText, LineBreak, InlineText, TextBlock }