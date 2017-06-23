import styled, { css } from 'styled-components';
import { hoc } from '../styled-system/styled-components'
import theme from '../theme.js';


// s-c patterns
// const AuthorTextRoot = styled(Root)
// const AuthorTextRoot = styled(Root)`
// const AuthorTextRoot = Root.withComponent('span').extend`
// const fill = props.fill || theme.colors.brand

// this fails: color: ${props.color ? theme.colors[props.color] : inherit};


// props patterns
// ${props => props.color && css`
//   color: ${theme.colors[props.color]};
// `}
// color: ${props.blue ? theme.colors.blue : null}
// color: ${props => props.color || 'inherit'};

// this breaks cause it's a wrapped object yo
// const InlineTextTest = Text.withComponent('span').extend`
//   display: inline-block;
// `


// Root

// color: ${theme.colors.text};
const Root = hoc('p').extend`
  line-height: ${theme.lineHeight.text};




  ${props => props.active && css`
    color: ${theme.colors.brand};
  `}

  ${props => props.grey && css`
    color: ${theme.colors.text70};
  `}

  ${props => props.lightGrey && css`
    color: ${theme.colors.text40};
  `}




  ${props => props.color && css`
    color: ${theme.colors[props.color]};
  `}

  ${props => props.inheritColor && css`
    color: inherit;
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

  ${props => props.inline && css`
    display: inline-block;
  `}
`;

const Text = props => (
  <Root color='text' fontSize={[ 2, 3 ]} {...props}>
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

const Anchor = Root.withComponent('a')
// const Anchor = Root.withComponent('a').extend`
//   cursor: pointer;
// `


// Variations

const SmallText = props => (
  <Text fontSize={[ 1, 2 ]} {...props} />
)


const MediumText = props => (
  <Text fontSize={[ 2, 3 ]} {...props}>{ props.children }</Text>
)

const LargeTextRoot = styled(Root)`
  font-family: ${theme.fonts.displayLight};
  letter-spacing: 0.01em;
  line-height: ${theme.lineHeight.subheadline};
`;

const LargeText = props => (
  <LargeTextRoot fontSize={[ 4, 5 ]} {...props}>{ props.children }</LargeTextRoot>
)

// .withComponent().extend doesn't seem to pass down props…
// const AuthorTextRoot = styled(Root)`
// const AuthorTextRoot = Root.withComponent('span').extend`
const AuthorTextRoot = hoc('span').extend`
  color: inherit;
  display: inline-block;
  font-family: ${theme.fonts.textBook};
  letter-spacing: ${theme.letterSpacing.touch};
  text-transform: uppercase;
`;

const AuthorText = props => (
  <AuthorTextRoot fontSize={[ 3, 4 ]} {...props}/>
)



export { Text, LargeText, MediumText, SmallText, AuthorText, InlineText, Anchor, LineBreak }