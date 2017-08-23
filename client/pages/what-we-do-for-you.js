import React from 'react'
import Link from 'next/link'

import styled from 'styled-components'
import theme from '../components/theme'
import { icons, servicesIntro, servicesList } from '../components/constants'

import { Flex, Box } from '../components/styled-grid'
import hoc from '../components/styled-elements/hoc'

import { LargeText, Text, TextBlock, LineBreak } from '../components/styled-elements/Text'
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/styled-elements/Headline'
import Button from '../components/styled-elements/Button'
import Container from '../components/styled-elements/Container'
import CoverImage from '../components/styled-elements/CoverImage'
import Icon from '../components/styled-elements/Icon';
import Layout from '../components/styled-elements/Layout'

import Block from '../components/Shared/Block'
import Contact from '../components/Shared/Contact'
import ContactAction from '../components/Shared/ContactAction'
import Footer from '../components/Shared/Footer'
import Header from '../components/Shared/Header'
import { HeroBox, HeroContainer, HeroFlex } from '../components/Shared/Hero'
import LargeButtonStyler from '../components/Shared/LargeButtonStyler'


const StyledHeroBox = styled(HeroBox)`
  background-image:
    linear-gradient(
      to bottom,
      rgba(222, 202, 178, 0.4),
      ${theme.colors.beige} 70%
    );
`

const Image = styled(CoverImage)`
  background-image: url('static/img/what-hero.png');
  background-position-x: 38%;
  @media (min-width: 768px) { background-position-x: 30%; }
  @media (min-width: 1024px) { background-position-x: 30%; }
  @media (min-width: 1280px) { background-position-x: 85%; }
  @media (min-width: 1536px) { background-position-x: 66%; }
  @media (min-width: 1800px) { background-position-x: 60%; }

  @media (min-width: 1536px) { background-size: contain !important; }
`

{/* <Subheadline children='Our extra services' /> */}
const Hero = props => (
  <StyledHeroBox>
    <Image />
    <HeroContainer mw='rg'>
      <HeroFlex>
        <Box w={[ 8/12, 5/12, 4/10, 1/2 ]} ml={[ null, 3 ]} mb={4}>
          <Display color='brand'>
            What we do <LineBreak>for you.</LineBreak>
          </Display>
          <LargeText>
            We’ll help you get <LineBreak>peace of mind.</LineBreak>
          </LargeText>
        </Box>
      </HeroFlex>
    </HeroContainer>
  </StyledHeroBox>
)

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
    mb={[ 3, 4, 5 ]}>
    <Box px={[ 2 ]}>
      <ItemIcon
        color='brand'
        size='100'
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
        <LargeButtonStyler align='left' color='white' mt={[ 2, 3 ]}>
          <Link href={props.item.buttonUrl}>
            <Button large icon color='brand' bgColor='transparent' children={props.item.buttonLabel} />
          </Link>
        </LargeButtonStyler>
      }
    </Box>
  </ItemRoot>
)

const WhatPage = (props) => (
  <Layout>
    <Header
      pathname='/what-we-do-for-you'
      clear />
    <Hero />

    <Block mw='sm'>
      <LargeText
        color='text70'
        mb={[ 4, 5 ]}
        children={servicesIntro}
      />
      {servicesList.map((item, i) =>
        <Item item={item} key={i} />
      )}
    </Block>

    <Block
      border
      textCenter>
      <ContactAction
        btnColor='brandAlt'
        withButton />
      <Contact />
    </Block>

    <Footer />
  </Layout>
)

export default WhatPage