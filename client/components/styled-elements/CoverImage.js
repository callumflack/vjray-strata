import styled from 'styled-components'
import { Box } from '../styled-grid';

// background-=position is set via a styled-component.
// background-position: 50% 50%;
const Root = styled(Box)`
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

// data-bg is for cloudinary
const CoverImage = props =>
  <Root data-bg={props.src} />

export default CoverImage;