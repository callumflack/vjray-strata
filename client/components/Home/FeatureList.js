import styled from 'styled-components'
import { Flex, Box } from '../styled-grid'
import hoc from '../styled-elements/hoc'
import theme from '../theme.js'
import { Headline } from '../styled-elements/Headline.js'
import { Text, LargeText } from '../styled-elements/Text.js'
import Icon from '../styled-elements/Icon.js';
import { icons } from '../constants'


const Header = (props) =>
  <Headline font='displayMedium' fontSize={[ 3, 4 ]} my={2} {...props} />

const Lede = styled(Text)`
  color: ${theme.colors.text70};`

const StyledIcon = (props) =>
  <Icon color='brand' size='100' icon={ props.icon } />

const Divider = () => (
  <Box>
    <Text font='displayLight' fontSize={[ 6, 7 ]} color='brand' mx={2}>+</Text>
  </Box>
);


const FeatureList = () => (
  <Flex>
    <Box>
      <StyledIcon icon={ icons.experience } />
      <Header>Over half a century young</Header>
      <Lede>Tell us about your home and what makes it unique lorem ipsum.</Lede>
    </Box>

    <Divider />

    <Box>
      <StyledIcon icon={ icons.lockin } />
      <Header>No lock-in contracts</Header>
      <Lede>Tell us about your home and what makes it unique lorem ipsum.</Lede>
    </Box>

    <Divider />

    <Box>
      <StyledIcon icon={ icons.service } />
      <Header>Open 6 days a week</Header>
      <Lede>Tell us about your home and what makes it unique lorem ipsum.</Lede>
    </Box>

    <Divider />

    <Box>
      <StyledIcon icon={ icons.emergency } />
      <Header>24/7 emergency contact</Header>
      <Lede>Tell us about your home and what makes it unique lorem ipsum.</Lede>
    </Box>
  </Flex>
);

export default FeatureList;