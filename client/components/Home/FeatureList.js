import styled from 'styled-components'
import { Flex, Box } from '../styled-grid'
import { hoc } from '../styled-system/styled-components'
import theme from '../theme.js'
// import { tint } from 'polished'

import { Texty, LargeText } from '../shared/Texty.js'
import { Headline } from '../shared/Headline.js'
import { IconSun } from './Icons.js';


const Header = (props) => (
  <Headline medium fontSize={[ 3, 4 ]} my={2}>
    {props.children}
  </Headline>
);

// color: ${tint(0.7, ${theme.colors.text} )}
// color: ${tint(0.7, '#585870')};
const Lede = styled(Texty)`
  color: ${theme.colors.text70};
`
const Divider = () => (
  <Box>
    <Texty active fontSize={[ 6, 7 ]} mx={2}>+</Texty>
  </Box>
);

const FeatureList = () => (
  <Flex>
    <Box>
      <IconSun />
      <Header>Dedicated & experienced</Header>
      <Lede>Tell us about your home and what makes it unique lorem ipsum.</Lede>
    </Box>

    <Divider />

    <Box>
      <IconSun />
      <Header>Navigate the system</Header>
      <Lede>Tell us about your home and what makes it unique lorem ipsum.</Lede>
    </Box>

    <Divider />

    <Box>
      <IconSun />
      <Header>Attendance in person</Header>
      <Lede>Tell us about your home and what makes it unique lorem ipsum.</Lede>
    </Box>

    <Divider />

    <Box>
      <IconSun />
      <Header>No lock-ins Full access.</Header>
      <Lede>Tell us about your home and what makes it unique lorem ipsum.</Lede>
    </Box>
  </Flex>
);

export default FeatureList;