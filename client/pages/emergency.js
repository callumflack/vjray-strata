import React from 'react'
import Link from 'next/link'

import gql from 'graphql-tag'
import apollo from '../lib/apollo'

import { contactDetails } from '../components/constants'

import theme from '../components/theme'
import styled, { css } from 'styled-components'
import { Flex, Box } from '../components/styled-grid'

import Layout from '../components/Shared/Layout'
import Container from '../components/Shared/Container'
import CoverImage from '../components/Shared/CoverImage'
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/Shared/Headline'
import { Text, SmallText, LargeText, LineBreak, LineBreakAll } from '../components/Shared/Text'
import Button from '../components/Shared/Button'

import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import HeroEmergency from '../components/Shared/HeroEmergency'
import Block from '../components/Shared/Block'
import FormContact from '../components/Shared/FormContact'
import FormIssue from '../components/Shared/FormIssue'
import { FormHeader } from '../components/Shared/Form.js'
import { Tabs, Pane } from '../components/Shared/Tabs.js'
import ContactAction from '../components/Shared/ContactAction'
import Contacts from '../components/Shared/Contacts'
import LargeButtonStyler from '../components/Shared/LargeButtonStyler'
import ResponsiveToggle from '../components/Shared/ResponsiveToggle'


const Emergency = (props) => (
  <Layout>
    <Header pathname='/contact' clear />

    <HeroEmergency />

    <Block mw='sm'>

      <LargeText font='displayMedium' mb={1} children='Is it due to a natural disaster?' />
      <Text mb={4} color='text70'>
        In the case of a natural disaster such as a major storm or flood, please contact the NSW State Emergency Service on <Link href="tel:132-500"><a>132 500</a></Link>.
      </Text>

      <LargeText font='displayMedium' mb={1} children='Is it a rental property?' />
      <Text mb={2} color='text70'>
        If your repair relates to a property that you are renting through one of our offices, please go to the <Link href="http://www.vjray.com.au/"><a>VJ Ray Group website</a></Link>.
      </Text>
      <Text mb={4} color='text70'>
        If you are renting your property through another agent, other than VJ Ray you should report the problem directly to your rental agent.
      </Text>

      <LargeText font='displayMedium' mb={1} children='Is it a non-urgent issue?' />
      <Text color='text70'>
        For non-urgent repairs please report the issue with the following link:
      </Text>
      <LargeButtonStyler color='white' align='left' mt={2} mb={4}>
        <Link href='/contact?form=report#contact-forms'>
          <Button icon color='brand' bgColor='transparent' children='Report an issue' />
        </Link>
      </LargeButtonStyler>

      <LargeText font='displayMedium' mb={1} children='Is it within business hours?' />
      <Text color='text70' mb={2}>
        If your repair is urgent and the time is currently office hours, please contact us by calling <Link href={'tel:' + contactDetails.emergencyBusinessHours}><a>{contactDetails.emergencyBusinessHours}</a></Link>.
      </Text>
      <Text color='text70' mb={4}>
        Please don't rely on an email for an urgent repair as your strata manager may not see the email in time to contact the relevant repairer.
      </Text>

      <LargeText font='displayMedium' mb={1} children='Is it after-hours?' />
      <Text color='text70'>
        Remember, our business hours include Saturdays until 4pm (2pm at our Carringbah office). For after-hours emergency repairs only, contact our director Mike Pollard on <Link href={'tel:' + contactDetails.emergencyAfterHours}><a>{contactDetails.emergencyAfterHours}</a></Link>. Additional charges will apply.
      </Text>
      <ResponsiveToggle hideAtDesktop>
        <LargeButtonStyler color='white' align='left' mt={2}>
          <Link href={'tel:' + contactDetails.emergencyAfterHours}>
            <a><Button icon color='brand' bgColor='transparent' children='Call after-hours' /></a>
          </Link>
        </LargeButtonStyler>
      </ResponsiveToggle>
    </Block>

    <Block border textCenter>
      <ContactAction headlineColor='brandAlt' />
      <Contacts />
    </Block>

    <Footer />
  </Layout>
)

export default Emergency