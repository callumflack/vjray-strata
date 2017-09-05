import styled from 'styled-components'
import theme from '../theme'
import { icons } from '../constants'

import { Flex, Box, Grid } from '../styled-grid'
import hoc from '../Shared/hoc'

import { Headline } from '../Shared/Headline'
import { Text, SmallText, LargeText } from '../Shared/Text'
import Icon from '../Shared/Icon';



const GridRoot = styled(Grid)`
  @media (max-width: 1024px) {
    :not(first-child) {
      margin-top: 1.5rem;
    }
  }`

const StyledGrid = props =>
  <GridRoot w={[ 1, 1/2, 1/2, 1/4 ]} px={3} {...props} />

const Header = (props) =>
  <Headline font='displayMedium' fontSize={[ 3, 4 ]} mt={[ 0, 2 ]} mb={[ 1, 2 ]} {...props} />

const Lede = styled(SmallText)`
  color: ${theme.colors.text70} !important;`

const StyledIcon = (props) =>
  <Icon color='brand' size='90' icon={ props.icon } />

const RootDivider = styled(Box)`
  @media (max-width: 1024px) {
    display: none;
  }`

const Divider = () => (
  <RootDivider>
    <Text font='displayLight' fontSize={[ 6, 7 ]} color='brand' mx={2}>+</Text>
  </RootDivider>
);

const FeatureList = () => (
  <Box w={[ 5/6, 5/6, 5/6, 1 ]} mx='auto' mt={[ 2, 2, 2, 3 ]}>
    <Box mx={-3}>
      <StyledGrid>
        <StyledIcon icon={ icons.experience } />
        <Header>Over 55 years young</Header>
        <Lede>We've pretty much seen it all, so we know how to solve it.</Lede>
      </StyledGrid>

      <StyledGrid>
        <StyledIcon icon={ icons.lockin } />
        <Header>No lock-in contracts</Header>
        <Lede>Stay because you're happy, not because you're stuck with us.</Lede>
      </StyledGrid>

      <StyledGrid>
        <StyledIcon icon={ icons.service } />
        <Header>Open 6 days a week</Header>
        <Lede>We're open Saturdays, because not everyone has time in work hours.</Lede>
      </StyledGrid>

      <StyledGrid>
        <StyledIcon icon={ icons.emergency } />
        <Header>24/7 emergency contact</Header>
        <Lede>Emergencies happen. Speak to one of our senior staff anytime.</Lede>
      </StyledGrid>
    </Box>
  </Box>
);

export default FeatureList