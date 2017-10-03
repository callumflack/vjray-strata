import PropTypes from 'prop-types';
import Link from 'next/link'

import styled from 'styled-components'
import theme from './theme'
import { Box } from 'rebass';

import { LargeText } from './Shared/Text'
import { Display, Subheadline } from './Shared/Headline'
import Button from './Shared/Button'
import Container from './Shared/Container'
import LargeButtonStyler from './LargeButtonStyler'


const Root = styled(Box)`
  text-align: center;
`

const ContactAction = (props) => (
  <Root>
    <Subheadline children='Contact us' />
    <Display color={props.headlineColor || 'text' } font='displayRegular'>
      Make Strata living easy.
    </Display>

    <Box
      width={[ 1, 7/12 ]}
      mx='auto'>
      { props.withButton &&
        <LargeButtonStyler color='white' mt={3} mb={3}>
          <Link href='/let-us-help-you'>
            <Button large icon bgColor={props.btnColor} children='Get a fast quote' />
          </Link>
        </LargeButtonStyler>
      }

      { props.withByline &&
        <LargeText color='text70' children='…or drop-in without an appointment:' />
      }
    </Box>
  </Root>
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