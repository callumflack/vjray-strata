import styled, { css } from 'styled-components';
import { hoc } from '../styled-system/styled-components'
// import theme from '../../css/theme.js';
import theme from '../theme.js';


// root
// -------------------------------------------------------

// const bold = props => props.bold ? `font-weight:bold;` : null
// color: ${props => props.active ? colors.blue : '#fff'};
// background-color: ${theme.colors[props.bgColor]};

const Root = hoc('h1').extend`
  color: ${theme.colors.brand};
  font-family: ${theme.fonts.displayLight};
  line-height: ${theme.lineHeight.headline};

  ${props => props.dark && css`
    color: ${theme.colors.text};
  `}

  ${props => props.medium && css`
    font-family: ${theme.fonts.displayMedium};
  `}
`;

const Headline = props => (
  <Root fontSize={[ 5, 6 ]} mb={2} {...props}>
    { props.children }
  </Root>
)



// variables
// -------------------------------------------------------

const DisplayRoot = styled(Root)`
  line-height: ${theme.lineHeight.display};
`;

const Display = props => (
  <DisplayRoot fontSize={[ 6, 7 ]} mb={3} {...props}>
    { props.children }
  </DisplayRoot>
)

const HeadlineMetaRoot = styled(Root)`
  font-family: ${theme.fonts.textRegular};
  letter-spacing: ${theme.letterSpacing.meta};
  line-height: ${theme.lineHeight.display};
  text-align: center;
  text-transform: uppercase;
`;

const HeadlineMeta = props => <HeadlineMetaRoot fontSize={[ 0, 1 ]} {...props}>{ props.children }</HeadlineMetaRoot>

const SubheadlineRoot = styled(HeadlineMetaRoot)`
  border-bottom: 1px solid currentColor;
  display: inline-block;
`;

const Subheadline = props => <SubheadlineRoot fontSize={[ 0, 1 ]} pb={2} mb={3} mx='auto' {...props}>{ props.children }</SubheadlineRoot>


// Create HTML element variations
// https://github.com/styled-components/styled-components/pull/814

// Headline.h1 = Headline
// Headline.h2 = Headline.withComponent('h2')
// Headline.h3 = Headline.withComponent('h3')
// Headline.h4 = Headline.withComponent('h4')
// Headline.h5 = Headline.withComponent('h5')
// Headline.h6 = Headline.withComponent('h6')


export { Display, Headline, Subheadline, HeadlineMeta };