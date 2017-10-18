import styled, {css} from 'styled-components';
import { 
  Button as doe, 
  ButtonOutline as rae, 
  ButtonCircle as me
} from 'rebass';

// inherit wrapped text styles
// not rebass' settings
const BaseStyles = `
  font-family: inherit;
  font-size: inherit;
  letter-spacing: inherit;
  line-height: 1.75;
  text-transform: inherit;
`;

const Button = styled(doe)`
  ${BaseStyles}

  ${props => props.icon && css`
    :after {
      content: '►';
      font-size: 55%;
      margin-left: 6px;
      position: relative;
      top: -1px;
    }
  `}
`

const ButtonOutline = styled(rae)`
  ${BaseStyles}

  ${props => props.icon && css`
    :after {
      content: '►';
      font-size: 55%;
      margin-left: 6px;
      position: relative;
      top: -1px;
    }
  `}
`

const ButtonCircle = styled(me)`
  ${BaseStyles}

  ${props => props.icon && css`
    :after {
      content: '►';
      font-size: 55%;
      margin-left: 6px;
      position: relative;
      top: -1px;
    }
  `}
`

export {
  Button,
  ButtonOutline,
  ButtonCircle
};