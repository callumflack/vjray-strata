import React from 'react';
import Link from 'next/link'

import gql from 'graphql-tag';
import apollo from '../lib/apollo.js';
import { formatDateString } from '../lib/date.js';

import styled from 'styled-components';
import { Box, Flex } from '../components/styled-grid'

import Layout from '../components/styled-elements/Layout.js';
import Container from '../components/styled-elements/Container.js';
import { Text, TextBlock, DangerouslyResetTextBlock } from '../components/styled-elements/Text.js';
import { Display, Subheadline } from '../components/styled-elements/Headline'
import Button from '../components/styled-elements/Button'

import theme from '../components/theme.js';
import Header from '../components/Shared/Header.js';
import Footer from '../components/Shared/Footer.js';
import Block from '../components/Shared/Block.js';
import Guides from '../components/Shared/Guides.js';
import ContactAction from '../components/Shared/ContactAction'
import Contacts from '../components/Shared/Contacts.js';
import LargeButtonStyler from '../components/Shared/LargeButtonStyler'
import { HeroFrame } from '../components/Shared/Hero'


// block y spacings:
// pt={[ 4, 4, 5, 5, 6 ]}
// pb={[ 4, 4, 5, 5, 6 ]}

const Root = props => (
  <Layout>
    <Header pathname='/useful-info' clear color='brandAlt' />

    <HeroFrame>
      <Box pt={[ 3, 4, 4, 5, 5 ]}>
        <Container mw='sm'>
          <Subheadline color='brandAlt'>{formatDateString(props.data.post.createdAt)}</Subheadline>
          <Display color='brandAlt'>{props.data.post.title}</Display>
          <Text fontSize={[ 3, 4 ]} color='brandAlt70'>{props.data.post.description}</Text>
        </Container>

        <Container mobileBleed mw='rg' py={[ 3, 3, 4 ]} mb={[ 0, 1 ]}>
          <img src={props.data.post.featureImage.secure_url} />
        </Container>

      </Box>
    </HeroFrame>

    <Block mw='sm' pt={[0]}>
      <TextBlock dangerouslySetInnerHTML={{ __html: props.data.post.content.html}} />
    </Block>

    <Block
      mw='sm'
      pt={[ 0, 0 ]}
      textCenter
    >
      <Subheadline children='guides and articles' />
      <Display color='text' font='displayRegular' mb={3} children='All the Strata Management info that matters' />
      <LargeButtonStyler>
        <Link href='/useful-info'>
          <Button large icon bgColor='brand' children='useful info' />
        </Link>
      </LargeButtonStyler>
    </Block>

    <Block border>
      <ContactAction btnColor='brandAlt' withButton />
      <Contacts />
    </Block>

    <Footer />
  </Layout>
)


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
        featureImage {
          secure_url,
        },
        createdAt,
      }
    }`;

    return await apollo.query({
      query: postQuery,
    });
  }

  render() {
    return <Root {...this.props} />
  }
}

export default Article;