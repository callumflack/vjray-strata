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

import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import HeroBox from '../components/Shared/HeroBox'
import Guides from '../components/Shared/Guides'
import RecentPosts from '../components/Shared/RecentPosts'
import ContactAction from '../components/Shared/ContactAction'
import Contact from '../components/Shared/Contact'

import ListeningBox from '../components/Home/ListeningBox'
import FeatureList from '../components/Home/FeatureList'
import SydneyBox from '../components/Home/SydneyBox'
import TalkBox from '../components/Home/TalkBox'
import Testimonials from '../components/Home/Testimonials'


const Index = () => (
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

    <TalkBox>
      <Box px={3} py={[ 5, 6 ]} style={{ position: 'relative' }}>
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
    </TalkBox>

    <Block textCenter>
      <Subheadline>Info on the go</Subheadline>
      <Display color='brandAlt' children='Your guides to Sydney Strata.' />
      <MediumText color='text70'>
        Ipsum odit corrupti ullam in nam expedita corporis Magnam nemo corrupti suscipit recusandae voluptatem. Non aspernatur sed vero ipsam ut.
      </MediumText>

      <Box p={4}>
        <Guides featured limit={3} />
      </Box>

      <Container mt={5} mw='sm'>
        <Subheadline>
          <Link href={`/`} as={`/home`}><a>Recent posts</a></Link>
        </Subheadline>
        <RecentPosts />
      </Container>
    </Block>

    <Block bg='offWhite'>
      <ContactAction btnColor='brandAlt' withButton />
      <Contact />
    </Block>

    <Footer bg='offWhite'/>
  </Layout>
)


export default Index;