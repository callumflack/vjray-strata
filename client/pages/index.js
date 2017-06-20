import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';

import apollo from '../lib/apollo.js';

import theme from '../css/theme.js';
import Layout from '../components/Layout.js';
import Block from '../components/shared/Block.js';
import Container from '../components/shared/Container.js';
import Section from '../components/Home/Section.js';
import Button from '../components/shared/Button.js';
import Hero from '../components/Home/Hero.js';
import FeatureList from '../components/Home/FeatureList.js';
import Testimonials from '../components/Home/Testimonials.js';
import Guides from '../components/shared/Guides.js';
import RecentPosts from '../components/shared/RecentPosts.js';
import Contact from '../components/shared/Contact.js';
import {
  HeaderHr,
  Text,
  Paragraph,
  Uppercase,
} from '../components/shared/Text.js';

const SectionImg = styled.img`
  display: block;
  margin: 4rem auto 0;
`;

const QuoteAuthor = (props) => (
  <Uppercase><small>{props.children}</small></Uppercase>
);

const query = gql`{
  posts(limit: 1) {
    _id,
    slug,
    title,
    description,
  }
}`;

class Index extends React.Component {
  static async getInitialProps({ req }) {
    return await apollo.query({
      query,
    });
  }

  render() {
    return (
      <Layout>
        <Hero />

        <Block>
          <Container sm textCenter>
            <h2><strong>It all adds up to a better deal.</strong></h2>

            <Paragraph lg transparent>"VJ Ray made everything easier. We all know our block is looked after, and friendly neighbours are far more easier to live with." - <QuoteAuthor>Jessica, Campsie</QuoteAuthor></Paragraph>
          </Container>

          <Container textCenter>
            <FeatureList />
          </Container>
        </Block>

        <Section color={theme.colors.brand}>
          <HeaderHr>Dependable and effective</HeaderHr>
          <h1>We help make high-density Sydney living great.</h1>
          <p>This paragraph is about VJ Ray's history in Sydney, how they love Sydney and want to see it progress upwards and stave off housing uncertainty and more pain points that hit customer in the guts.</p>

          <Button bordered icon>Watch video</Button>
        </Section>

        <Section sectionImg>
          <HeaderHr>Fast. Easy. Done.</HeaderHr>
          <h1>Do it all, online.</h1>
          <p>We're a team of licensed real estate professionals with an exclusive focus on strata management in Sydney and local market experts - and we're here to help make youre living stress-free.</p>

          <Paragraph brand>
            <Button bordered>Sign up</Button>
          </Paragraph>

          <SectionImg src='http://lorempixel.com/400/600' />
        </Section>

        <Block>
          <Container sm textCenter>
            <h2><strong>Our duty is your satisfaction.</strong></h2>

            <Paragraph lg brand>"VJ Ray made everything easier. We all know our block is looked after, and friendly neighbours are far more easier to live with." - <QuoteAuthor>Jessica, Campsie</QuoteAuthor></Paragraph>
          </Container>

          <Container textCenter>
            <Testimonials />
          </Container>
        </Block>

        <Section>
          <HeaderHr>Info on the go</HeaderHr>
          <h1><Text brand>Your guides to Sydney Strata.</Text></h1>
          <p>Ipsum odit corrupti ullam in nam expedita corporis Magnam nemo corrupti suscipit recusandae voluptatem. Non aspernatur sed vero ipsam ut.</p>

          <Guides />
        </Section>

        <Section>
          <RecentPosts posts={this.props.data.posts} />
        </Section>

        <Section>
          <Contact />
        </Section>
      </Layout>
    )
  }
}

export default Index;