import styled from 'styled-components'
import HeroBox from './HeroBox'
import theme from '../theme.js'

const ColorBox = styled(HeroBox)`
  align-items: initial;
  background-color: ${theme.colors.blue6};
  background-image:
    linear-gradient(
      to bottom,
      rgba(210,235,246,0.5),
      ${theme.colors.blue6} 40%
    );
  height: auto;

`
// margin-top: var(--Header-height);
// ColorBox.Section = ColorBox.withComponent('section')?


export default ColorBox