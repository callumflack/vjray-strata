import React from 'react'
import Link from 'next/link'

import styled from 'styled-components'
import theme from '../components/theme'
import { icons } from '../components/constants'

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
import HeroBox from '../components/Shared/HeroBox'
import LargeButtonStyler from '../components/Shared/LargeButtonStyler'




const servicesIntro = 'Of course we provide all of the usual services you would expect from a strata manager. We arrange your meetings, collect your levies, manage repairs and help with disputes. But we believe it shouldn’t stop there. Our mission is to help make life in a strata scheme easier by also doing the following:'

const servicesList = [{
  icon: 'emergency',
  headline: 'After Hours Emergencies',
  text: 'We know that emergencies don’t just happen during office hours. And rather than just leave you with the phone number for a message service we have our most senior staff on call to help you with emergency repairs, whenever they occur.',
  link: false,
  button: true
}, {
  icon: 'contents',
  headline: 'Contents Insurance',
  text: 'Many owners and residents aren’t aware that damage to their furniture and possessions is not covered by the buildings insurance. That’s why we help with arranging contents insurance too. And depending on which company the building is insured with, there can be considerable savings by reducing insurances excess amounts.',
  link: false
}, {
  icon: 'bylaw',
  headline: 'By-law Registration',
  text: 'With the introduction of the Strata Schemes Management Act 2015, the need for By-laws to be adopted and amended increased greatly. For example, did you know you often need to create a By-law BEFORE you renovate your bathroom?',
  link: false
}, {
  icon: 'contractor',
  headline: 'Contractor Management',
  text: 'We all know how complex the licensing, WHS & insurance laws surrounding contractors are these days, so at V J Ray we enlist the help of an independent company to continually monitor each and every contractor used by all of our strata schemes so that there is never any doubt that they comply.',
  link: false
}, {
  icon: 'voting',
  headline: 'Electronic voting',
  text: 'With the introduction of the Strata Schemes Management Act 2015, there is now the opportunity for strata schemes to elect to make some of the less complex decisions at a meeting by voting electronically, rather than attending the meeting in person.',
  link: false
}, {
  icon: 'service',
  headline: 'One more to add here',
  text: 'X',
  link: false
}, {
  icon: 'sun',
  headline: 'Coming soon…',
  text: 'We are constantly working to improve our help to strata owners and residents by taking advantage of technology as it becomes available. Things such as video meetings, an App to report repairs and maintenance items, and online contractor supervision are just a few of the things we are currently working on, so be sure to check back soon to see how they are coming along.',
  link: false
}]




const StyledHeroBox = styled(HeroBox)`
  --Hero-height: ${theme.blockHeights.hero};
  --Header-height: ${theme.blockHeights.navBar};
  background-color: transparent;
  background-image:
    linear-gradient(
      to bottom,
      rgba(222, 202, 178, 0.4),
      ${theme.colors.beige} 70%
    );

  height: calc(70vh + var(--Header-height)) !important;

  @media (min-width: 768px) {
    height: calc(var(--Hero-height) + var(--Header-height)) !important;
  }
`

const Image = styled(CoverImage)`
  background-image: url('static/img/what-hero.png');
  background-position: 30% 100%;

  @media (min-width: 1024px) {
    background-position: 100% 100%;
  }

  @media (min-width: 1280px) {
    background-size: contain !important;
    background-position: 85% 100%;
  }

  @media (min-width: 1536px) {
    background-position: 66% 100%;
  }
`

const Hero = props => (
  <StyledHeroBox px={3}>
    <Image />
    <Container mw='lg'>
      <Flex
        align='center'
        style={{ height: theme.blockHeights.hero }}
        >
        <Box w={[ 5/12, 1/2 ]} ml={[ null, 3 ]}>
          <Subheadline children='Our extra services' />
          <Display color='brand'>
            What we do
            <LineBreak>for you.</LineBreak>
          </Display>
          <LargeText color='text70'>
            We’ll help you get
            <LineBreak>peace of mind.</LineBreak>
          </LargeText>
        </Box>
      </Flex>
    </Container>
  </StyledHeroBox>
)

const ItemRoot = styled(Flex)`
  &:last-child {
    margin-bottom: 0;
  }
`

const ItemIcon = styled(Icon)`
  transform: translateY(-20px);
`

const Item = (props) => (
  <ItemRoot
    direction={[ 'column', 'row' ]}
    mx={-2}
    mb={4}>
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
      {props.item.button &&
        <LargeButtonStyler align='left' color='white' mt={3}>
          <Link href='/emergency'>
            <Button large icon color='brand' bgColor='transparent' children='Emergencies' />
          </Link>
        </LargeButtonStyler>
      }
    </Box>
  </ItemRoot>
)




const What = (props) => (
  <Layout>
    <Header
      pathname={props.pathname}
      clear />
    <Hero />

    <Block mw='sm'>
      <LargeText
        color='text70'
        mb={5}
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

export default What