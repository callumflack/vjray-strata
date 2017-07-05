import Link from 'next/link'

import styled from 'styled-components'
import theme from '../theme'
import { hoc } from '../styled-system/styled-components'
import { Box } from '../styled-grid'
import Container from './Container'
import { Display, Subheadline, HeadlineMetaBaseStyles, HeadlineMeta } from './Headline'
import { LineBreak } from './Text'
import Button from './Button'
import ColorBox from './ColorBox'

const StyledBox = styled(Box)`
  text-align: center;
`

const ButtonLink = Button.withComponent('a').extend`
  text-decoration: none;
`

const ButtonStyleRoot = hoc('div').extend``

const ButtonStyle = props =>
  <ButtonStyleRoot
    {...HeadlineMetaBaseStyles}
    align='center'
    color='white'
    {...props}
  />

{/* <StyledColorBox py={[ 4, 5, 6 ]} px={3}> */}
{/* <Container mw='sm' textCenter> */}

export default (props) => (
  <StyledBox pb={[ 3, 4, 5 ]}>
    <Subheadline children='Get in touch' />
    <Display color='text'>
      Skip the hassle of&nbsp;
      <LineBreak m='auto'>Strata management.</LineBreak>
    </Display>
    <ButtonStyle>
      <Link href='/fast-quote'>
        <Button large icon bgColor={props.btnColor} children='Get a fast quote' />
      </Link>
    </ButtonStyle>
  </StyledBox>
)