import Link from 'next/link';

import styled from 'styled-components'
import { Flex, Box } from 'rebass'

import theme from './theme.js'
import { icons } from './constants'

import hoc from './Shared/hoc'
import Container from './Shared/Container'
import { Headline } from './Shared/Headline.js'
import { Text, SmallText, LargeText, LineBreak, LineBreakMax, LineBreakAll } from './Shared/Text.js'
import Icon from './Shared/Icon.js';
import Block from './Shared/Block'


const StyledIcon = (props) =>
  <Icon color='brand' size='100' icon={ props.icon } />

const GroupSiteLink = () => (
  <Block
    bg='beige'
    mw='sm'
    textCenter
    pt={[ 2, 3, 4 ]}
    pb={[ 2, 3, 4 ]}
  >
    <StyledIcon icon={ icons.service } />
    <Headline
      font='displayMedium'
      color='brand'
    >
      Looking for more than <LineBreakAll mx='auto' children='Strata Management?' />
    </Headline>
    <Text
      color='text70'
      mx='auto'
      w={[1, 10/12]}
    >
      We offer full spectrum Real Estate Management services. Find out more on our <Link href='http://www.vjray.com.au/'><a>Group website.</a></Link>
    </Text>
  </Block>
)

export default GroupSiteLink;