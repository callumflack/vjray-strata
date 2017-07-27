import PropTypes from 'prop-types';
import Link from 'next/link'
import styled from 'styled-components'
import theme from '../theme'
import { LargeText } from '../styled-elements/Text'
import { Display, Subheadline } from '../styled-elements/Headline'
import Button from '../styled-elements/Button'
import Container from '../styled-elements/Container'

import LargeButtonStyler from './LargeButtonStyler'

const ContactAction = (props) => (
  <Container textCenter>
    <Subheadline>Get in touch</Subheadline>
    <Display color={props.headlineColor || 'text' } font='displayRegular'>Call 1300 073 405</Display>

    <Container width={[ 1, 1/2 ]} mb={4}>
      { props.withButton &&
        <LargeButtonStyler color='white' mt={3} mb={3}>
          <Link href='/fast-quote'>
            <Button large icon bgColor={props.btnColor} children='Get a fast quote' />
          </Link>
        </LargeButtonStyler>
      }

      { props.withByline &&
        <LargeText color='text70' children='Or drop-in without an appointment.' />
      }
    </Container>
  </Container>
)

ContactAction.propTypes = {
  headlineColor: PropTypes.string,
  btnColor: PropTypes.string,
  withButton: PropTypes.bool,
  withByline: PropTypes.bool,
}

ContactAction.defaultProps = {
  headlineColor: 'text',
  withButton: false,
}

export default ContactAction