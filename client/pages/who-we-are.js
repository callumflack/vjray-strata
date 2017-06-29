import React from 'react'

import gql from 'graphql-tag'
import apollo from '../lib/apollo'

import styled from 'styled-components'
import { Flex, Box } from '../components/styled-grid'
import { hoc } from '../components/styled-system/styled-components'
import theme from '../components/theme'

import { Text, TextBlock } from '../components/shared/Text'
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/shared/Headline'

import Layout from '../components/shared/Layout'
import Container from '../components/shared/Container'
import Block from '../components/shared/Block'
import HeroImage from '../components/shared/HeroImage'
import Button from '../components/shared/Button'
import ContactAction from '../components/shared/ContactAction'
import Contact from '../components/shared/Contact'


const Hero = styled(Box)`
  --Header-height: 121px;
  --Hero-height: 75vh;

  align-items: center;
  background-color: #4F90C8;
  height: calc(var(--Hero-height) + var(--Header-height));
  padding-top: var(--Header-height);
  position: relative;

  &:after {
    background: rgba(0, 0, 0, 0.2);
    background-blend-mode: multiply;
    bottom: 0;
    content: " ";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`

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


const Who = () => (
  <Layout>

    <Hero px={3}>
      <Image />
      <Container
        mx='sm'
        pt={[ 5, 6 ]}
        relative
        textCenter
        style={{ zIndex: 1 }}
      >
        <Subheadline color='white'>About us</Subheadline>
        <Display color='white'>We believe in better Sydney Strata management.</Display>
      </Container>
    </Hero>

    <Box px={3} pt={[ 5, 6 ]}>
      <Container>
        <Box width={[ 1, 11/12 ]} mx='auto'>

          <Flex mx={-3}>
            <Box width={[ 1, 1/3, 1/4 ]} mx={3}>
              <Box mt={1}>
                <img src='static/img/mike-pollard.jpg' />
              </Box>
              <Text color='text70' mt={2}>Mike Pollard</Text>
              <Text color='text70'>Owner</Text>
            </Box>

            <Box width={[ 1, 2/3, 3/4 ]} mx={3}>
              <TextBlock>
                <Text>Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Text>
                <Text>Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Text>
                <Text>Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Text>
                <Text>Dolore ipsa qui rerum veniam exercitationem Facilis earum excepturi fugit ratione nam officia! Dicta quos mollitia aspernatur sapiente nostrum corrupti Veritatis rerum a quod consectetur rem eaque Non hic cum tenetur voluptatem laborum. Natus exercitationem id ipsum odit voluptates. Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Text>
                <Text>Eius asperiores facilis quasi veniam nihil laborum! Nihil suscipit accusantium facilis eum earum. Dolore ipsa qui rerum veniam exercitationem Facilis earum excepturi fugit ratione nam officia! Dicta quos mollitia aspernatur sapiente nostrum corrupti Veritatis rerum a quod consectetur rem eaque Non hic cum tenetur voluptatem laborum. Natus exercitationem id ipsum odit voluptates. Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Text>
              </TextBlock>
            </Box>
          </Flex>

        </Box>
      </Container>
    </Box>

    <Block>
      <ContactAction bgColor='brandAlt' />
      <Contact />
    </Block>
  </Layout>
);

export default Who;