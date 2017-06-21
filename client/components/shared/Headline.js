import styled from 'styled-components';
import { hoc } from '../styled-components'
// import theme from '../../css/theme.js';
import theme from '../theme.js';
// import { fonts } from '../styled-utils/type.js';


// ternary utils
// const bold = props => props.bold ? `font-weight:bold;` : null
// color: ${props => props.active ? colors.blue : '#fff'};
// color: ${textColor};
// font-family: ${mediumWeight};

// const medium = props => props.medium ? `font-family: ${theme.fonts.displayMedium}` : null
// const mediumWeight = props => props.mediumWeight ? theme.fonts.displayLight : theme.fonts.displayMedium
// const textColor = props => props.textColor ? theme.colors.text : theme.colors.brand


// Primary const
const Headline = hoc('h1').extend`
  color: ${props => props.dark ? theme.colors.text : theme.colors.brand};
  font-family: ${props => props.mediumWeight ? theme.fonts.displayMedium : theme.fonts.displayLight};
`;

const DisplayRoot = styled(Headline)`
  line-height: ${theme.lineHeight.headline};
`;

const Display = ({ children }) => (
  <DisplayRoot fontSize={[ 6, 7 ]} mb={2}>
    { children }
  </DisplayRoot>
)

const DisplayAlt = ({ dark, children }) => (
  <DisplayRoot dark fontSize={[ 6, 7 ]} mb={2}>
    { children }
  </DisplayRoot>
)





// https://github.com/styled-components/styled-components/pull/814
Headline.h1 = Headline
Headline.h2 = Headline.withComponent('h2')
Headline.h3 = Headline.withComponent('h3')
Headline.h4 = Headline.withComponent('h4')
Headline.h5 = Headline.withComponent('h5')
Headline.h6 = Headline.withComponent('h6')

// export default Headline;
export { Headline, Display, DisplayAlt };

// Text.propTypes = {
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string,
//   medium: PropTypes.bool,
//   light: PropTypes.bool,
// };