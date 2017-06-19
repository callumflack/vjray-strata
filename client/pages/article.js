import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';

import apollo from '../lib/apollo.js';
import Layout from '../components/Layout.js';
import Block from '../components/shared/Block.js';
import Container from '../components/shared/Container.js';
import Guides from '../components/shared/Guides.js';
import Contact from '../components/shared/Contact.js';
import {
  HeaderHr,
  Text,
  Paragraph,
} from '../components/shared/Text.js';


const Hero = styled.div`
  background-color: #F0FAFC;
`;

const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`;

const PostTitle = styled.h1`
  margin-top: 1rem;
`;

const PostDescription = styled(Paragraph)`
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

  formatDateString(dateString) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date(dateString);
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }

  render() {
    return (
      <Layout>
        <Hero>
          <Block>
            <FlexContainer>
              <PostInfo>
                <HeaderHr>{this.formatDateString(this.props.data.post.createdAt)}</HeaderHr>

                <PostTitle>{this.props.data.post.title}</PostTitle>
                <Text transparent>
                  <PostDescription lg>
                    {this.props.data.post.description}
                  </PostDescription>
                </Text>
              </PostInfo>

              <PostImageWrapper>
                <img src='http://lorempixel.com/400/300' />
              </PostImageWrapper>
            </FlexContainer>
          </Block>
        </Hero>

        <Block>
          <Container sm>
            <div dangerouslySetInnerHTML={{ __html: this.props.data.post.content.html}} />
          </Container>
        </Block>

        <Block>
          <Container sm textCenter>
            <HeaderHr>See all guides and articles</HeaderHr>

            <Guides />
          </Container>
        </Block>

        <Block>
          <Container sm textCenter>
            <Contact />
          </Container>
        </Block>
      </Layout>
    )
  }
}

export default Article;
