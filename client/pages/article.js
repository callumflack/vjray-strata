import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Flex } from '../components/styled-grid'

import apollo from '../lib/apollo.js';
import { formatDateString } from '../lib/date.js';
import Layout from '../components/shared/Layout.js';
import Block from '../components/shared/Block.js';
import Container from '../components/shared/Container.js';
import Guides from '../components/shared/Guides.js';
import ContactAction from '../components/shared/ContactAction'
import Contact from '../components/shared/Contact.js';
import { Text } from '../components/shared/Text.js';
import { Display, Subheadline } from '../components/shared/Headline'


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
          <ContactAction btnColor='brand' />
          <Contact />
        </Block>
      </Layout>
    )
  }
}

export default Article;
