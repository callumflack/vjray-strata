import React from 'react'
import Link from 'next/link'

import styled from 'styled-components'
import theme from '../components/theme'
import { icons, servicesIntro, servicesList } from '../components/constants'

import { Flex, Box } from 'rebass'
import hoc from '../components/Shared/hoc'

import { LargeText, Text, TextBlock, LineBreak } from '../components/Shared/Text'
import { Display, Headline, Subheadline, MobileSubheadline, HeadlineMeta } from '../components/Shared/Headline'
import Button from '../components/Shared/Button'
import Container from '../components/Shared/Container'
import CoverImage from '../components/Shared/CoverImage'
import Icon from '../components/Shared/Icon';
import Layout from '../components/Shared/Layout'

import HeroWhat from '../components/HeroWhat'
import Block from '../components/Shared/Block'
import Contacts from '../components/Shared/Contacts'
import ContactAction from '../components/ContactAction'
import Footer from '../components/Shared/Footer'
import Header from '../components/Shared/Header'
import LargeButtonStyler from '../components/LargeButtonStyler'


const ItemRoot = styled(Flex)`
  &:last-child {
    margin-bottom: 0;
  }
`

const ItemIcon = styled(Icon)`
  @media (min-width: 768px) {
    transform: translateY(-20px);
  }
`

const Item = (props) => (
  <ItemRoot
    direction={[ 'column', 'row' ]}
    mx={-2}
    mb={[ 3, 4 ]}>
    <Box px={[ 2 ]}>
      <ItemIcon
        color='brand'
        size='90'
        icon={icons[props.item.icon]}
      />
    </Box>
    <Box px={[ 2 ]}>
      <LargeText
        color='brand'
        font='displayMedium'
        mb={1}
        children={props.item.headline}
      />
      <Text color='text70'>
        {props.item.text}
        {props.item.link &&
          <Link href="#"><a>Find out more</a></Link>
        }
      </Text>
      {props.item.buttonUrl &&
        <LargeButtonStyler align='left' color='white' mt={2}>
          <Link href={props.item.buttonUrl}>
            <Button large icon color='brand' bgColor='transparent' children={props.item.buttonLabel} />
          </Link>
        </LargeButtonStyler>
      }
    </Box>
  </ItemRoot>
)

const Root = (props) => (
  <Layout>
    <Header pathname={props.pathname} clear />
    <HeroWhat />
    <Block mw='sm' noBottomPadding>
      <Headline
        font='displayMedium'
        color='text'
        mt={[ 0, 4, 4, 3 ]}
        mb={2}
        children='How we do this for you.'
      />
      <LargeText
        color='text70'
        w={[ 1, 2/3, 1 ]}
        children={servicesIntro}
      />
    </Block>
    <Block mw='sm' noBottomPadding>
      {servicesList.map((item, i) =>
        <Item item={item} key={i} />
      )}
    </Block>

    <Block textCenter>
      <ContactAction btnColor='brandAlt' withButton />
      <Contacts pathname={props.pathname} />
    </Block>

    <Footer />
  </Layout>
)

class WhatPage extends React.Component {
  static async getInitialProps({ pathname }) {
    return {
      pathname,
    }
  }
  render() {
    return <Root pathname={this.props.pathname} />
  }
}

export default WhatPage