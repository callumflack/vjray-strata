import { injectGlobal } from 'styled-components';

import theme from './theme.js';

injectGlobal`
@font-face {
  font-family: 'GT-Eesti-Pro';
  src: url('/static/fonts/GT-Eesti-Pro-Text-Regular.woff');
  src: local('GT-Eesti-Pro'), local('GT-Eesti-Pro'),
       url('/static/fonts/GT-Eesti-Pro-Text-Regular.woff') format('woff');
}

*, *:before, *:after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: ${theme.text.family};
  font-size: ${theme.text.base};
  line-height: ${theme.text.lineHeight};
  color: ${theme.colors.text};
}

p {
  margin-bottom: 1.3em;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
}

input, textarea {
  font-family: inherit;
  font-size: inherit;
}

hr {
  color: inherit;
  border: 0;
  border-bottom: 1px solid currentColor;
}

h1, h2, h3, h4 {
  margin: 1.414em 0 0.5em;
  font-weight: inherit;
  line-height: ${theme.headers.lineHeight};
}

h1 {
  margin-top: 0.5em;
  font-size: ${theme.headers.xl};
}

h2 {
  font-size: ${theme.headers.lg};
}

h3 {
  font-size: ${theme.headers.rg};
}

h4 {
  font-size: ${theme.headers.sm};
}

small, .font_small {
  font-size: 0.75em;
}
`;
