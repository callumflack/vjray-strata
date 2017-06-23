import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import theme from './theme.js';


injectGlobal`
${normalize()}

@font-face {
  font-family: 'GT-Eesti-Pro-Display-Light';
  src: url('/static/fonts/GT-Eesti-Pro-Display-Light.woff');
  src: local('GT-Eesti-Pro-Display-Light'),
       url('/static/fonts/GT-Eesti-Pro-Display-Light.woff') format('woff');
}

@font-face {
  font-family: 'GT-Eesti-Pro-Display-Medium';
  src: url('/static/fonts/GT-Eesti-Pro-Display-Medium.woff');
  src: local('GT-Eesti-Pro-Display-Medium'),
       url('/static/fonts/GT-Eesti-Pro-Display-Medium.woff') format('woff');
}

@font-face {
  font-family: 'GT-Eesti-Pro-Text-Light';
  src: url('/static/fonts/GT-Eesti-Pro-Text-Light.woff');
  src: local('GT-Eesti-Pro-Text-Light'), local('GT-Eesti-Pro-Text-Light'),
       url('/static/fonts/GT-Eesti-Pro-Text-Light.woff') format('woff');
}

@font-face {
  font-family: 'GT-Eesti-Pro-Text-Book';
  src: url('/static/fonts/GT-Eesti-Pro-Text-Book.woff');
  src: local('GT-Eesti-Pro-Text-Book'), local('GT-Eesti-Pro-Text-Book'),
       url('/static/fonts/GT-Eesti-Pro-Text-Book.woff') format('woff');
}

@font-face {
  font-family: 'GT-Eesti-Pro-Text-Regular';
  src: url('/static/fonts/GT-Eesti-Pro-Text-Regular.woff');
  src: local('GT-Eesti-Pro-Text-Regular'), local('GT-Eesti-Pro-Text-Regular'),
       url('/static/fonts/GT-Eesti-Pro-Text-Regular.woff') format('woff');
}

@font-face {
  font-family: 'GT-Eesti-Pro-Text-Medium';
  src: url('/static/fonts/GT-Eesti-Pro-Text-Medium.woff');
  src: local('GT-Eesti-Pro-Text-Medium'), local('GT-Eesti-Pro-Text-Medium'),
       url('/static/fonts/GT-Eesti-Pro-Text-Medium.woff') format('woff');
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: 'GT-Eesti-Pro-Text-Light';
  font-size: 16px;
  font-weight: normal;
  letter-spacing: ${theme.letterSpacing.body};
  line-height: ${theme.lineHeight.text};
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

h1, h2, h3, h4 {
  margin: 0;
  font-weight: inherit;
}

button,
input,
optgroup,
select,
textarea {
  font: inherit;
  letter-spacing: inherit;
}

button {
  cursor: pointer;
}

img {
  box-sizing: border-box;
  font-style: italic;
  max-width: 100%;
  vertical-align: middle;
}

`;