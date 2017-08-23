import styled, { css } from 'styled-components'
import { Box, Flex } from '../styled-grid';
import theme from '../theme.js';
import Container from '../styled-elements/Container'

const HeroBox = styled(Box)`
  --Header-height: ${theme.blockHeights.navBar};
  --Hero-height: ${theme.blockHeights.hero};
  --Hero-height-mobile: 60vh;
  align-items: center;
  height: calc(var(--Hero-height-mobile) + var(--Header-height));
  padding-top: var(--Header-height);
  padding-left: ${theme.space[3]}px;
  padding-right: ${theme.space[3]}px;
  position: relative;

  @media (min-width: 768px) {
    height: calc(var(--Hero-height) + var(--Header-height)) !important;
  }
`

const ColorBox = styled(HeroBox)`
  align-items: initial;
  height: auto !important;
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

export { HeroBox, ColorBox, HeroContainer, HeroFlex }