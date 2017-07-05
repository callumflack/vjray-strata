import React from 'react'

import styled from 'styled-components'
import { Flex, Box } from '../components/styled-grid'
import { hoc } from '../components/styled-system/styled-components'
import theme from '../components/theme'

import { Text, LargeText, MediumText, SmallText, AuthorText, LineBreak } from '../components/shared/Text'
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/shared/Headline'

import Layout from '../components/shared/Layout'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Container from '../components/shared/Container'
import Block from '../components/shared/Block'
import Button from '../components/shared/Button'

import HeroBox from '../components/shared/HeroBox'
import Guides from '../components/shared/Guides'
import RecentPosts from '../components/shared/RecentPosts'
import ContactAction from '../components/shared/ContactAction'
import Contact from '../components/shared/Contact'

import ListeningBox from '../components/Home/ListeningBox'
import FeatureList from '../components/Home/FeatureList'
import SydneyBox from '../components/Home/SydneyBox'
import Testimonials from '../components/Home/Testimonials'


// this doesn't work
// const ButtonType = HeadlineMeta.withComponent('span').extend`
//   color: white;
//   margin-bottom: 32px;
// `
//
// const ButtonStyle = styled(Button)`
//   --Button-height: 72px;
//   padding: 0 6rem;
//   text-transform: uppercase;
// `;
//
// const QuoteButton = props => (
//   <ButtonType color='white' mb={3}>
//     <ButtonStyle fill icon bgColor='brand'>Get a fast quote</ButtonStyle>
//   </ButtonType>
// )


export default () => (
  <Layout>
    <Header clear />

    <ListeningBox />

    <Block mw='rg' textCenter>
      <Box width={[ 4/6, 5/6 ]} mx='auto'>
        <Headline font='displayMedium' color='text' my={3} children='It all adds up to a better deal.' />
        <LargeText color='text70'>
          "VJ Ray made everything easier. We all know our block is looked after, and friendly neighbours are far more easier to live with." — <AuthorText>Jessica, Campsie</AuthorText>
        </LargeText>
      </Box>
      <Box width={[ 11/12, 1 ]} mx='auto' mt={4}>
        <FeatureList />
      </Box>
    </Block>

    <SydneyBox />

    <Box px={3} py={[ 5, 6 ]}>
      <Container textCenter>
        <Display font='displayMedium' color='text' children='Our duty is your satisfaction.' />
        <Container width={[ 1, 2/3 ]}>
          <LargeText color='brand'>"VJ Ray made everything easier. We all know our block is looked after, and friendly neighbours are far more easier to live with." — <AuthorText>Jessica, Campsie</AuthorText></LargeText>
        </Container>
      </Container>

      <Container mw='lg' pt={[ 3, 4 ]}>
        <Testimonials />
      </Container>
    </Box>

    <Block mw='lg' bg='blue6' textCenter>
      <Subheadline>Info on the go</Subheadline>
      <Display color='brandAlt'>Your guides to Sydney Strata.</Display>
      <Container width={[ 1, 2/3 ]}>
        <MediumText color='text70'>Ipsum odit corrupti ullam in nam expedita corporis Magnam nemo corrupti suscipit recusandae voluptatem. Non aspernatur sed vero ipsam ut.</MediumText>
        <Guides />
        <RecentPosts />
      </Container>
    </Block>

    <Block>
      <ContactAction btnColor='brandAlt' withButton />
      <Contact />
    </Block>

    <Footer />
  </Layout>
)