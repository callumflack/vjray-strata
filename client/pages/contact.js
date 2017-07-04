import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import apollo from '../lib/apollo'

import theme from '../components/theme'
import { Box } from '../components/styled-grid'
import Layout from '../components/shared/Layout'
import Block from '../components/shared/Block'
import Container from '../components/shared/Container'
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/shared/Headline'
import { Text, LargeText, LineBreak } from '../components/shared/Text'
import Button from '../components/shared/Button'

import ColorBox from '../components/shared/ColorBox'
import FullQuoteForm from '../components/shared/FullQuoteForm'
import ContactAction from '../components/shared/ContactAction'
import Contact from '../components/shared/Contact'


const StyledColorBox = styled(ColorBox)`
  background-color: ${theme.colors.blue6};
  background-image:
    linear-gradient(
      to bottom,
      rgba(210,235,246,0.5),
      ${theme.colors.blue6} 40%
    );
`

class ContactUs extends React.Component {
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
        <StyledColorBox py={[ 5, 6 ]} px={3}>
          <Container mw='sm' textCenter mb={4}>
            <Subheadline children='Get in touch' />
            <Display color='brandAlt' font='displayMedium' children='How can we help?' />
            <LargeText color='brandAlt70'>Talk to us face-to-face anytime <LineBreak m='auto'>Monday to Saturday, 9am–5pm.</LineBreak></LargeText>
          </Container>

          <Container>
            <Contact />
          </Container>
        </StyledColorBox>

        <Block mw='sm' textCenter>
          <Subheadline children='Contact us' />
          <Display color='brand' children='Write to us' />
          <Text color='text70' children='For emergencies, call 1300 073 123 any time.' />
          <FullQuoteForm />
        </Block>

        <Box px={3} pb={[ 5, 6 ]}>
          <Container mw='sm' textCenter>
            <Display ruled color='text70'>Skip the hassle of<LineBreak m='auto'>Strata management.</LineBreak></Display>
            <HeadlineMeta color='white' mb={3}>
              <Button large icon bgColor='brandAlt'>Get a fast quote</Button>
            </HeadlineMeta>
          </Container>
        </Box>

      </Layout>
    )
  }
}

export default ContactUs;