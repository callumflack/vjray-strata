import React from 'react'
import Link from 'next/link'

import gql from 'graphql-tag'
import apollo from '../lib/apollo'

import { contactDetails } from '../components/constants'

import theme from '../components/theme'
import styled, { css } from 'styled-components'
import { Flex, Box } from '../components/styled-grid'

import Layout from '../components/styled-elements/Layout'
import Container from '../components/styled-elements/Container'
import CoverImage from '../components/styled-elements/CoverImage'
import { Display, Headline, Subheadline, MobileSubheadline, HeadlineMeta } from '../components/styled-elements/Headline'
import { Text, SmallText, LargeText, LineBreak } from '../components/styled-elements/Text'
import Button from '../components/styled-elements/Button'

import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import { HeroBox, HeroContainer, HeroFlex } from '../components/Shared/Hero'
import FormContact from '../components/Shared/FormContact'
import FormIssue from '../components/Shared/FormIssue'
import { FormHeader } from '../components/Shared/Form.js'
import { Tabs, Pane } from '../components/Shared/Tabs.js'
import ContactActionAlt from '../components/Shared/ContactActionAlt'
import Contacts from '../components/Shared/Contacts'
import LargeButtonStyler from '../components/Shared/LargeButtonStyler'



const StyledHeroBox = styled(HeroBox)`
  background-image:
    linear-gradient(
      to bottom,
      rgba(0, 153, 209, 0.2),
      ${theme.colors.offBlue} 70%
    );
  background-image: initial;
  background-color: #d7e5eb;
  background-color: #eaf3f7;

  &:after {
    background-color: rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 153, 209, 0.96);
    background-color: rgba(64, 64, 112, 0.1);
    background-blend-mode: multiply;
    bottom: 0;
    content: " ";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`

const Image = styled(CoverImage)`
  background-image: url('static/img/contact-hero.png');
  background-position-x: 20%;
  @media (min-width: 1024px) { background-position-x: 20%; }
  @media (min-width: 1280px) { background-position-x: -50%; }
  @media (min-width: 1536px) { background-position-x: 110%; }
  @media (min-width: 1800px) { background-position-x: 60%; }

  @media (min-width: 1536px) { background-size: contain !important; }
`

const Hero = props => (
  <StyledHeroBox>
    <Image />
    <HeroContainer mw='rg'>
      <HeroFlex>
        <Box width={[ 7/12, 5/12, 1/2 ]} ml={[ null, 3 ]} mb={4}>
          <MobileSubheadline color='brandAlt' children='Contact us' />
          <Display color='brandAlt' mb={2} children='How can we help?' />
          <LargeText color='text'>Visit, call or write to us. <LineBreak>We're ready and waiting.</LineBreak></LargeText>
        </Box>
      </HeroFlex>
    </HeroContainer>
  </StyledHeroBox>
)



class ContactPage extends React.Component {
  static async getInitialProps({ pathname, query }) {
    return {
      pathname,
      defaultForm: query.form,
    }
  }

  render() {
    const tabs = [{
      _id: 0,
      name: 'Quick response',
      content: <FormContact />
    }, {
      _id: 1,
      name: 'Report an issue',
      content: <FormIssue />
    }];

    return (
      <Layout>
        <Header pathname={this.props.pathname} clear color='brandAlt' />
        <Hero />

        <Block textCenter pb={[ 0, 0 ]}>
          <Display color='brand' mb={1}>
            Visit us anytime.
          </Display>
          <LargeText color='text70' children='No appointment necessary.' />
          <Box mt={[ 3, 4 ]}>
            <Contacts />
            <SmallText color='text70' mt={[ 3, 4 ]}>
              Looking for the Auburn office? They aren't affiliated with us.
              <LineBreak mx='auto'>
                You can find them&nbsp;
                <Link href='http://vjrayauburn.com.au/'>here.</Link>
              </LineBreak>
            </SmallText>
          </Box>
        </Block>

        <Block id='contact-forms' mw='sm' pb={[ 0, 0 ]}>
          <Container textCenter>
            <Display color='brandAlt' mb={1} children='Write to us.' />
            <LargeText color='text70'>We'll respond quick smart.</LargeText>
          </Container>

          <Container mt={[3, 4]}>
            <Tabs selected={this.props.defaultForm === 'report' ? 1 : 0}>
              {tabs.map(tab =>
                <Pane label={tab.name} key={tab._id}>{tab.content}</Pane>)
              }
            </Tabs>
          </Container>
        </Block>

        <Block textCenter>
          <Display color='brand' mb={1} children='Is it an emergency?' />
          <LargeText color='text70' mb={3}>For all types of after-hours repairs.</LargeText>
          <LargeButtonStyler>
            <Link href='/emergency'>
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

// class ContactPage extends React.Component {
//   static async getInitialProps({ pathname, query }) {
//     return {
//       pathname,
//       defaultForm: query.form,
//     }
//   }
//
//   render() {
//     const tabs = [{
//       _id: 0,
//       name: 'Quick response message',
//       content: <FormContact />
//     }, {
//       _id: 1,
//       name: 'Report an issue',
//       content: <FormIssue />
//     }];
//
//     return <Root pathname={this.props.pathname} />
//   }
// }

export default ContactPage