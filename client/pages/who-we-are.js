import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';

import apollo from '../lib/apollo.js';
import Layout from '../components/Layout.js';
import Block from '../components/shared/Block.js';
import Container from '../components/shared/Container.js';
import Contact from '../components/shared/Contact.js';
import {
  HeaderHr,
  Text,
  Paragraph,
} from '../components/shared/Text.js';


const Hero = styled.div`
  background: #4F90C8;
  color: #fff;
  min-height: 70vh;
`;

const HeroHeader = styled.h1`
  margin-top: 1rem;
`;

const About = styled.div`
  display: flex;
`;

const Person = styled.div`
  width: 300px;
  margin-right: 3.5rem;
  float: left;

  img {
    max-width: 100%;
    margin-bottom: 1rem;
  }
`;

const AboutText = styled.div`
  > *:first-child {
    margin-top: 0;
  }
`;


const Who = () => (
  <Layout>
    <Hero>
      <Block>
        <Container sm textCenter>
          <HeaderHr>About us</HeaderHr>

          <HeroHeader>We believe in better Sydney Strata management.</HeroHeader>
        </Container>
      </Block>
    </Hero>

    <Block>
      <Container>
        <About>
          <Person>
            <img src='http://lorempixel.com/300/300' />

            <Text transparent>
              <div>Mike Pollard</div>
              <div>Owner</div>
            </Text>
          </Person>

          <AboutText>
            <Paragraph>Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Paragraph>
            <Paragraph>Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Paragraph>
            <Paragraph>Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Paragraph>
            <Paragraph>Dolore ipsa qui rerum veniam exercitationem Facilis earum excepturi fugit ratione nam officia! Dicta quos mollitia aspernatur sapiente nostrum corrupti Veritatis rerum a quod consectetur rem eaque Non hic cum tenetur voluptatem laborum. Natus exercitationem id ipsum odit voluptates. Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Paragraph>
            <Paragraph>Eius asperiores facilis quasi veniam nihil laborum! Nihil suscipit accusantium facilis eum earum. Dolore ipsa qui rerum veniam exercitationem Facilis earum excepturi fugit ratione nam officia! Dicta quos mollitia aspernatur sapiente nostrum corrupti Veritatis rerum a quod consectetur rem eaque Non hic cum tenetur voluptatem laborum. Natus exercitationem id ipsum odit voluptates. Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Paragraph>
          </AboutText>
        </About>
      </Container>
    </Block>

    <Block>
      <Container sm textCenter>
        <Contact />
      </Container>
    </Block>
  </Layout>
);

export default Who;
