import styled from 'styled-components'
import { Box } from '../styled-grid'
// import { HeroBox } from './Hero'
import theme from '../theme.js'

// import { HeroBox, HeroContainer, HeroFlex } from '../components/Shared/Hero'


const ColorBox = styled(Box)`
  align-items: initial;
  background-image:
    linear-gradient(
      to bottom,
      rgb(210,235,246),
      ${theme.colors.offBlue} 40%
    );
  height: auto !important;
`
// margin-top: var(--Header-height);
// ColorBox.Section = ColorBox.withComponent('section')?


export default ColorBox