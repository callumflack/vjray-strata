import styled, { css } from 'styled-components';
import { hoc } from '../styled-system/styled-components'
// import theme from '../../css/theme.js';
import theme from '../theme.js';


// const bold = props => props.bold ? `font-weight:bold;` : null
// color: ${props => props.active ? colors.blue : '#fff'};

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

const DisplayRoot = styled(Root)`
  line-height: ${theme.lineHeight.display};
`;

const Display = props => (
  <DisplayRoot fontSize={[ 6, 7 ]} mb={2} {...props}>
    { props.children }
  </DisplayRoot>
)


// Create HTML element variations
// https://github.com/styled-components/styled-components/pull/814

// Headline.h1 = Headline
// Headline.h2 = Headline.withComponent('h2')
// Headline.h3 = Headline.withComponent('h3')
// Headline.h4 = Headline.withComponent('h4')
// Headline.h5 = Headline.withComponent('h5')
// Headline.h6 = Headline.withComponent('h6')


export { Headline, Display };