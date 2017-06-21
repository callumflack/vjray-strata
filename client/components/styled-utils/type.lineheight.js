import { css } from 'styled-components';
import theme from '../theme.js';

const lineHeight = css`
  ${props => props.lineHeightHeadline && css`
    line-height: ${theme.lineHeight.headline};
  `}
`;