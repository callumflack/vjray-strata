import styled, {css} from 'styled-components';
import theme from '../theme.js';

// Using the SuitCSS button
// https://github.com/suitcss/components-button/blob/master/lib/button.css
// --Button-letter-spacing: 0.025em;
// letter-spacing: var(--Button-letter-spacing);

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
  letter-spacing: inherit;
  line-height: var(--Button-height);
  margin: 0;
  padding: var(--Button-padding);
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: inherit;
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
    --Button-background-color: ${theme.colors.text70};
    cursor: default;
    opacity: var(--Button-disabled-opacity);
  }

  ${props => props.color && css`
    --Button-color: ${theme.colors[props.color]};
  `}

  ${props => props.bgColor && css`
    --Button-background-color: ${theme.colors[props.bgColor]};
  `}

  ${props => props.clean && css`
    --Button-background-color: transparent;
    --Button-border-color: transparent;
  `}

  ${props => props.primary && css`
    --Button-background-color: ${theme.colors[props.bgColor] || theme.colors.brand};
    --Button-border-color: ${theme.colors[props.bgColor] || theme.colors.brand};
    --Button-color: white;
  `};

  ${props => props.large && css`
    --Button-border-color: ${theme.colors[props.bgColor] || theme.colors.brand};
    --Button-height: 72px;
    padding: 0 4rem;

    @media (min-width: ${theme.containers.sm}px) {
      padding: 0 6rem;
    }
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
      font-size: 85%;
      margin-left: 12px;
    }
  `}
`

export default Button;