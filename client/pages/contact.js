import React from 'react'
import Link from 'next/link'

import gql from 'graphql-tag'
import apollo from '../lib/apollo'

import contactDetails from '../components/constants'

import theme from '../components/theme'
import styled, { css } from 'styled-components'
import { Flex, Box } from '../components/styled-grid'

import Layout from '../components/styled-elements/Layout'
import Container from '../components/styled-elements/Container'
import CoverImage from '../components/styled-elements/CoverImage'
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/styled-elements/Headline'
import { Text, LargeText, LineBreak } from '../components/styled-elements/Text'
import Button from '../components/styled-elements/Button'

import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import ColorBox from '../components/Shared/ColorBox'
import HeroBox from '../components/Shared/HeroBox'
import FullQuoteForm from '../components/Shared/FullQuoteForm'
import IssueForm from '../components/Shared/IssueForm'
import { FormHeader } from '../components/Shared/Form.js'
import { Tabs, Pane } from '../components/Shared/Tabs.js'
import ContactAction from '../components/Shared/ContactAction'
import Contact from '../components/Shared/Contact'
import LargeButtonStyler from '../components/Shared/LargeButtonStyler'

import ListeningBox from '../components/Home/ListeningBox'


const StyledColorBox = styled(ColorBox)`
  background-color: ${theme.colors.offBlue};
  background-image:
    linear-gradient(
      to bottom,
      rgba(210,235,246,0.5),
      ${theme.colors.offBlue} 40%
    );
`

const StyledHeroBox = styled(HeroBox)`
  --Hero-height: ${theme.blockHeights.hero};
  background-color: ${theme.colors.offBlue};
  background-color: transparent;
  background-image:
    linear-gradient(
      to bottom,
      rgba(0, 153, 209, 0.2),
      ${theme.colors.offBlue} 70%
      
    );  
`

const Image = styled(CoverImage)`
  background-image: url('static/img/contact-hero.png');
  background-position: 30% 100%;

  @media (min-width: 1024px) {
    background-position: 100% 100%;
  }

  @media (min-width: 1280px) {
    background-size: contain !important;
    background-position: 85% 100%;
  }

  @media (min-width: 1536px) {
    background-position: 66% 100%;
  }
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

        <StyledHeroBox px={3}>
          <Image />

          <Container mw='lg' relative>
            <Flex
              style={{ height: theme.blockHeights.hero }}
              align='center'
              >
              <Box width={[ 5/12, 1/2 ]} ml={[ null, 3 ]}>
                <Subheadline children='Get in touch' />
                <Display color='brand' font='displayRegular' children='How can we help?' />
                <LargeText color='text70'>Visit, call or write to us, <LineBreak>we're ready and waiting.</LineBreak></LargeText>
              </Box>
            </Flex>
          </Container>
        </StyledHeroBox>

        <Block textCenter pb={[ 0, 0 ]}>
          <Display color='brandAlt'>
            Walk in anytime, 
            <LineBreak mx='auto'>no appointments.</LineBreak>
          </Display>
          <LargeText color='text70'>Monday to Friday, 9am–5pm. <LineBreak mx='auto'>Saturdays, 9am–4pm.</LineBreak></LargeText>
          <Box mt={[ 3, 4 ]}>
            <Contact />
          </Box>
        </Block>

        <Block mw='sm'>
          <Container textCenter>
            <Display color='brand' children='Write to us.' />
            <LargeText color='text70'>
              Emergency? Call {contactDetails.phone} any time.
            </LargeText>
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
            <Display font='displayRegular' color='text' mb={3} ruled>
              Skip the hassle of&nbsp;
              <LineBreak m='auto' children='Strata management.' />
            </Display>
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