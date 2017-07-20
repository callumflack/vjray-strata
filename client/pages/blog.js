import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';

import apollo from '../lib/apollo.js';
import { formatDateString } from '../lib/date.js';

import { Flex } from '../components/styled-grid'
import Layout from '../components/styled-elements/Layout.js';
import Container from '../components/styled-elements/Container.js';
import { Text, TextBlock, DangerouslyResetTextBlock } from '../components/styled-elements/Text.js';
import { Display, Subheadline } from '../components/styled-elements/Headline'

import theme from '../components/theme.js';
import Header from '../components/Shared/Header.js';
import Footer from '../components/Shared/Footer.js';
import ColorBox from '../components/Shared/ColorBox'
import Block from '../components/Shared/Block.js';
import Guides from '../components/Shared/Guides.js';
import ContactAction from '../components/Shared/ContactAction'
import Contact from '../components/Shared/Contact.js';


const StyledColorBox = styled(ColorBox)`
  background-color: ${theme.colors.offBlue};
  background-image: none;
`

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

        <StyledColorBox>
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
        </StyledColorBox>

        <Block>
          <Container mw='sm'>
            <TextBlock dangerouslySetInnerHTML={{ __html: this.props.data.post.content.html}} />
          </Container>
        </Block>

        <Block>
          <Container mw='sm' textCenter>
            <Subheadline children='See all guides and articles' />
            <Guides />
          </Container>
        </Block>

        <Block border>
          <ContactAction btnColor='brand' withButton />
          <Contact />
        </Block>

        <Footer />
      </Layout>
    )
  }
}

export default Article;