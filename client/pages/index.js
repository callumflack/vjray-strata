import React from 'react'
import Link from 'next/link';

import styled from 'styled-components'
import { Flex, Box } from '../components/styled-grid'
import hoc from '../components/styled-elements/hoc'
import theme from '../components/theme'

import Layout from '../components/styled-elements/Layout'
import Container from '../components/styled-elements/Container'
import Button from '../components/styled-elements/Button'
import { Text, LargeText, MediumText, SmallText, AuthorText, LineBreak, LineBreakMax } from '../components/styled-elements/Text'
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/styled-elements/Headline'

import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import Guides from '../components/Shared/Guides'
import RecentPosts from '../components/Shared/RecentPosts'
import ContactAction from '../components/Shared/ContactAction'
import Contacts from '../components/Shared/Contacts'
import LargeButtonStyler from '../components/Shared/LargeButtonStyler'
import HeroListening from '../components/Shared/HeroListening'

import FeatureList from '../components/Shared/FeatureList'
import HeroSydney from '../components/Shared/HeroSydney'
import HeroQuotes from '../components/Shared/HeroQuotes'
import Testimonials from '../components/Shared/Testimonials'
import GroupSiteLink from '../components/Shared/GroupSiteLink'


const Root = (props) => (
  <Layout>
    <Header pathname={props.pathname} clear />
    <HeroListening />

    <Block mw='rg' textCenter>
      <Box width={[ 11/12, 5/6 ]} mx='auto'>
        <Headline font='displayMedium' color='text' mt={[ 0, 3 ]} mb={2} children='It all adds up to a better deal.' />
        <Container width={[ 1, 1, 5/6 ]}>
          <LargeText color='text70'>
            "You guys are very quick to respond and handle things efficiently, no complaints here"&nbsp;
            <LineBreak m='auto'><AuthorText>— Linda & Terry, Jindabyne</AuthorText></LineBreak>
          </LargeText>
        </Container>
      </Box>

      <FeatureList />
    </Block>

    <HeroSydney />

    <HeroQuotes>
      <Box px={3} py={[ 4, 5, 6 ]} style={{ position: 'relative' }}>
        <Container textCenter>
          <Subheadline children='Our service' />
          <Display>
            It's our job <LineBreakMax mx='auto' children='to sort it.' />
          </Display>
          <Container width={[ 1, 7/12 ]}>
            <LargeText color='text70'>
              "I have known and been happy with V J Ray for years. I cannot fault you. Thank you!" <AuthorText>— Petrania, Belmore</AuthorText>
            </LargeText>
            <Text font='textMedium' mt={3}>
              <Link href='/what-we-do-for-you'>
                <Button color='brand' bg='white' invert icon children='What we do for you' />
              </Link>
            </Text>
          </Container>
        </Container>

        <Container mw='lg' pt={[ 3, 4 ]}>
          <Testimonials />
        </Container>
      </Box>
    </HeroQuotes>

    <Block textCenter>
      <Subheadline children='Info on the go' />
      <Display color='brandAlt' mb={3} children='Your guides to Sydney Strata.' />
      <Container width={[ 1, 2/3 ]}>
        <Text color='text70'>
          Ipsum odit corrupti ullam in nam expedita corporis Magnam nemo corrupti suscipit recusandae voluptatem.&nbsp;
          <Link href="/useful-info">
            <a>Check all our guides.</a>
          </Link>
        </Text>
      </Container>

      <Box pt={4} pb={3} px={[ 3, 4 ]}>
        <Guides featured limit={3} />
      </Box>

      <Container mt={4} mw='sm'>
        <Subheadline>
          <Link href={`/`} as={`/home`}><a>Recent posts</a></Link>
        </Subheadline>
        <RecentPosts />
      </Container>
    </Block>

    <GroupSiteLink />

    <Block>
      <ContactAction btnColor='brandAlt' withButton />
      <Contacts />
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
    return <Root pathname={this.props.pathname} />
  }
}


export default Index;