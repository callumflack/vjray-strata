import React from 'react';
import Head from 'next/head'

import styled from 'styled-components';
import { Flex, Box } from '../components/styled-grid'
import { hoc } from '../components/styled-system/styled-components'
import theme from '../components/theme.js';

import { Text, LargeText, SmallText, AuthorText, LineBreak } from '../components/shared/Text.js';
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/shared/Headline.js';

import Layout from '../components/Layout.js';
import Container from '../components/shared/Container.js';
import Block from '../components/shared/Block.js';
import Button from '../components/shared/Button.js';

import HeroBox from '../components/Home/HeroBox.js';
import FeatureList from '../components/Home/FeatureList.js';
import SydneyBox from '../components/Home/SydneyBox.js';
import Testimonials from '../components/Home/Testimonials.js';
import Guides from '../components/shared/Guides.js';
import RecentPosts from '../components/shared/RecentPosts.js';
import Contact from '../components/shared/Contact.js';


const StyledButton = styled(Button)`
  --Button-height: 72px;
  padding: 0 6rem;
  text-transform: uppercase;
`;


export default () => (
  <div>
    <Head>
      <title>VJ Ray Strata, Sydney</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>


    <Layout>
      <HeroBox />

      <Block mx='lg'>
        <Box width={[ 4/6, 5/6 ]} mx='auto'>
          <Headline medium dark my={3} children='It all adds up to a better deal.' />
          <LargeText grey>
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
          <Display medium dark>Our duty is your satisfaction.</Display>
          <Container width={[ 2/3, 1 ]}>
            <LargeText active>"VJ Ray made everything easier. We all know our block is looked after, and friendly neighbours are far more easier to live with." — <AuthorText>Jessica, Campsie</AuthorText></LargeText>
          </Container>
        </Container>

        <Container mx='lg' pt={[ 3, 4 ]}>
          <Testimonials />
        </Container>
      </Box>

      <Block mx='lg' bg='blue6'>
        <Subheadline>Info on the go</Subheadline>
        <Display active>Your guides to Sydney Strata.</Display>
        <Container width={[ 1, 2/3 ]}>
          <Text>Ipsum odit corrupti ullam in nam expedita corporis Magnam nemo corrupti suscipit recusandae voluptatem. Non aspernatur sed vero ipsam ut.</Text>
        </Container>

        <Guides />
        <RecentPosts />
      </Block>

      <Block>
        <Subheadline dark>Get in touch</Subheadline>
        <Display dark>Call 1300 073 405</Display>
        <Container width={[ 1, 1/2 ]} mb={4}>
          <HeadlineMeta white mb={3}>
            <StyledButton fill icon bgColor='brand'>Get a fast quote</StyledButton>
          </HeadlineMeta>
          <Text fontSize={[ 3, 4 ]} grey>
            Or drop-in without an appointment. We're open Monday to Saturday, 9am–5pm.
          </Text>
        </Container>

        <Contact />
      </Block>

    </Layout>
  </div>
)