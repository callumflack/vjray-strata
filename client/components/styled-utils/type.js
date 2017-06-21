import { css } from 'styled-components';
import theme from '../theme.js';

const fonts = css`
  ${props => props.light && css`
    font-family: 'GT-Eesti-Pro-Display-Light';
  `}

  ${props => props.medium && css`
    font-family: 'GT-Eesti-Pro-Display-Medium';
  `}
`;

const letterSpacing = css`
  ${props => props.letterSpacingTouch && css`
    letter-spacing: ${theme.letterSpacing.touch};
  `}
`;

const lineHeight = css`
  ${props => props.lineHeightHeadline && css`
    line-height: ${theme.lineHeight.headline};
  `}
`;

export { fonts, letterSpacing, lineHeight }