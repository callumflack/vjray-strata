import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { hoc } from '../styled-components'
import theme from '../theme.js'
import { tint } from 'polished'
import { Texty } from '../shared/Texty.js'
import Headline from '../shared/Headline.js'

const Header = (props) => (
  <Headline.h4 medium active fontSize={[ 3, 4 ]}>
    {props.children}
  </Headline.h4>
);

// color: ${lighten(0.2, ${theme.colors.text} )}

const Text = styled(Texty)`
  color: ${tint(0.7, '#585870')};
`

const Divider = () => (
  <Box>
    <Texty medium active fontSize={[ 6, 7 ]}>
      +
    </Texty>
  </Box>
);

const FeatureList = () => (
  <Flex>
    <Box>
      <img src='http://lorempixel.com/75/75' />
      <Header>Dedicated & experienced</Header>
      <Text>Tell us about your home and what makes it unique lorem ipsum.</Text>
    </Box>

    <Divider />

    <Box>
      <img src='http://lorempixel.com/75/75' />
      <Header>Navigate the system</Header>
      <Text>Tell us about your home and what makes it unique lorem ipsum.</Text>
    </Box>

    <Divider />

    <Box>
      <img src='http://lorempixel.com/75/75' />
      <Header>Attendance in person</Header>
      <Text>Tell us about your home and what makes it unique lorem ipsum.</Text>
    </Box>

    <Divider />

    <Box>
      <img src='http://lorempixel.com/75/75' />
      <Header>No lock-ins Full access.</Header>
      <Text>Tell us about your home and what makes it unique lorem ipsum.</Text>
    </Box>
  </Flex>
);

export default FeatureList;