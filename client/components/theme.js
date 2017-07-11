// import { lighten } from 'polished'

// array scale: 0 = no breakpoint, 1 = first breakpoint

// text70: ${lighten(0.2, '#585870')},
// wrappers: [700, 960, 1140]
// color, fontSize, space & width are for `styled-system` & `grid-styled`.
// fontSizes: [12, 16, 18, 21, 24, 29, 40, 58],
// fontSizes: [ 12, 14, 16, 20, 24, 32, 48, 64, 72 ]
// space: [0, 8, 16, 24, 48, 96, 192],
// breakpoints: [32, 48, 64, 80, 96] = 512, 768, 1024, 1280, 1536

// text: '#585870',
// brand: '#D3145A',
// brandAlt: '#a4003b',

export default {
  blockHeights: {
    navBar: '121px',
    hero: '50vh',
    super: '70vh'
  },
  breakpoints: [32, 48, 64, 80, 96],
  colors: {
    text: '#4a4a55',
    text70: '#818188',
    text40: '#b7b7bb',
    text20: '#dbdbdd',
    text10: '#ededee',
    text7: '#f2f2f3',
    brand: '#c90b50',
    brandAlt: '#404070',
    brandAlt70: '#797A9A',
    beige: '#F7F2EC',
    offBlue: '#e8f6fb',
    offWhite: '#f6f6f6',
    white: '#fff',
    grey: '#EEEEF0',
    success: '#42db41',
    error: '#D91E1F',
  },
  containers: {
    sm: '700px',
    rg: '960px',
    lg: '1140px',
  },
  fonts: {
    displayThin: 'GT-Eesti-Pro-Display-Thin',
    displayLight: 'GT-Eesti-Pro-Display-Light',
    displayRegular: 'GT-Eesti-Pro-Display-Regular',
    displayMedium: 'GT-Eesti-Pro-Display-Medium',
    textLight: 'GT-Eesti-Pro-Text-Light',
    textBook: 'GT-Eesti-Pro-Text-Book',
    textRegular: 'GT-Eesti-Pro-Text-Regular',
    textMedium: 'GT-Eesti-Pro-Text-Medium',
    textBold: 'GT-Eesti-Pro-Text-Bold',
  },
  fontSizes: [12, 14, 16, 19, 23, 30, 40, 54],
  letterSpacing: {
    body: '0.02em',
    tight: '-0.02em',
    button: '0.025em',
    touch: '0.075em',
    meta: '0.15em',
  },
  lineHeight: {
    display: '1',
    headline: '1.05',
    subheadline: '1.25',
    text: '1.375',
  },
  space: [0, 8, 16, 32, 64, 128, 160],

}