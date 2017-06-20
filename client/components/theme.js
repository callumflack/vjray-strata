import { lighten } from 'polished'

// export default {
//   breakpoints: [
//     32, 48, 64
//   ],
//   space: [
//     0, 6, 12, 18, 24
//   ],
//   fontSizes: [
//     12, 16, 19, 22, 24, 32, 40, 58
//   ]
// }

// text70: ${lighten(0.2, '#585870')},

export default {
  breakpoints: [32, 48, 64],
  space: [0, 8, 16, 24, 48, 96, 192],
  fontSizes: [12, 16, 18, 21, 24, 29, 40, 58],
  colors: {
    text: '#585870',
    brand: '#D3145A',
    alt: '#F7F2EC',
    success: '#42db41',
    error: '#D91E1F',
  },
  containers: {
    sm: '700px',
    rg: '960px',
    lg: '1140px',
  },
  wrappers: [700, 960, 1140]
}