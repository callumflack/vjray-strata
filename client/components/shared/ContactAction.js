import Link from 'next/link'
import styled from 'styled-components'
import theme from '../theme'
import { MediumText } from './Text'
import { Display, Subheadline, HeadlineMeta } from './Headline'
import Button from './Button'
import Container from './Container'

const ContactAction = (props) => (
  <Container textCenter>
    <Subheadline>Get in touch</Subheadline>
    <Display color='text'>Call 1300 073 405</Display>

    <Container width={[ 1, 1/2 ]} mb={4}>
      { props.withButton &&
        <HeadlineMeta color='white' mb={3}>
          <Link href='/fast-quote'>
            <Button large icon bgColor={props.btnColor} children='Get a fast quote' />
          </Link>
        </HeadlineMeta>
      }

      <MediumText color='text70'>
        Or drop-in without an appointment. We're open Monday to Saturday, 9am–5pm.
      </MediumText>
    </Container>
  </Container>
)

export default ContactAction