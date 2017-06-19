import { css } from 'styled-components';
import { hoc } from '../styled-components'
import theme from '../../css/theme.js';

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

  ${props => props.bold && css`
    @font-face {
      font-family: 'GT-Eesti-Pro-Display-Bold';
      src: url('/static/fonts/GT-Eesti-Pro-Display-Bold.woff');
      src: local('GT-Eesti-Pro-Display-Bold'),
           url('/static/fonts/GT-Eesti-Pro-Display-Bold.woff') format('woff');
    }
    font-family: 'GT-Eesti-Pro-Display-Bold';
  `}

`;

// const Headline = styled.h1`
//   ${headlineFonts}
//   ${space}
//   ${fontSize}
//   ${color}
//   color: ${props => props.active ? theme.colors.brand : theme.colors.text};
//   line-height: ${theme.headers.lineHeight};
// `;

// export { Headline };


const Headline = hoc('h1').extend`
  ${headlineFonts}
  color: ${props => props.active ? theme.colors.brand : theme.colors.text};
  line-height: ${theme.headers.lineHeight};
`;

// export default Headline
export { Headline }