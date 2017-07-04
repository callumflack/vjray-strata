import styled, { css } from 'styled-components'
import { hoc } from '../styled-system/styled-components'
import theme from '../theme'


// ========================================================================
// THIS IS A WIP METHOD COMBINING BOTH STYLED-COMPONENTS AND STYLED-SYSTEM.
//
// These are our base Headline components.
// They can also be extended, e.g. Home/FeatureList:12 <Header />
//
// The styled-system gives us props for:
//   fontSize, fontFamily, color, width and space
//   as well as ternary props for the theme lineHeight object.
//
// Start with a styled-component that uses the hoc(), which provides access
// to the styled-system.

// Method:

// 1. Include any styles that are not allowed to change, or that styled-system
// doesn't cover.
//
// 2. Then wrap this root component with the flexible base styles for the
// component, and apply the styling-system props.
//
// This gives us the best of styled-components and a design system that
// uses responsive, flexible and portable themeing.
//
// NB. While not used here, styled-component's 'withComponent' extension
// allows use of alternate HTML tags, e.g.:
// Headline.h1 = Headline
// Headline.h2 = Headline.withComponent('h2')
// See: https://github.com/styled-components/styled-components/pull/814
// ========================================================================


// const hoc = Comp =>
//   ({ width, ...props }) =>
//     <Comp {...props} w={width} />
//
// module.exports = (Component, props) => {
//   const SystemComponent = styled(Component)``
// }


// const order = props => props.order ? `order:${props.order};` : null
// const lineHeight = props => props.lineHeight ? `line-height:${theme.lineHeight[props.lineHeight]};` : `line-height:${theme.lineHeight.text};`;
// const medium = props => props.medium ? `font-family:${theme.fonts.displayMedium};` : `font-family:${theme.fonts.displayLight};`
// const uppercase = props => props.uppercase ? `text-transform:uppercase;` : null
//
// const Test = styled('h1')`
//   ${medium}
//   ${uppercase}
//   ${lineHeight}
//   font-size: 16px;
//   @media (min-width: 700px) { font-size: 20px; }
// `



// Set all available HTML tags
const H1 = hoc('h1').extend``
const H2 = hoc('h2').extend``
const H3 = hoc('h3').extend``
const H4 = hoc('h4').extend``
const H5 = hoc('h5').extend``



//  Display
const DisplayRoot = hoc('h1').extend`
  ${props => props.ruled && css`
    &:before {
      border-top: 1px solid currentColor;
      content: " ";
      display: block;
      height: 1px;
      margin: 0 auto ${theme.space[3]}px;
      width: ${theme.space[4]}px;
    }
  `}
`

const Display = props =>
  <DisplayRoot
    color='brand'
    font='displayLight'
    fontSize={[ 6, 7 ]}
    lineHeight='display'
    mb={3}
    {...props}
  />


// Headline
const HeadlineRoot = hoc('h2').extend``

const Headline = props =>
  <H2
    color='brand'
    font='displayLight'
    fontSize={[ 5, 6 ]}
    mb={2}
    lineHeight='headline'
    {...props}
  />


// Meta Headline
const HeadlineMetaBaseStyles = {
    color: 'text',
    font: 'textMedium',
    fontSize: [ 0, 1 ],
    letterSpacing: 'meta',
    lineHeight: 'display',
    uppercase: 'true'
}

const HeadlineMeta = props =>
  <H3
    {...HeadlineMetaBaseStyles}
    align='center'
    {...props}
  />

// Subheadline (ruled)
// Example of where HeadlineMeta.extend would make more sense?
const SubheadlineRoot = hoc('h4').extend`
  border-bottom: 1px solid currentColor;
  display: inline-block;
`

const Subheadline = props =>
  <SubheadlineRoot
    {...HeadlineMetaBaseStyles}
    mb={3}
    mx='auto'
    pb={2}
    {...props}
  />

// Detail Headline, currently used for form group
// Example of where HeadlineMeta.extend would make more sense?
// const HeadlineDetailRoot = hoc('h5').extend``
const HeadlineDetail = props =>
  <H5
    {...HeadlineMetaBaseStyles}
    align='initial'
    color='text70'
    font='textLight'
    {...props} />

// Boxed Subheadline
// We can style() here because… why again?
const BoxedSubheadline = styled(HeadlineMeta)`
  --Header-height: 48px;
  align-items: center;
  background-color: ${theme.colors.brand};
  display: flex;
  font-family: ${theme.fonts.textRegular};
  height: var(--Header-height);
  justify-content: center;
`


export {
  Display,
  Headline,
  Subheadline,
  BoxedSubheadline,
  HeadlineMeta,
  HeadlineDetail,
}