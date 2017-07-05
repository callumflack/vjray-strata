import styled from 'styled-components'
import HeroBox from './HeroBox'
import theme from '../theme.js'

const ColorBox = styled(HeroBox)`
  align-items: initial;
  background-image:
    linear-gradient(
      to bottom,
      rgb(210,235,246),
      ${theme.colors.blue6} 40%
    );
  height: auto !important;
`
// margin-top: var(--Header-height);
// ColorBox.Section = ColorBox.withComponent('section')?


export default ColorBox