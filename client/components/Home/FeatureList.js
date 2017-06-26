import styled from 'styled-components'
import { Flex, Box } from '../styled-grid'
import { hoc } from '../styled-system/styled-components'
import theme from '../theme.js'
// import { tint } from 'polished'
import { Text, LargeText } from '../shared/Text.js'
import { Headline } from '../shared/Headline.js'
import { IconSun } from '../shared/Icons.js';


const Header = (props) =>
  <Headline font='displayMedium' fontSize={[ 3, 4 ]} my={2} />

// color: ${tint(0.7, ${theme.colors.text} )}
// color: ${tint(0.7, '#585870')};
const Lede = styled(Text)`
  color: ${theme.colors.text70};
`

const Divider = () => (
  <Box>
    <Text font='displayLight' fontSize={[ 6, 7 ]} color='brand' mx={2}>+</Text>
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