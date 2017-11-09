import styled, { css } from 'styled-components'
import { Box, Flex } from '../styled-grid';
import theme from '../theme.js';
import Container from '../Shared/Container'


const HeroBox = styled(Box)`
  align-items: center;
  height: calc(${theme.blockHeights.navBar} + 50vh);
  padding-top: ${theme.blockHeights.navBar};
  position: relative;

  @media (min-width: 512px) and (max-height: 800px) {
    min-height: calc(${theme.blockHeights.navBar} + 70vh) !important;
  }

  ${props => props.showAfterScreen && css`
    @media (max-width: 1024px) {
      &:after {
        bottom: 0;
        content: " ";
        left: 0;
        position: absolute;
        top: 0;
        right: 0;
      }
  `}
`

/*
 * HeroFrame is an alternative to HeroBox.
 * it works without need for HeroContainer, HeroFlex or HeroTitleBox.
 */

const HeroFrame = styled(Box)`
  height: auto;
  padding-top: ${theme.blockHeights.navBar};
  position: relative;
`

const HeroContainer = styled(Container)`
  height: 100%;
  position: relative;
`

const HeroFlex = styled(Flex)`
  align-items: center;
  height: inherit;
  position: relative;
  z-index: 1;
`

const HeroTitleBoxRoot = styled(Box)`
  ${props => props.invertTextOnMobile && css`
    @media (max-width: 512px) {
      h4 { color: ${theme.colors.text7}; }
      h1 { color: white; }
      p { color: ${theme.colors.text20}; }
    }
  `}
`

const HeroTitleBox = props =>
  <HeroTitleBoxRoot ml={[ 0, 0, 4, 0 ]} {...props} />

export {
  HeroBox,
  HeroFrame,
  HeroContainer,
  HeroFlex,
  HeroTitleBox
}