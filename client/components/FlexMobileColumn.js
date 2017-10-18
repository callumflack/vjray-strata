import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Flex } from 'rebass'
import theme from './theme'

// ------------------------------------------
// This can be removed as we can now use
// responsiveStyle within the Flex component.
// ------------------------------------------

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

FlexMobileColumn.propTypes = {
  reverseShadow: PropTypes.bool,
}

FlexMobileColumn.defaultProps = {
  reverseShadow: false,
}

export default FlexMobileColumn