import styled, { css } from 'styled-components';
import { hoc } from '../styled-components'
import theme from '../theme.js';

const TextRoot = hoc('p').extend`
  color: ${props => props.active ? theme.colors.brand : theme.colors.text};
  font-family: ${props => props.lightWeight ? theme.fonts.textBook : theme.fonts.displayLight};
  line-height: ${theme.lineHeight.text};
`;

const Texty = ({ children }) => (
  <TextRoot fontSize={[ 4, 5 ]}>
    { children }
  </TextRoot>
)

const LargeTextRoot = styled(TextRoot)`
  font-family: ${theme.fonts.displayLight};
  letter-spacing: 0.01em;
  line-height: ${theme.lineHeight.subheadline};
`;

const LargeText = ({ children }) => (
  <LargeTextRoot fontSize={[ 4, 5 ]}>
    { children }
  </LargeTextRoot>
)

export { Texty, LargeText }