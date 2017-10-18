import React from 'react'
import Link from 'next/link';

import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import hoc from '../components/Shared/hoc'
import theme from '../components/theme'

import Layout from '../components/Shared/Layout'
import Container from '../components/Shared/Container'
import Button from '../components/Shared/Button'
import { Text, LargeText, MediumText, SmallText, AuthorText, LineBreak, LineBreakMax, LineBreakAll } from '../components/Shared/Text'
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/Shared/Headline'

import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import Guides from '../components/Guides'
import RecentPosts from '../components/RecentPosts'
import ContactAction from '../components/ContactAction'
import Contacts from '../components/Shared/Contacts'
import LargeButtonStyler from '../components/LargeButtonStyler'
import HeroListening from '../components/Shared/HeroListening'

import FeatureList from '../components/Shared/FeatureList'
import HeroSydney from '../components/Shared/HeroStrataSydney'
import HeroQuotes from '../components/HeroQuotes'
import Testimonials from '../components/Testimonials'
import GroupSiteLink from '../components/GroupSiteLink'
import FormQuickQuote from '../components/FormQuickQuote'


const Root = (props) => (
  <Layout>
    <Header pathname={props.pathname} clear />

    <HeroListening
      headline='Skip the hassle of <LineBreak>Strata Management.</LineBreak>'
      subheadline='At VJ Ray Strata, we understand how valuable your peace of mind is.'
    >
      <FormQuickQuote />
    </HeroListening>


    <Block mw='rg' textCenter>
      <Box mx='auto' width={[ 1, 1, 5/6 ]}>
        <Headline font='displayMedium' color='text' mt={[ 0, 4, 4 ]} mb={2} children='It all adds up to a better deal.' />
        <LargeText color='text70'>
          "You guys are very quick to respond and handle things efficiently, no complaints here!"<LineBreak m='auto'><AuthorText>— Linda & Terry, Caringbah</AuthorText></LineBreak>
        </LargeText>
      </Box>

      <FeatureList />
    </Block>

    <HeroSydney
      headline="We help make Sydney <LineBreak bp='1' m='auto'>strata living great.</LineBreak>"
      subheadline="We know that our job is much more that just looking after buildings. Its the people that matter. <Link href='/who-we-are'><a>Read about who we are.</a></Link>"
    />

    <HeroQuotes>
      <Box px={3} py={[ 4, 4, 5, 5, 6 ]} style={{ position: 'relative' }}>
        <Container textCenter>
          <Subheadline children='Our service' />
          <Display>
            It's our job to sort it.
          </Display>
          {/* width={[ 1, 9/12, 9/12, 7/12 ]} */}
          <Box w={[ 1, 1, 8/12 ]} mx='auto'>
            <LargeText color='text70'>
              "I have known and been happy with VJ Ray for years. I cannot fault you. Thank you!" <LineBreakAll mx='auto'>
                <AuthorText>— Petrania, Belmore</AuthorText>
              </LineBreakAll>
            </LargeText>
            <Text font='textMedium' mt={3}>
              <Link href='/what-we-do-for-you'>
                <Button color='brand' bg='white' invert icon children='What we do for you' />
              </Link>
            </Text>
          </Box>
        </Container>

        <Container mw='lg' pt={[ 3, 4 ]}>
          <Testimonials />
        </Container>

      </Box>
    </HeroQuotes>

    <Block textCenter>
      <Subheadline children='Info on the go' />
      <Display color='brandAlt' mb={3} children='Your guides to Sydney Strata.' />
      <Text
        color='text70'
        mx='auto'
        width={[ 1, 2/3, 2/3, 1/2 ]}
      >
        We've got guides and articles to help your Strata Management. <Link href="/useful-info"><a>Check all our guides.</a></Link>
      </Text>

      <Box pt={4} pb={3}>
        <Guides featured limit={3} />
      </Box>

      <Container mt={4} mw='sm'>

      </Container>
      <Subheadline>
        <Link href={`/`} as={`/home`}><a>Recent posts</a></Link>
      </Subheadline>
      <RecentPosts />
    </Block>

    <GroupSiteLink />

    <Block>
      <ContactAction btnColor='brandAlt' withButton />
      <Contacts pathname={props.pathname} />
    </Block>

    <Footer />
  </Layout>
)

class Index extends React.Component {
  static async getInitialProps({ pathname }) {
    return {
      pathname,
    }
  }
  render() {
    return <Root {...this.props} />
  }
}

export default Index;