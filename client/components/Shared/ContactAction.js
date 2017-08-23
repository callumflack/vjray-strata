import PropTypes from 'prop-types';
import Link from 'next/link'

import styled from 'styled-components'
import theme from '../theme'
import { Box } from '../styled-grid';

import { LargeText } from '../styled-elements/Text'
import { Display, Subheadline } from '../styled-elements/Headline'
import Button from '../styled-elements/Button'
import Container from '../styled-elements/Container'
import LargeButtonStyler from './LargeButtonStyler'


const ContactAction = (props) => (
  <Container textCenter>
    <Subheadline children='Get in touch' />
    <Display color={props.headlineColor || 'text' } font='displayRegular' children='Call 1300 073 405' />

    <Box
      width={[ 1, 7/12 ]}
      mx='auto'>
      { props.withButton &&
        <LargeButtonStyler color='white' mt={3} mb={3}>
          <Link href='/fast-quote'>
            <Button large icon bgColor={props.btnColor} children='Get a fast quote' />
          </Link>
        </LargeButtonStyler>
      }

      { props.withByline &&
        <LargeText color='text70' children='…or drop-in without an appointment:' />
      }
    </Box>
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