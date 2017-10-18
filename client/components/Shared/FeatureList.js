import styled from 'styled-components'
import { Box, Flex, Border } from 'rebass'
import { Heading } from './Headings'
import { Text, SmallText } from './Texts'
import icons from './iconConstants'
import Icon from './Icon';
import RespToggle from './ResponsiveToggle';


const CellRoot = styled(Box)`
  text-align: center;

  @media (max-width: 1024px) {
    :not(first-child) {
      margin-top: 1.5rem;
    }
  }`

const Cell = props =>
  <CellRoot
    w={[1, 1 / 2, 1 / 2, 1 / 4]}
    px={3}
    {...props}
  />

const StyledIcon = (props) =>
  <Icon
    border
    color='brand'
    size='90'
    icon={props.icon}
  />

const Feature = props => (
  <Cell>
    <Box 
      w={[1, 11/12]}
      mx='auto'
      mb={2}
    >
      <Border
        borderWidth={props.border ? '1px' : '0'}
        color='brand'
      >
        <Box p={2}>
          <StyledIcon icon={props.icon} />
          <Heading
            center
            color='brand'
            family='displayMedium'
            fontSize={[3, 4]}
            mt={[0, 2]}
            mb={[1, 2]}
          >
            {props.header}</Heading>
        </Box>
      </Border>
    </Box>
    <SmallText color='text70'>{props.lede}</SmallText>
  </Cell>
)

// const Divider = () => (
//   <RespToggle break={[ 'block', 'block', 'block', 'none' ]}>
//     <Text 
//       color='brand' 
//       fontSize={[ 6, 7 ]} 
//       mx={2}
//     >+</Text>
//   </RespToggle>
// );

const FeatureList = (props) => (
  <Box 
    w={[ 5/6, 5/6, 5/6, 1 ]} 
    mx='auto' 
    mt={[ 2, 2, 3, 4 ]}
  >
    <Flex mx={-3} wrap={[ 'wrap', 'nowrap']}>
      <Feature
        icon={icons.experience}
        border={props.border}
        header='Strata Management'
        lede="We've pretty much seen it all, so we know how to solve it."
      />
      <Feature
        icon={icons.lockin}
        border={props.border}
        header='Property management for Landlords'
        lede="Stay because you're happy, not because you're stuck with us."
      />
      <Feature
        icon={icons.service}
        border={props.border}
        header='Property management for Tenants'
        lede="We're open Saturdays, because not everyone has time in work hours."
      />
      <Feature
        icon={icons.emergency}
        border={props.border}
        header='Real Estate valuations'
        lede="Emergencies happen. Speak to one of our senior staff anytime."
      />
    </Flex>
  </Box>
);

export default FeatureList
