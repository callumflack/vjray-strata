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
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/styled-elements/Headline'
import { Text, SmallText, LargeText, LineBreak, LineBreakAll } from '../components/styled-elements/Text'
import Button from '../components/styled-elements/Button'

import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import FormContact from '../components/Shared/FormContact'
import FormIssue from '../components/Shared/FormIssue'
import { FormHeader } from '../components/Shared/Form.js'
import { Tabs, Pane } from '../components/Shared/Tabs.js'
import ContactAction from '../components/Shared/ContactAction'
import Contact from '../components/Shared/Contact'
import LargeButtonStyler from '../components/Shared/LargeButtonStyler'
import { HeroBox, HeroContainer, HeroFlex } from '../components/Shared/Hero'


const StyledHeroBox = styled(HeroBox)`
  background-image:
    linear-gradient(
      to bottom,
      rgba(222, 202, 178, 0.4),
      ${theme.colors.beige} 70%
    );
`

const Image = styled(CoverImage)`
  background-image: url('static/img/emergency-hero.png');
  background-position-x: 38%;
  @media (min-width: 768px) { background-position-x: 30%; }
  @media (min-width: 1024px) { background-position-x: 30%; }
  @media (min-width: 1280px) { background-position-x: 85%; background-size: contain !important; }
  @media (min-width: 1536px) { background-position-x: 66%; }
  @media (min-width: 1800px) { background-position-x: 60%; }
`

const Hero = props => (
  <StyledHeroBox>
    <Image />
    <HeroContainer mw='lg'>
      <HeroFlex>
        <Box width={1} ml={[ null, 3 ]} mb={4}>
          <Subheadline children='Emergencies' />
          <Display color='brand' font='displayRegular' mb={2}>It happens. <LineBreakAll>We're prepared.</LineBreakAll></Display>
          <LargeText>At V J Ray Strata, <LineBreakAll>we'll sort it for you.</LineBreakAll></LargeText>
        </Box>
      </HeroFlex>
    </HeroContainer>
  </StyledHeroBox>
)

const Emergency = (props) => (
  <Layout>
    <Header pathname='/contact' clear />
    <Hero />

    <Block mw='sm'>
      <Box width={[ 1, 9/12, 9/12, 1 ]} mx='auto'>

        <LargeText font='displayRegular' mb={1} children='Is it due to a natural disaster?' />
        <Text mb={4} color='text70'>In the case of a natural disaster such as a major storm or flood, please contact the NSW State Emergency Service on 132 500.</Text>

        <LargeText font='displayRegular' mb={1} children='Is it a rental property?' />
        <Text mb={4} color='text70'>
          If your repair relates to a property that you are renting through one of our offices, please go to the&nbsp;
          <Link href="http://www.vjray.com.au/"><a>V J Ray Group website</a></Link>.
        </Text>

        <LargeText font='displayRegular' mb={1} children='Is it a non-urgent issue?' />
        <Text color='text70'>
          For non-urgent repairs please report the issue with as much detail as possible.
        </Text>
        <LargeButtonStyler color='white' align='left' mt={2} mb={4}>
          <Link href='/contact?form=report#contact-forms'>
            <Button icon color='brand' bgColor='transparent' children='Report an issue' />
          </Link>
        </LargeButtonStyler>

        <LargeText font='displayRegular' mb={1} children='Is it within business hours?' />
        <Text color='text70' mb={2}>
          If your repair is urgent and the time is currently office hours, please contact us by calling {contactDetails.emergencyBusinessHours}.
        </Text>
        <Text color='text70' mb={4}>
          Please don't rely on an email for an urgent repair as your strata manager may not see the email in time to contact the relevant repairer.
        </Text>

        <LargeText font='displayRegular' mb={1} children='Is it after-hours?' />
        <Text color='text70'>Remember, our business hours include Saturdays until 4pm (2pm at our Carringbah office). For after-hours emergency repairs only, contact our director Mike Pollard on {contactDetails.emergencyAfterHours}. Note that additional charges will apply.</Text>
        <LargeButtonStyler color='white' align='left' mt={2}>
          <Link href='tel:{contactDetails.emergencyAfterHours}'>
            <Button icon color='brand' bgColor='transparent' children='Call after-hours' />
          </Link>
        </LargeButtonStyler>

      </Box>
    </Block>

    <Block border textCenter>
      <ContactAction btnColor='brandAlt' />
      <Contact mt={[ 3, 4 ]} />
    </Block>

    <Footer />
  </Layout>
)

export default Emergency