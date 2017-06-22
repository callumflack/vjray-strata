import styled, {css} from 'styled-components';
import { space, width, fontSize, color } from './styled-system';
// import { Flex, Box } from 'grid-styled';

module.exports = Component => {
  const SystemComponent = styled(Component)`
    ${color}
    ${fontSize}
    ${space}
    ${width}
  `

  return SystemComponent
}