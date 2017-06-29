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
// to the styled-system. Include any styles that are not allowed
// to change, or that styled-system doesn't cover.
//
// Then wrap this root component with the flexible base styles for the
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


//  Display
const DisplayRoot = hoc('h1').extend`
  line-height: ${theme.lineHeight.display};
`

const Display = props =>
  <DisplayRoot
    font='displayLight'
    fontSize={[ 6, 7 ]}
    color='brand'
    mb={3}
    {...props}
  />


// Headline
const HeadlineRoot = hoc('h2').extend`
  line-height: ${theme.lineHeight.headline};
`

const Headline = props =>
  <HeadlineRoot font='displayLight' fontSize={[ 5, 6 ]} color='brand' mb={2} {...props} />


// Meta Headline
const HeadlineMetaRoot = hoc('h3').extend`
  letter-spacing: ${theme.letterSpacing.meta};
  line-height: ${theme.lineHeight.display};
  text-align: center;
  text-transform: uppercase;
`;

const HeadlineMeta = props =>
  <HeadlineMetaRoot font='textMedium' fontSize={[ 0, 1 ]} color='text' {...props} />


// Boxed Subheadline
const BoxedSubheadline = styled(HeadlineMeta)`
  --Header-height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--Header-height);
  background-color: ${theme.colors.brand};
  color: #fff;
`;

// Subheadline (ruled, styling Headline Meta)
const SubheadlineRoot = styled(HeadlineMetaRoot)`
  border-bottom: 1px solid currentColor;
  font-family: ${theme.fonts.textMedium};
  display: inline-block;
`;

const Subheadline = props =>
  <SubheadlineRoot fontSize={[ 0, 1 ]} color='text' pb={2} mb={3} mx='auto' {...props} />


export { Display, Headline, Subheadline, BoxedSubheadline, HeadlineMeta };