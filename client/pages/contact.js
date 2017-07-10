import React from 'react'
import Link from 'next/link'

import gql from 'graphql-tag'
import apollo from '../lib/apollo'

import theme from '../components/theme'
import styled, { css } from 'styled-components'
import { Flex, Box } from '../components/styled-grid'

import Layout from '../components/styled-elements/Layout'
import Container from '../components/styled-elements/Container'
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/styled-elements/Headline'
import { Text, LargeText, LineBreak } from '../components/styled-elements/Text'
import Button from '../components/styled-elements/Button'

import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import ColorBox from '../components/Shared/ColorBox'
import FullQuoteForm from '../components/Shared/FullQuoteForm'
import IssueForm from '../components/Shared/IssueForm'
import { FormHeader } from '../components/Shared/Form.js'
import { Tabs, Pane } from '../components/Shared/Tabs.js'
import ContactAction from '../components/Shared/ContactAction'
import Contact from '../components/Shared/Contact'
import LargeButtonStyler from '../components/Shared/LargeButtonStyler'


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
      name: 'Quick response message',
      content: <FullQuoteForm />
    }, {
      name: 'Report an issue',
      content: <IssueForm />
    }];

    return (
      <Layout>
        <Header clear />

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
            <Display color='brand' children='Write to us.' />
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
            <Headline font='displayRegular' color='text70' mb={3} ruled>
              Skip the hassle of&nbsp;
              <LineBreak m='auto' children='Strata management.' />
            </Headline>
            <LargeButtonStyler>
              <Link href='/fast-quote'>
                <Button large icon bgColor='brandAlt' children='Get a fast quote' />
              </Link>
            </LargeButtonStyler>
          </Container>
        </Box>

        <Footer />
      </Layout>
    )
  }
}

export default ContactUs;