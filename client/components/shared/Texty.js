import styled, { css } from 'styled-components';
import { hoc } from '../styled-system/styled-components'
import theme from '../theme.js';


const Root = hoc('p').extend`
  color: ${theme.colors.text};
  line-height: ${theme.lineHeight.text};

  ${props => props.active && css`
    color: ${theme.colors.brand};
  `}

  ${props => props.grey && css`
    color: ${theme.colors.text70};
  `}

  ${props => props.medium && css`
    font-family: ${theme.fonts.textMedium};
  `}
`;

const Texty = props => (
  <Root fontSize={[ 2, 3 ]} {...props}>
    { props.children }
  </Root>
)



// variations

const LargeTextRoot = styled(Root)`
  font-family: ${theme.fonts.displayLight};
  letter-spacing: 0.01em;
  line-height: ${theme.lineHeight.subheadline};
`;

const LargeText = props => (
  <LargeTextRoot fontSize={[ 4, 5 ]} {...props}>
    { props.children }
  </LargeTextRoot>
)



// export

export { Texty, LargeText }