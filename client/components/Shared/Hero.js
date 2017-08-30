import styled, { css } from 'styled-components'
import { Box, Flex } from '../styled-grid';
import theme from '../theme.js';
import Container from '../styled-elements/Container'

/*
 * 1. This keeps banner images from impinging
 *    on the main menu at laptop-like screen heights..
 */

const HeroBox = styled(Box)`
  --Header-height: ${theme.blockHeights.navBar};
  --Hero-height: 50vh;
  --Hero-height-mobile: 50vh;
  --Hero-height-tablet: 40vh;
  --Hero-height-laptop: 66vh;

  align-items: center;
  height: calc(var(--Hero-height-mobile) + var(--Header-height));
  padding-top: var(--Header-height);
  position: relative;

  @media (min-width: 768px) {
    height: calc(var(--Hero-height-tablet) + var(--Header-height)) !important;
  }

  @media (min-width: 1024px) {
    height: calc(var(--Hero-height-laptop) + var(--Header-height)) !important;
  }

  @media (min-width: 1536px) {
    height: calc(var(--Hero-height) + var(--Header-height)) !important;
  }

  /* 1 */
  ${props => props.avoidMenuAtLaptopSize && css`
    @media (min-height: 1000px) and (min-width: 1024px) {
      > div:first-child > div:first-child { bottom: calc(-0.333333 * var(--Header-height)); }
    }
  `}
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
  ColorBox,
  HeroContainer,
  HeroFlex,
  HeroTitleBox
}