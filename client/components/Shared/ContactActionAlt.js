import PropTypes from 'prop-types'
import Link from 'next/link'

import styled from 'styled-components'
import theme from '../theme'
import hoc from '../styled-elements/hoc'
import { Box } from '../styled-grid'
import Container from '../styled-elements/Container'
import { Display, Subheadline, HeadlineMetaBaseStyles, HeadlineMeta } from '../styled-elements/Headline'
import { LineBreak } from '../styled-elements/Text'
import Button from '../styled-elements/Button'

import ColorBox from './ColorBox'
import LargeButtonStyler from './LargeButtonStyler'

const StyledBox = styled(Box)`
  text-align: center;
`

{/* <StyledColorBox py={[ 4, 5, 6 ]} px={3}> */}
{/* <Container mw='sm' textCenter> */}

const ContactActionAlt = (props) => (
  <StyledBox pb={[ 3, 4, 5 ]}>
    <Subheadline>Let's talk</Subheadline>
    <Display color='text' font='displayRegular' mb={3}>
      Skip the hassle of&nbsp;
      <LineBreak m='auto'>Strata management.</LineBreak>
    </Display>
    <LargeButtonStyler>
      <Link href='/fast-quote'>
        <Button large icon bgColor={props.btnColor} children='Get a fast quote' />
      </Link>
    </LargeButtonStyler>
  </StyledBox>
)

ContactActionAlt.propTypes = {
  btnColor: PropTypes.string,
}

export default ContactActionAlt