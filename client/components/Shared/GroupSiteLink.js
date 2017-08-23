import Link from 'next/link';

import styled from 'styled-components'
import { Flex, Box } from '../styled-grid'

import theme from '../theme.js'
import { icons } from '../constants'

import hoc from '../styled-elements/hoc'
import Container from '../styled-elements/Container'
import { Headline } from '../styled-elements/Headline.js'
import { Text, SmallText, LargeText, LineBreak, LineBreakMax, LineBreakAll } from '../styled-elements/Text.js'
import Icon from '../styled-elements/Icon.js';
import Block from './Block'


const StyledIcon = (props) =>
  <Icon color='brand' size='100' icon={ props.icon } />

const GroupSiteLink = () => (
  <Block bg='beige'>
    <Container
      mw='sm'
      textCenter
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
        w={[1, 7/12]}
        >
        We offer full spectrum Real Estate services.&nbsp;
        <LineBreak mx='auto'>
          Find out more on our&nbsp;
          <Link href='http://www.vjray.com.au/'><a>Group website.</a></Link>
        </LineBreak>
      </Text>
    </Container>
  </Block>
)

export default GroupSiteLink;