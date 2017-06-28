import React from 'react';

import gql from 'graphql-tag';
import apollo from '../lib/apollo.js';

import styled from 'styled-components';
import { Flex, Box } from '../components/styled-grid'
import { hoc } from '../components/styled-system/styled-components'
import theme from '../components/theme.js';

import { Text, TextBlock } from '../components/shared/Text.js';
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/shared/Headline.js';

import Layout from '../components/Layout.js';
import Container from '../components/shared/Container.js';
import Block from '../components/shared/Block.js';
import HeroImage from '../components/shared/HeroImage.js';
import Button from '../components/shared/Button.js';
import ContactAction from '../components/shared/ContactAction.js';
import Contact from '../components/shared/Contact.js';



const Image = styled(HeroImage)`
  background-image: url('static/img/who-cronulla.jpg');
  background-position: 50% 50%;

  @media (min-width: 1024px) {
    background-position: 50% 50%;
  }

  @media (min-width: 1280px) {
    background-position: 50% 50%;
  }

  @media (min-width: 1536px) {
    background-position: 10% 100%;
  }
`

const Hero = styled(Box)`
  --Header-height: 121px;
  --Hero-height: 75vh;

  align-items: center;
  background-color: #4F90C8;
  height: calc(var(--Hero-height) + var(--Header-height));
  padding-top: var(--Header-height);
  position: relative;
`



const Who = () => (
  <Layout>

    <Hero px={3}>
      <Image />
      <Container mx='sm' pt={[ 5, 6 ]} relative textCenter>
        <Subheadline color='white'>About us</Subheadline>
        <Display color='white'>We believe in better Sydney Strata management.</Display>
      </Container>
    </Hero>

    <Box px={3} pt={[ 5, 6 ]}>
      <Container>
        <Flex mx={-2}>
          <Box width={[ 1, 1/3, 1/4 ]} mx={2}>
            <img src='http://lorempixel.com/300/300' />
            <Text color='text70' mt={2}>Mike Pollard</Text>
            <Text color='text70'>Owner</Text>
          </Box>

          <Box width={[ 1, 2/3, 3/4 ]} mx={2}>
            <TextBlock>
              <Text>Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Text>
              <Text>Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Text>
              <Text>Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Text>
              <Text>Dolore ipsa qui rerum veniam exercitationem Facilis earum excepturi fugit ratione nam officia! Dicta quos mollitia aspernatur sapiente nostrum corrupti Veritatis rerum a quod consectetur rem eaque Non hic cum tenetur voluptatem laborum. Natus exercitationem id ipsum odit voluptates. Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Text>
              <Text>Eius asperiores facilis quasi veniam nihil laborum! Nihil suscipit accusantium facilis eum earum. Dolore ipsa qui rerum veniam exercitationem Facilis earum excepturi fugit ratione nam officia! Dicta quos mollitia aspernatur sapiente nostrum corrupti Veritatis rerum a quod consectetur rem eaque Non hic cum tenetur voluptatem laborum. Natus exercitationem id ipsum odit voluptates. Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Text>
            </TextBlock>
          </Box>
        </Flex>
      </Container>
    </Box>

    <Block>
      <ContactAction bgColor='brandAlt' />
      <Contact />
    </Block>
  </Layout>
);

export default Who;