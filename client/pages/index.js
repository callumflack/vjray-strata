import React from 'react'
import Link from 'next/link';

import styled from 'styled-components'
import { Flex, Box } from '../components/styled-grid'
import hoc from '../components/styled-elements/hoc'
import theme from '../components/theme'

import Layout from '../components/styled-elements/Layout'
import Container from '../components/styled-elements/Container'
import Button from '../components/styled-elements/Button'
import { Text, LargeText, MediumText, SmallText, AuthorText, LineBreak } from '../components/styled-elements/Text'
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/styled-elements/Headline'

import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import HeroBox from '../components/Shared/HeroBox'
import Guides from '../components/Shared/Guides'
import RecentPosts from '../components/Shared/RecentPosts'
import ContactAction from '../components/Shared/ContactAction'
import Contact from '../components/Shared/Contact'

import ListeningBox from '../components/Home/ListeningBox'
import FeatureList from '../components/Home/FeatureList'
import SydneyBox from '../components/Home/SydneyBox'
import TalkBox from '../components/Home/TalkBox'
import Testimonials from '../components/Home/Testimonials'


const Root = (props) => (
  <Layout>
    <Header pathname={props.pathname} clear />

    <ListeningBox />

    <Block mw='rg' textCenter>
      <Box width={[ 4/6, 5/6 ]} mx='auto'>
        <Headline font='displayMedium' color='text' mt={4} mb={3} children='It all adds up to a better deal.' />
        <Container width={[ 1, 5/6 ]}>
          <LargeText color='text70'>
            "You guys are very quick to respond and handle things efficiently, no complaints here"
            <LineBreak m='auto'><AuthorText>— Linda & Terry, Jindabyne</AuthorText></LineBreak>
          </LargeText>
        </Container>
      </Box>
      <Box width={[ 11/12, 1 ]} mx='auto' mt={4}>
        <FeatureList />
      </Box>
    </Block>

    <SydneyBox />

    <TalkBox>
      <Box px={3} py={[ 5, 6 ]} style={{ position: 'relative' }}>
        <Container textCenter>
          <Display children="It's our job to sort it." />
          <Container width={[ 1, 2/3 ]}>
            <LargeText color='text70'>
              "I have been happy and have known VJ Ray for years. I cannot fault you. Thank you!" <AuthorText>— Petrania, Belmore</AuthorText>
            </LargeText>
          </Container>
        </Container>

        <Container mw='lg' pt={[ 3, 4 ]}>
          <Testimonials />
        </Container>
      </Box>
    </TalkBox>

    <Block textCenter>
      <Subheadline>Info on the go</Subheadline>
      <Display color='brandAlt' children='Your guides to Sydney Strata.' />
      <MediumText color='text70'>
        Ipsum odit corrupti ullam in nam expedita corporis Magnam nemo corrupti suscipit recusandae voluptatem. Non aspernatur sed vero ipsam ut.
      </MediumText>

      <Box p={4}>
        <Guides featured limit={3} />
      </Box>

      <Container mt={5} mw='sm'>
        <Subheadline>
          <Link href={`/`} as={`/home`}><a>Recent posts</a></Link>
        </Subheadline>
        <RecentPosts />
      </Container>
    </Block>

    <Block border >
      <ContactAction btnColor='brandAlt' withButton withByline />
      <Contact />
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