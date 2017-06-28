import styled from 'styled-components'
import theme from '../theme'

import { Text } from './Text'
import { Display, Subheadline, HeadlineMeta } from './Headline'
import Button from './Button'
import Container from './Container'

// TODO: this comp depends on ContactAction having a prop, else it errors.
// To avoid this, add ternary fallback for the border-color.
const StyledButton = styled(Button)`
  --Button-border-color: ${props => props.bgColor};
  --Button-height: 72px;
  padding: 0 6rem;
  text-transform: uppercase;
`

const ContactAction = (props) => (
  <div>
    <Subheadline>Get in touch</Subheadline>
    <Display color='text'>Call 1300 073 405</Display>
    <Container width={[ 1, 1/2 ]} mb={4}>
        <HeadlineMeta color='white' mb={3}>
            <StyledButton fill icon bgColor={props.bgColor}>Get a fast quote</StyledButton>
        </HeadlineMeta>
        <Text fontSize={[ 3, 4 ]} grey>
            Or drop-in without an appointment. We're open Monday to Saturday, 9am–5pm.
        </Text>
    </Container>
  </div>
)

export default ContactAction