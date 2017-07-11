import Link from 'next/link'
import styled from 'styled-components'
import theme from '../theme'
import { MediumText } from '../styled-elements/Text'
import { Display, Subheadline } from '../styled-elements/Headline'
import Button from '../styled-elements/Button'
import Container from '../styled-elements/Container'

import LargeButtonStyler from './LargeButtonStyler'

const ContactAction = (props) => (
  <Container textCenter>
    <Subheadline>Get in touch</Subheadline>
    <Display color={props.headlineColor || 'text' }>Call 1300 073 405</Display>

    <Container width={[ 1, 1/2 ]} mb={4}>
      { props.withButton &&
        <LargeButtonStyler color='white' mt={3} mb={3}>
          <Link href='/fast-quote'>
            <Button large icon bgColor={props.btnColor} children='Get a fast quote' />
          </Link>
        </LargeButtonStyler>
      }

      <MediumText color='text70'>
        Or drop-in without an appointment. We're open Monday to Saturday, 9am–5pm.
      </MediumText>
    </Container>
  </Container>
)

export default ContactAction