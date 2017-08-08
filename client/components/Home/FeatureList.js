import styled from 'styled-components'
import { Flex, Box } from '../styled-grid'
import hoc from '../styled-elements/hoc'
import theme from '../theme.js'
import { Text, LargeText } from '../styled-elements/Text.js'
import { Headline } from '../styled-elements/Headline.js'
import {
  IconSun,
  IconEmergencyContact,
  IconService,
  IconLockin,
  IconExperience
} from '../styled-elements/Icons.js';
import Icon from '../styled-elements/Icon.js';
import { icons } from '../constants'


const Header = (props) =>
  <Headline font='displayMedium' fontSize={[ 3, 4 ]} my={2} {...props} />

// import { tint } from 'polished'
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
      <IconExperience color='brand' />
      {/* <Icon icon color='brand'={ icons.Experience } height='100' width='100' /> */}
      <Header>Over half a century young</Header>
      <Lede>Tell us about your home and what makes it unique lorem ipsum.</Lede>
    </Box>

    <Divider />

    <Box>
      <IconLockin color='brand' />
      <Header>No lock-in contracts</Header>
      <Lede>Tell us about your home and what makes it unique lorem ipsum.</Lede>
    </Box>

    <Divider />

    <Box>
      <IconService color='brand' />
      <Header>Open 6 days a week</Header>
      <Lede>Tell us about your home and what makes it unique lorem ipsum.</Lede>
    </Box>

    <Divider />

    <Box>
      <IconEmergencyContact color='brand' />
      <Header>24/7 emergency contact</Header>
      <Lede>Tell us about your home and what makes it unique lorem ipsum.</Lede>
    </Box>
  </Flex>
);

export default FeatureList;