import styled, {css} from 'styled-components';
import { hoc } from '../styled-components'
// import theme from '../../css/theme.js';
import theme from '../theme.js';

// ${props => props.fontSize={[ 4, 5 ]} && css`
//   line-height: 1.15
// `}

const textFonts = css`
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
      font-family: 'GT-Eesti-Pro-Text-Medium';
      src: url('/static/fonts/GT-Eesti-Pro-Text-Medium.woff');
      src: local('GT-Eesti-Pro-Text-Medium'),
           url('/static/fonts/GT-Eesti-Pro-Text-Medium.woff') format('woff');
    }
    font-family: 'GT-Eesti-Pro-Text-Medium';
  `}

  ${props => props.bold && css`
    @font-face {
      font-family: 'GT-Eesti-Pro-Text-Bold';
      src: url('/static/fonts/GT-Eesti-Pro-Text-Bold.woff');
      src: local('GT-Eesti-Pro-Text-Bold'),
           url('/static/fonts/GT-Eesti-Pro-Text-Bold.woff') format('woff');
    }
    font-family: 'GT-Eesti-Pro-Text-Bold';
  `}

`;

// line-height: ${theme.headers.lineHeight};

const Texty = hoc('p').extend`
  ${textFonts}
  color: ${props => props.active ? theme.colors.brand : theme.colors.text};
`;

export { Texty }