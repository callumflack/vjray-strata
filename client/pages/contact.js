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
import { Text, SmallText, LargeText, LineBreak } from '../components/styled-elements/Text'
import Button from '../components/styled-elements/Button'

import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import ColorBox from '../components/Shared/ColorBox'
import HeroBox from '../components/Shared/HeroBox'
import FormContact from '../components/Shared/FormContact'
import FormIssue from '../components/Shared/FormIssue'
import { FormHeader } from '../components/Shared/Form.js'
import { Tabs, Pane } from '../components/Shared/Tabs.js'
import ContactActionAlt from '../components/Shared/ContactActionAlt'
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


class ContactPage extends React.Component {
  static async getInitialProps({ pathname }) {
    return {
      pathname,
    }
  }

  render() {
    const tabs = [{
      _id: 0,
      name: 'Quick response message',
      content: <FormContact />
    }, {
      _id: 1,
      name: 'Report an issue',
      content: <FormIssue />
    }];

    return (
      <Layout>
        <Header pathname={this.props.pathname} clear />

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
          <Display color='brand'>
            Visit us anytime.
          </Display>
          <LargeText color='text70' children='No appointment necessary.' />
          <Box mt={[ 3, 4 ]}>
            <Contact />
            <SmallText color='text70' mt={[ 3, 4 ]}>
              Looking for the Auburn office? They aren't affiliated with us.
              <LineBreak mx='auto'>
                You can find them&nbsp;
                <Link href='http://vjrayauburn.com.au/'>here.</Link>
              </LineBreak>
            </SmallText>
          </Box>
        </Block>

        <Block mw='sm' pb={[ 0, 0 ]}>
          <Container textCenter>
            <Display color='brandAlt' children='Write to us.' />
            <LargeText color='text70'>We'll respond quick smart.</LargeText>
          </Container>

          <Container mt={[3, 4]}>
            <Tabs>
              {tabs.map(tab =>
                <Pane label={tab.name} key={tab._id}>{tab.content}</Pane>)
              }
            </Tabs>
          </Container>
        </Block>

        <Block textCenter>
          <Display color='brand' children='Is it an emergency?' />
          <LargeText color='text70' mb={3}>For all types of after-hours repairs.</LargeText>
          <LargeButtonStyler>
            <Link href='/fast-quote'>
              <Button large icon bgColor='brand' children='Emergencies' />
            </Link>
          </LargeButtonStyler>
        </Block>

        <Block border>
          <ContactActionAlt btnColor='brandAlt' />
        </Block>

        <Footer />
      </Layout>
    )
  }
}

export default ContactPage;