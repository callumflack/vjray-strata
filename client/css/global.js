import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import theme from './theme.js';


injectGlobal`

${normalize()}

@font-face {
  font-family: 'GT-Eesti-Pro-Text-Book';
  src: url('/static/fonts/GT-Eesti-Pro-Text-Book.woff');
  src: local('GT-Eesti-Pro-Text-Book'), local('GT-Eesti-Pro-Text-Book'),
       url('/static/fonts/GT-Eesti-Pro-Text-Book.woff') format('woff');
}

body {
  font-family: 'GT-Eesti-Pro-Text-Book';
  font-size: 16px;
  font-weight: normal;
  line-height: 1.5;
  color: ${theme.colors.text};
}

a {
  text-decoration: none;
  color: inherit;
}

p {
  font-weight: inherit;
  margin: 0;
}

p + p {
  margin-top: 12px;
}

h1, h2, h3, h4 {
  margin: 0;
  font-weight: inherit;
  line-height: ${theme.headers.lineHeight};
}

`;


// @font-face {
//   font-family: 'GT-Eesti-Pro';
//   src: url('/static/fonts/GT-Eesti-Pro-Text-Book.woff');
//   src: local('GT-Eesti-Pro'), local('GT-Eesti-Pro'),
//        url('/static/fonts/GT-Eesti-Pro-Text-Book.woff') format('woff');
// }
//
//
//
// body {
//   font-family: ${theme.text.family};
//   font-size: ${theme.text.base};
//   font-weight: ${theme.text.weight};
//   line-height: ${theme.text.lineHeight};
//   color: ${theme.colors.text};
// }
//
// a {
//   text-decoration: none;
//   color: inherit;
// }
//
// button {
//   /* Reset for webkit */
//   font-size: inherit;
//   cursor: pointer;
// }
//
// input, textarea {
//   font-family: inherit;
//   font-size: inherit;
// }
//
// hr {
//   color: inherit;
//   border: 0;
//   border-bottom: 1px solid currentColor;
// }
//
// h1, h2, h3, h4 {
//   margin: 1.414em 0 0.5em;
//   font-weight: inherit;
//   line-height: ${theme.headers.lineHeight};
// }
//
// h1 {
//   margin-top: 0.5em;
//   font-size: ${theme.headers.xl};
// }
//
// h2 {
//   font-size: ${theme.headers.lg};
// }
//
// h3 {
//   font-size: ${theme.headers.rg};
// }
//
// h4 {
//   font-size: ${theme.headers.sm};
// }
//
// small, .font_small {
//   font-size: 0.75em;
// }
// `;