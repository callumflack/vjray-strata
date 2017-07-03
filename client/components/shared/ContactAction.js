import styled from 'styled-components'
import theme from '../theme'
import { Text } from './Text'
import { Display, Subheadline, HeadlineMeta } from './Headline'
import Button from './Button'
import Container from './Container'

const ContactAction = (props) => (
  <Container textCenter>
    <Subheadline>Get in touch</Subheadline>
    <Display color='text'>Call 1300 073 405</Display>

    <Container width={[ 1, 1/2 ]} mb={4}>
      <HeadlineMeta color='white' mb={3}>
        <Button large icon bgColor={props.bgColor}>Get a fast quote</Button>
      </HeadlineMeta>

      <Text fontSize={[ 3, 4 ]} grey>
        Or drop-in without an appointment. We're open Monday to Saturday, 9am–5pm.
      </Text>
    </Container>
  </Container>
)

export default ContactAction