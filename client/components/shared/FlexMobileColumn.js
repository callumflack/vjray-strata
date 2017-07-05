import styled from 'styled-components'
import { Flex } from '../styled-grid'
import theme from '../theme'

const FlexMobileColumn = styled(Flex)`
    flex-direction: column;

    @media (min-width: ${theme.containers.sm}) {
      flex-direction: row;
    }

    @media (max-width: ${theme.containers.sm}) {
      div + div {
        margin-top: ${theme.space[4]}px;
      }
    }
`

export default FlexMobileColumn