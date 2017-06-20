import { css } from 'styled-components';
import { hoc } from '../styled-components'
// import theme from '../../css/theme.js';
import theme from '../theme.js';

// const bold = props => props.bold ? `font-weight:bold;` : null

const headlineFonts = css`
  ${props => props.light && css`
    @font-face {
      font-family: 'GT-Eesti-Pro-Display-Light';
      src: url('/static/fonts/GT-Eesti-Pro-Display-Light.woff');
      src: local('GT-Eesti-Pro-Display-Light'),
           url('/static/fonts/GT-Eesti-Pro-Display-Light.woff') format('woff');
    }
    font-family: 'GT-Eesti-Pro-Display-Light';
  `}

  ${props => props.medium && css`
    @font-face {
      font-family: 'GT-Eesti-Pro-Display-Medium';
      src: url('/static/fonts/GT-Eesti-Pro-Display-Medium.woff');
      src: local('GT-Eesti-Pro-Display-Medium'),
           url('/static/fonts/GT-Eesti-Pro-Display-Medium.woff') format('woff');
    }
    font-family: 'GT-Eesti-Pro-Display-Medium';
  `}

`;

// line-height: ${theme.headers.lineHeight};

const Headline = hoc('h1').extend`
  ${headlineFonts}
  color: ${props => props.active ? theme.colors.brand : theme.colors.text};
  line-height: 1.05;
`;

Headline.h1 = Headline
Headline.h2 = Headline.withComponent('h2')
Headline.h3 = Headline.withComponent('h3')
Headline.h4 = Headline.withComponent('h4')
Headline.h5 = Headline.withComponent('h5')
Headline.h6 = Headline.withComponent('h6')

export default Headline;