import React from 'react';
import styled from 'styled-components';

import theme from '../css/theme.js';
import { initClient, getClient } from '../services/contentfulClient';
import Layout from '../components/Layout.js';
import Block from '../components/shared/Block.js';
import Container from '../components/shared/Container.js';
import Section from '../components/Home/Section.js';
import Anchor from '../components/shared/Anchor.js';
import Hero from '../components/Home/Hero.js';
import FeatureList from '../components/Home/FeatureList.js';
import Testimonials from '../components/Home/Testimonials.js';
import Guides from '../components/Home/Guides.js';
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

class Index extends React.Component {
  static async getInitialProps() {
    const space = await initClient('h12qkyh9prdx', 'a6896c50a7491bac6d5f4c8b85858bdc063bfd3ebef2e8d89929c6f28d0a31ec');
    const client = getClient();
    const content = await getClient().getEntries({ content_type: 'page' });
    const home = await client.getEntries({
      content_type: 'page',
      'fields.name[match]': 'Home'
    });

    return {
      content,
      home,
      sections: home.items[0].fields.sections,
    };
  }

  constructor(props) {
    super(props);
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

          <Anchor bordered>Watch video</Anchor>
        </Section>

        <Section sectionImg>
          <HeaderHr>Fast. Easy. Done.</HeaderHr>
          <h1>Do it all, online.</h1>
          <p>We're a team of licensed real estate professionals with an exclusive focus on strata management in Sydney and local market experts - and we're here to help make youre living stress-free.</p>

          <Paragraph brand>
            <Anchor bordered>Sign up</Anchor>
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
          <RecentPosts />
        </Section>

        <Section>
          <Contact />
        </Section>
      </Layout>
    )
  }
}

export default Index;
