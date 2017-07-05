import styled from 'styled-components'
import theme from '../theme'
import { Box } from '../styled-grid'
import Container from './Container'
import { Display, Subheadline, HeadlineMeta } from './Headline'
import { LineBreak } from './Text'
import Button from './Button'
import ColorBox from './ColorBox'

const StyledColorBox = styled(ColorBox)`
  background-color: ${theme.colors.beige};
  background-image: initial;
`

const StyledBox = styled(Box)`
  text-align: center;
`
{/* <StyledColorBox py={[ 4, 5, 6 ]} px={3}> */}
{/* <Container mw='sm' textCenter> */}

export default (props) => (
  <StyledBox pb={[ 3, 4, 5 ]}>
    <Subheadline children='Get in touch' />
    <Display color='text'>Skip the hassle of<LineBreak m='auto'>Strata management.</LineBreak></Display>
    <HeadlineMeta color='white'>
      <Button large icon bgColor='brandAlt'>Get a fast quote</Button>
    </HeadlineMeta>
  </StyledBox>
)