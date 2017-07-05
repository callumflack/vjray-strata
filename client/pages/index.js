import React from 'react'
import Link from 'next/link';

import styled from 'styled-components'
import { Flex, Box } from '../components/styled-grid'
import { hoc } from '../components/styled-system/styled-components'
import theme from '../components/theme'

import Layout from '../components/styled-elements/Layout'
import Container from '../components/styled-elements/Container'
import Button from '../components/styled-elements/Button'
import { Text, LargeText, MediumText, SmallText, AuthorText, LineBreak } from '../components/styled-elements/Text'
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/styled-elements/Headline'

import Header from '../components/Sharedy/Header'
import Footer from '../components/Sharedy/Footer'
import Block from '../components/Sharedy/Block'
import HeroBox from '../components/Sharedy/HeroBox'
import Guides from '../components/Sharedy/Guides'
import RecentPosts from '../components/Sharedy/RecentPosts'
import ContactAction from '../components/Sharedy/ContactAction'
import Contact from '../components/Sharedy/Contact'

import ListeningBox from '../components/Home/ListeningBox'
import FeatureList from '../components/Home/FeatureList'
import SydneyBox from '../components/Home/SydneyBox'
import Testimonials from '../components/Home/Testimonials'


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
        <Display children='Our duty is your satisfaction.' />
        <Container width={[ 1, 2/3 ]}>
          <LargeText color='text70'>
            "VJ Ray made everything easier. We all know our block is looked after, and friendly neighbours are far more easier to live with." —&nbsp;
            <AuthorText>Jessica, Campsie</AuthorText>
          </LargeText>
        </Container>
      </Container>

      <Container mw='lg' pt={[ 3, 4 ]}>
        <Testimonials />
      </Container>
    </Box>

    <Block mw='sm' bg='blue6' textCenter>
      <Subheadline>Info on the go</Subheadline>
      <Display color='brandAlt'>
        Your guides to&nbsp;
        <LineBreak mx='auto'>Sydney Strata.</LineBreak>
      </Display>
      <MediumText color='text70'>
        Ipsum odit corrupti ullam in nam expedita corporis Magnam nemo corrupti suscipit recusandae voluptatem. Non aspernatur sed vero ipsam ut.
      </MediumText>

      <Guides />

      <Subheadline>
        <Link href={`/`} as={`/home`}><a>Recent posts</a></Link>
      </Subheadline>
      <RecentPosts />
    </Block>

    <Block>
      <ContactAction btnColor='brandAlt' withButton />
      <Contact />
    </Block>

    <Footer />
  </Layout>
)