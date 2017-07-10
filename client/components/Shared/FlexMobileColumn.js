import styled, { css } from 'styled-components'
import { Flex } from '../styled-grid'
import theme from '../theme'

// {$props => props.retainCellOrder && css`
//   @media (max-width: ${theme.containers.sm}) {
//     div + div {
//       margin-top: ${theme.space[4]}px;
//     }
//   }
// `}

const FlexMobileColumn = styled(Flex)`
  flex-direction: column;

  @media (min-width: ${theme.containers.sm}) {
    flex-direction: row;
  }

  ${props => props.reverseShadow && css`
    text-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  `}
`

export default FlexMobileColumn