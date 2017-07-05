import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';

import apollo from '../lib/apollo.js';
import { formatDateString } from '../lib/date.js';

import { Flex } from '../components/styled-grid'
import Layout from '../components/styled-elements/Layout.js';
import Container from '../components/styled-elements/Container.js';
import { Text } from '../components/styled-elements/Text.js';
import { Display, Subheadline } from '../components/styled-elements/Headline'

import Header from '../components/Shared/Header.js';
import Footer from '../components/Shared/Footer.js';
import Block from '../components/Shared/Block.js';
import Guides from '../components/Shared/Guides.js';
import ContactAction from '../components/Shared/ContactAction'
import Contact from '../components/Shared/Contact.js';


const Hero = styled.div`
  background-color: #F0FAFC;
`;

const PostInfo = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;

const PostImageWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  flex-basis: 0;
  padding: 0 2rem;
  text-align: center;

  img {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    margin: auto;
    max-width: 100%;
  }
`;


class Article extends React.Component {
  static async getInitialProps({ req, query }) {
    const postQuery = gql`{
      post(slug: "${query.slug}") {
        _id,
        slug,
        title,
        description,
        content {
          html,
        },
        createdAt,
      }
    }`;

    return await apollo.query({
      query: postQuery,
    });
  }

  render() {
    return (
      <Layout>
        <Header />

        <Hero>
          <Block>
            <Flex>
              <PostInfo>
                <Subheadline>{formatDateString(this.props.data.post.createdAt)}</Subheadline>

                <Display color='text'>{this.props.data.post.title}</Display>
                <Text fontSize={[ 3, 4 ]} grey>
                  {this.props.data.post.description}
                </Text>
              </PostInfo>

              <PostImageWrapper>
                <img src='http://lorempixel.com/400/300' />
              </PostImageWrapper>
            </Flex>
          </Block>
        </Hero>

        <Block>
          <Container mw='sm'>
            <div dangerouslySetInnerHTML={{ __html: this.props.data.post.content.html}} />
          </Container>
        </Block>

        <Block>
          <Container mw='sm' textCenter>
            <Subheadline>See all guides and articles</Subheadline>

            <Guides />
          </Container>
        </Block>

        <Block>
          <ContactAction btnColor='brand' withButton />
          <Contact />
        </Block>

        <Footer />
      </Layout>
    )
  }
}

export default Article;