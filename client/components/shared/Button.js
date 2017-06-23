import styled, {css} from 'styled-components';
import theme from '../theme.js';

// Using the SuitCSS button
// https://github.com/suitcss/components-button/blob/master/lib/button.css

const Button = styled.button`
  --Button-background-color: transparent;
  --Button-border-color: currentcolor;
  --Button-border-width: 2px;
  --Button-color: inherit;
  --Button-disabled-opacity: 0.6;
  --Button-font: inherit;
  --Button-height: calc(54px - calc( 2 * var(--Button-border-width)) );
  --Button-padding: 0 1.5em;

  background: var(--Button-background-color);
  border-color: var(--Button-border-color);
  border-style: solid;
  border-width: var(--Button-border-width);
  color: var(--Button-color);
  cursor: pointer;
  display: inline-block;
  font-family: var(--Button-font);
  font-size: inherit;
  line-height: var(--Button-height);
  margin: 0;
  padding: var(--Button-padding);
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;

  &:-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  &:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }

  &:disabled,
  &.is-disabled {
    cursor: default;
    opacity: var(--Button-disabled-opacity);
  }

  ${props => props.primary && css`
    --Button-background-color: ${theme.colors.text};
    --Button-border-color: ${theme.colors.text};
    --Button-color: white;
  `}

  ${props => props.clean && css`
    background-color: transparent;
    padding: 0;
  `}

  ${props => props.invert && css`
    background-color: transparent;
    border-color: currentColor;
    border-radius: calc( 0.5 * var(--Button-height));
    border-radius: calc( 0.5 * 54px);
  `}

  ${props => props.icon && css`
    :after {
      content: '►';
      margin-left: 12px;
    }
  `}

  ${props => props.color && css`
    color: ${theme.colors[props.color]};
  `}

  ${props => props.bgColor && css`
    background-color: ${theme.colors[props.bgColor]};
  `}
`

export default Button;