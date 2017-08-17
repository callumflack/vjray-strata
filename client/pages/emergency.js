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
import { Text, SmallText, LargeText, LineBreak } from '../components/styled-elements/Text'
import Button from '../components/styled-elements/Button'

import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import HeroBox from '../components/Shared/HeroBox'
import FormContact from '../components/Shared/FormContact'
import FormIssue from '../components/Shared/FormIssue'
import { FormHeader } from '../components/Shared/Form.js'
import { Tabs, Pane } from '../components/Shared/Tabs.js'
import ContactAction from '../components/Shared/ContactAction'
import Contact from '../components/Shared/Contact'
import LargeButtonStyler from '../components/Shared/LargeButtonStyler'



const StyledHeroBox = styled(HeroBox)`
  --Hero-height: ${theme.blockHeights.hero};
  background-color: ${theme.colors.offBlue};
  background-color: transparent;
  background-image:
    linear-gradient(
      to bottom,
      rgba(222, 202, 178, 0.4),
      ${theme.colors.beige} 70%
    );
`

const Image = styled(CoverImage)`
  background-image: url('static/img/emergency-hero.png');
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
`//`

const words = [{
  headline: 'Is it due to a natural disaster?',
  text: 'In the case of a natural disaster such as a major storm or flood etc please contact the NSW State Emergency Service on 132 500.',
}, {
  headline: 'Is it a rental property?',
  text: 'If your repair relates to a property that you are renting through one of our offices please go to the V J Ray Group website.'
}, {
  headline: 'Is it within business hours?',
  text: 'Please contact us by telephone on 9784 7900 if your repair is urgent and during office hours. Please don\'t rely on an email for an urgent repair as your strata manager may not see the email in time to contact the relevant repairer.',
}, {
  headline: 'Is it after hours?',
  text: 'For after hours emergency repairs only contact our director Mike Pollard on 0418 245 545. Note that additional charges will apply for after hour repairs.',
}, {
  headline: 'Is it really urgent?',
  text: 'For non-urgent repairs please use the form below and provide us as much detail as possible about your repair request.',
}]



const Emergency = (props) => (
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
            <Subheadline children='Emergencies' />
            <Display color='brand' font='displayRegular'>It happens.<LineBreak>We're prepared.</LineBreak></Display>
            <LargeText color='text70'>At V J Ray Strata,<LineBreak>we'll sort it for you.</LineBreak></LargeText>
          </Box>
        </Flex>
      </Container>
    </StyledHeroBox>

    <Box py={[ 4, 5, 6 ]} px={3}>
      <Container mw='sm' mx={-3}>
        <Box width={[ 9/12, 1 ]} mx='auto'>
          <LargeText font='displayRegular' mb={1} children='Is it due to a natural disaster?' />
          <Text mb={4} color='text70'>In the case of a natural disaster such as a major storm or flood, please contact the NSW State Emergency Service on 132 500.</Text>

          <LargeText font='displayRegular' mb={1} children='Is it a rental property?' />
          <Text mb={4} color='text70'>
            If your repair relates to a property that you are renting through one of our offices, please go to the&nbsp;
            <Link href="http://www.vjray.com.au/"><a>V J Ray Group website</a></Link>.
          </Text>

          <LargeText font='displayRegular' mb={1} children='Is it a non-urgent issue?' />
          <Text color='text70' mb={4}>
            For non-urgent repairs please&nbsp;
            <Link href='/contact?form=report#contact-forms'>
              <a>report the issue</a>
            </Link>
            . Please provide us as much detail as possible.
          </Text>

          <LargeText font='displayRegular' mb={1} children='Is it within business hours?' />
          <Text color='text70' mb={4}>
            If your repair is urgent and the time is currently office hours, please contact us by calling&nbsp;
            {contactDetails.emergencyBusinessHours}.
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
      </Container>
    </Box>

    <Block border textCenter>
      <ContactAction btnColor='brandAlt' withButton />
      <Contact mt={[ 3, 4 ]} />
    </Block>

    <Footer />
  </Layout>
)

export default Emergency