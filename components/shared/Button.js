import styled, {css} from 'styled-components';

import theme from '../../css/theme.js';

const Button = styled.button`
  font-weight: bold;
  padding: 1rem 2rem;
  background-color: ${theme.colors.text};
  color: #fff;
  border: 0;

  ${props => props.clean && css`
    border: 0;
    background-color: transparent;
    color: inherit;
    padding: 0;
  `}

  ${props => props.bordered && css`
    display: inline-block;
    padding: 0.8rem 2rem;
    color: inherit;
    border: 1px solid currentColor;
    border-radius: 30px;
    background-color: transparent;
  `}

  ${props => props.color && css`
    color: ${theme.colors[props.color]};
  `}

  ${props => props.bgColor && css`
    background-color: ${theme.colors[props.bgColor]};
  `}
`;

export default Button;
