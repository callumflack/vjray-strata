import PropTypes from 'prop-types';
import Link from 'next/link'
import styled from 'styled-components'
import { Box } from 'rebass';
import theme from '../theme-new'
import { MediumText } from './Texts'
import { Display, Subheading } from './Headings'


const Root = styled(Box)`
  text-align: center;
`

const ContactAction = props => (
  <Box align="center">
    <Subheading center border color="text" children="contact us" />
    <Display color={props.headlineColor || "text"} family={props.family} children={props.headline} />
  </Box>
);

ContactAction.propTypes = {
  headlineColor: PropTypes.string,
  headline: PropTypes.string,
  family: PropTypes.string,
  btnColor: PropTypes.string,
  withButton: PropTypes.bool,
  withByline: PropTypes.bool,
}

ContactAction.defaultProps = {
  headlineColor: 'text',
  family: 'displayRegular',
  withButton: false,
}

export default ContactAction
