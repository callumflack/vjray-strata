import { css } from 'styled-components';
import theme from '../theme.js';

const letterSpacing = css`
  ${props => props.letterSpacingTouch && css`
    letter-spacing: ${theme.letterSpacing.touch};
  `}
`;