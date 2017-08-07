import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';

import apollo from '../lib/apollo.js';
import { formatDateString } from '../lib/date.js';

import { Box, Flex } from '../components/styled-grid'
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
            <Flex mx={-3}>
              <Box width={1/2} mx={3}>
                <Subheadline color='brandAlt'>{formatDateString(this.props.data.post.createdAt)}</Subheadline>
                <Display color='brandAlt'>{this.props.data.post.title}</Display>
                <Text fontSize={[ 3, 4 ]} color='brandAlt70'>
                  {this.props.data.post.description}
                </Text>
              </Box>

              <Flex width={1/2} mx={3} align='center'>
                <img src={this.props.data.post.featureImage} />
                <img src='https://ia.net/wp-content/uploads/migration/A-B-C-12-13-14-3@2x.png' />
              </Flex>
            </Flex>
          </Block>
        </StyledColorBox>

        <Block>
          <Container mw='sm'>
            <TextBlock dangerouslySetInnerHTML={{ __html: this.props.data.post.content.html}} />
          </Container>
        </Block>

        <Block pt={[ 0, 0 ]}>
          <Container mw='sm' textCenter>
            <Subheadline mb={4} children='See all guides and articles' />
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