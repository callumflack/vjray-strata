import React from 'react'
import styled, { css } from 'styled-components'
import gql from 'graphql-tag'
import apollo from '../lib/apollo'

import theme from '../components/theme'
import { Flex, Box } from '../components/styled-grid'

import Layout from '../components/shared/Layout'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Block from '../components/shared/Block'
import Container from '../components/shared/Container'
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/shared/Headline'
import { Text, LargeText, LineBreak } from '../components/shared/Text'
import Button from '../components/shared/Button'

import ColorBox from '../components/shared/ColorBox'
import FullQuoteForm from '../components/shared/FullQuoteForm'
import IssueForm from '../components/shared/IssueForm'
import { FormHeader } from '../components/shared/Form.js'
import { Tabs, Pane } from '../components/shared/Tabs.js'
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
    const tabs = [{
      name: 'Report an issue',
      content: <IssueForm />
    }, {
      name: 'Quick response message',
      content: <FullQuoteForm />
    }];

    return (
      <Layout>
        <Header />

        <StyledColorBox py={[ 5, 6 ]} px={3}>
          <Container mw='sm' mt={[ 4, 5, 6 ]} mb={4} textCenter>
            <Subheadline children='Get in touch' />
            <Display color='brandAlt' font='displayMedium' children='How can we help?' />
            <LargeText color='brandAlt70'>Talk to us face-to-face anytime <LineBreak m='auto'>Monday to Saturday, 9am–5pm.</LineBreak></LargeText>
          </Container>

          <Container>
            <Contact />
          </Container>
        </StyledColorBox>

        <Block mw='sm'>
          <Container textCenter>
            <Subheadline children='Contact us' />
            <Display color='brand' children='Write to us' />
            <Text color='text70' children='For emergencies, call 1300 073 123 any time.' />
          </Container>

          <Container mt={[3, 4]}>
            <Tabs selected={0}>
              {tabs.map(tab =>
                <Pane label={tab.name}>{tab.content}</Pane>)
              }
            </Tabs>
          </Container>
        </Block>

        <Box px={3} pb={[ 5, 6 ]}>
          <Container mw='sm' textCenter>
            <Display ruled color='text70'>Skip the hassle of<LineBreak m='auto'>Strata management.</LineBreak></Display>
            <HeadlineMeta color='white' mb={3}>
              <Button large icon bgColor='brandAlt'>Get a fast quote</Button>
            </HeadlineMeta>
          </Container>
        </Box>

        <Footer />
      </Layout>
    )
  }
}

export default ContactUs;