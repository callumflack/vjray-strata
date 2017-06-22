import styled, { css } from 'styled-components';
import { hoc } from '../styled-system/styled-components'
import theme from '../theme.js';


// s-c patterns
// const AuthorTextRoot = styled(Root)
// const AuthorTextRoot = styled(Root)`
// const AuthorTextRoot = Root.withComponent('span').extend`

// props patterns
// ${props => props.color && css`
//   color: ${theme.colors[props.color]};
// `}
// color: ${props.blue ? theme.colors.blue : null}


// Root

const Root = hoc('p').extend`
  color: ${theme.colors.text};
  line-height: ${theme.lineHeight.text};

  ${props => props.active && css`
    color: ${theme.colors.brand};
  `}

  ${props => props.grey && css`
    color: ${theme.colors.text70};
  `}

  ${props => props.book && css`
    font-family: ${theme.fonts.textBook};
  `}

  ${props => props.regular && css`
    font-family: ${theme.fonts.textRegular};
  `}

  ${props => props.medium && css`
    font-family: ${theme.fonts.textMedium};
  `}

  ${props => props.uppercase && css`
    text-transform: uppercase;
  `}
`;

const Texty = props => (
  <Root fontSize={[ 2, 3 ]} {...props}>
    { props.children }
  </Root>
)


// Utils

const LineBreak = hoc('span').extend`
  @media (min-width: 1024px) {
      display: table !important;
  }
`

// const InlineText = hoc('span').extend`
const InlineText = Root.withComponent('span').extend`
  display: inline-block;
`

// this breaks
// const InlineTextTest = Texty.withComponent('span').extend`
//   display: inline-block;
// `


// Variations

const LargeTextRoot = styled(Root)`
  font-family: ${theme.fonts.displayLight};
  letter-spacing: 0.01em;
  line-height: ${theme.lineHeight.subheadline};
`;

const LargeText = props => (
  <LargeTextRoot fontSize={[ 4, 5 ]} {...props}>{ props.children }</LargeTextRoot>
)

const AuthorTextRoot = Root.withComponent('span').extend`
  color: inherit;
  font-family: ${theme.fonts.textBook};
  letter-spacing: ${theme.letterSpacing.meta};
`;

const AuthorText = props => (
  <AuthorTextRoot uppercase fontSize={[ 2, 3 ]} {...props}>{props.children}</AuthorTextRoot>
);


export { Texty, LargeText, AuthorText, InlineText, LineBreak }