import { lighten } from 'polished'

// array scale: 0 = no breakpoint, 1 = first breakpoint

// text70: ${lighten(0.2, '#585870')},
// wrappers: [700, 960, 1140]
// color, fontSize, space & width are for `styled-system` & `grid-styled`.
// fontSizes: [12, 16, 18, 21, 24, 29, 40, 58],
// fontSizes: [ 12, 14, 16, 20, 24, 32, 48, 64, 72 ]
// space: [0, 8, 16, 24, 48, 96, 192],
// breakpoints: [32, 48, 64, 80, 96] = 512, 768, 1024, 1280, 1536

export default {
  breakpoints: [32, 48, 64, 80, 96],
  colors: {
    text: '#585870',
    text70: '#8b8a9b',
    text40: '#BCBCC5',
    text20: '#DEDEE2',
    brand: '#D3145A',
    beige: '#F7F2EC',
    blue6: '#f0f9fc',
    success: '#42db41',
    error: '#D91E1F',
  },
  containers: {
    sm: '700px',
    rg: '960px',
    lg: '1140px',
  },
  fonts: {
    displayLight: 'GT-Eesti-Pro-Display-Light',
    displayMedium: 'GT-Eesti-Pro-Display-Medium',
    textBook: 'GT-Eesti-Pro-Text-Book',
    textRegular: 'GT-Eesti-Pro-Text-Regular',
    textMedium: 'GT-Eesti-Pro-Text-Medium',
  },
  fontSizes: [12, 14, 16, 19, 23, 32, 44, 56],
  letterSpacing: {
    body: '0.01em',
    tight: '-0.02em',
    touch: '0.02em',
    meta: '0.15em',
  },
  lineHeight: {
    display: '1',
    headline: '1.05',
    subheadline: '1.25',
    text: '1.375',
  },
  space: [0, 8, 16, 32, 64, 128, 192],

}