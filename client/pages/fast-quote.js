import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';

import apollo from '../lib/apollo.js';
import Layout from '../components/Layout.js';
import Block from '../components/shared/Block.js';
import Container from '../components/shared/Container.js';
import FullQuoteForm from '../components/shared/FullQuoteForm.js';
import Contact from '../components/shared/Contact.js';
import Headline from '../components/shared/Headline.js';
import {
  HeaderHr,
  Paragraph,
} from '../components/shared/Text.js';



class FastQuote extends React.Component {
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
        <Block>
          <Container textCenter>
            <HeaderHr>Confidential & no obligation</HeaderHr>

            <Headline>Get a fast quote.</Headline>
            <Paragraph>
              Forms not your thing?  Call us on 1300 073 or drop in Monday to Saturday, 9am-5pm.
            </Paragraph>
          </Container>

          <Container sm>
            <FullQuoteForm />
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

export default FastQuote;
