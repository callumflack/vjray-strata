import PropTypes from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components'
import theme from '../theme'
import hoc from '../Shared/hoc'
import { Box } from '../styled-grid'
import Container from '../Shared/Container'
import { Display, Subheadline, HeadlineMetaBaseStyles, HeadlineMeta } from '../Shared/Headline'
import { LineBreakAll } from '../Shared/Text'
import Button from '../Shared/Button'
import LargeButtonStyler from './LargeButtonStyler'


const Root = styled(Box)`
  text-align: center;
`

const ContactActionAlt = (props) => (
  <Root>
    <Subheadline>Let's talk</Subheadline>
    <Display color={props.headlineColor || 'text'} font='displayRegular' mb={3}>
      Skip the hassle of <LineBreakAll m='auto'>Strata Management.</LineBreakAll>
    </Display>
    <LargeButtonStyler>
      <Link href='/fast-quote'>
        <Button large icon bgColor={props.btnColor} children='Get a fast quote' />
      </Link>
    </LargeButtonStyler>
  </Root>
)

ContactActionAlt.propTypes = {
  btnColor: PropTypes.string,
}

export default ContactActionAlt