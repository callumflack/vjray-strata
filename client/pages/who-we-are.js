import React from 'react'

import gql from 'graphql-tag'
import apollo from '../lib/apollo'

import styled from 'styled-components'
import theme from '../components/theme'
import { Flex, Box } from '../components/styled-grid'
import { hoc } from '../components/styled-system/styled-components'

import { Text, TextBlock, LineBreak } from '../components/styled-elements/Text'
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/styled-elements/Headline'

import Layout from '../components/styled-elements/Layout'
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Container from '../components/styled-elements/Container'
import Block from '../components/Shared/Block'
import CoverImage from '../components/styled-elements/CoverImage'
import FlexMobileColumn from '../components/Shared/FlexMobileColumn'
import Button from '../components/styled-elements/Button'
import ContactAction from '../components/Shared/ContactAction'
import Contact from '../components/Shared/Contact'


const Hero = styled(Box)`
  --Header-height: 121px;
  --Hero-height: 70vh;

  align-items: center;
  background-color: #4F90C8;
  height: calc(var(--Hero-height) + var(--Header-height));
  padding-top: var(--Header-height);
  position: relative;

  &:after {
    background-color: rgba(79, 144, 200, 0.25);
    background-color: rgba(255, 255, 255, 0.15);
    background-blend-mode: multiply;
    bottom: 0;
    content: " ";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`

const Image = styled(CoverImage)`
  background-image: url('static/img/who-cronulla.jpg');
  background-position: 50% 50%;

  @media (min-width: 1024px) {
    background-position: 50% 50%;
  }

  @media (min-width: 1280px) {
    background-position: 50% 50%;
  }

  @media (min-width: 1536px) {
    background-position: 30% 100%;
  }
`

const FlexMobileOrderFirst = styled(Flex)`
  margin-top: 0;
  margin-bottom: ${theme.space[4]}px;
  order: -1;

  @media (min-width: ${theme.containers.sm}) {
    margin: 0;
    order: initial;
  }
`



const Who = () => (
  <Layout>
    <Header />

    <Hero px={3}>
      <Image />
      <Container
        mw='lg'
        pt={[ 5, 6 ]}
        relative
        style={{ zIndex: 1 }}
      >
        <Box w={[ 1, 2/3 ]}>
          <Subheadline color='brandAlt'>About us</Subheadline>
          <Display color='brandAlt'>
            We believe in better&nbsp;
            <LineBreak>Strata management </LineBreak>
            <LineBreak>for Sydney.</LineBreak>
          </Display>
        </Box>
      </Container>
    </Hero>

    <Box px={3} pt={[ 5, 6 ]}>
      <Container>
        <Box width={[ 1, 11/12 ]} mx='auto'>

          <FlexMobileColumn retainCellOrder mx={-3}>
            <Flex column width={[ 1, 1/3, 1/4 ]} px={[ 4, 3 ]}>
              <Box mt={1}>
                <img src='static/img/mike-pollard.jpg' />
              </Box>
              <Text color='text70' mt={2}>Mike Pollard</Text>
              <Text color='text70'>Owner</Text>
            </Flex>

            <FlexMobileOrderFirst
              width={[ 1, 2/3, 3/4 ]}
              px={3}>
              <TextBlock>
                <Text>Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Text>
                <Text>Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Text>
                <Text>Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Text>
                <Text>Dolore ipsa qui rerum veniam exercitationem Facilis earum excepturi fugit ratione nam officia! Dicta quos mollitia aspernatur sapiente nostrum corrupti Veritatis rerum a quod consectetur rem eaque Non hic cum tenetur voluptatem laborum. Natus exercitationem id ipsum odit voluptates. Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Text>
                <Text>Eius asperiores facilis quasi veniam nihil laborum! Nihil suscipit accusantium facilis eum earum. Dolore ipsa qui rerum veniam exercitationem Facilis earum excepturi fugit ratione nam officia! Dicta quos mollitia aspernatur sapiente nostrum corrupti Veritatis rerum a quod consectetur rem eaque Non hic cum tenetur voluptatem laborum. Natus exercitationem id ipsum odit voluptates. Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Text>
              </TextBlock>
            </FlexMobileOrderFirst>
          </FlexMobileColumn>

        </Box>
      </Container>
    </Box>

    <Block textCenter>
      <ContactAction btnColor='brandAlt' withButton />
      <Contact />
    </Block>

    <Footer />
  </Layout>
);

export default Who;