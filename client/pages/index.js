import React from 'react';
import Head from 'next/head'

import styled from 'styled-components';
import { Flex, Box } from '../components/styled-grid'
import { hoc } from '../components/styled-system/styled-components'
import theme from '../components/theme.js';
import { rgba } from 'polished'

import { Texty, LargeText, AuthorText, LineBreak } from '../components/shared/Texty.js';
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/shared/Headline.js';

import Layout from '../components/Layout.js';
import Container from '../components/shared/Container.js';
// import Block from '../components/shared/Block.js';
import Block from '../components/Home/Section.js';
import Button from '../components/shared/Button.js';

import Hero from '../components/Home/Hero.js';
import FeatureList from '../components/Home/FeatureList.js';
import SydneyBox from '../components/Home/SydneyBox.js';
import Testimonials from '../components/Home/Testimonials.js';
import Guides from '../components/shared/Guides.js';
import RecentPosts from '../components/shared/RecentPosts.js';
import Contact from '../components/shared/Contact.js';







const BlueBox = styled(Box)`
  background-color: ${theme.colors.blue6};
`





export default () => (
  <div>
    <Head>
      <title>This page has a title 🤔</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>




    <Layout>
      <Hero />

      <Box px={3} my={[ 5, 6 ]}>
        <Container width={theme.containers.lg} textCenter>
          <Box width={[ 5/6, 4/6 ]} mx='auto'>
            <Headline medium dark mb={2} children='It all adds up to a better deal.' />
            <LargeText grey>
              "VJ Ray made everything easier. We all know our block is looked after, and friendly neighbours are far more easier to live with." — <AuthorText>Jessica, Campsie</AuthorText>
            </LargeText>
          </Box>
          <Box width={[ 1, 11/12 ]} mx='auto' mt={4}>
            <FeatureList />
          </Box>
        </Container>
      </Box>

      <SydneyBox px={2} />

      <Box px={3} py={[ 5, 6 ]}>
        <Container textCenter>
          <Display medium dark>Our duty is your satisfaction.</Display>
          <Container width={[ 1, 2/3 ]}>
            <LargeText active>"VJ Ray made everything easier. We all know our block is looked after, and friendly neighbours are far more easier to live with." — <AuthorText>Jessica, Campsie</AuthorText></LargeText>
          </Container>
        </Container>

        <Container textCenter>
          <Testimonials />
        </Container>
      </Box>

      <Block blue>
        <Subheadline>Info on the go</Subheadline>
        <Display active>Your guides to Sydney Strata.</Display>
        <Container width={[ 1, 2/3 ]}>
          <Texty>Ipsum odit corrupti ullam in nam expedita corporis Magnam nemo corrupti suscipit recusandae voluptatem. Non aspernatur sed vero ipsam ut.</Texty>
        </Container>

        <Guides />
        <RecentPosts />
      </Block>




      <Box px={3} py={[ 5, 6 ]}>
        <Container textCenter>
          <Contact />
        </Container>
      </Box>

    </Layout>

  </div>
)