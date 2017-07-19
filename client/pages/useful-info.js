import React from 'react'
import styled from 'styled-components'

import { formatDateString } from '../lib/date.js'

import theme from '../components/theme'
import hoc from '../components/styled-elements/hoc'
import { Box, Flex } from '../components/styled-grid'

import Layout from '../components/styled-elements/Layout'
import Container from '../components/styled-elements/Container'
import FlexMobileColumn from '../components/Shared/FlexMobileColumn'
// import { IconDownload } from '../components/styled-elements/Icons'
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/styled-elements/Headline'
import { Text, LargeText, SmallText, LineBreak } from '../components/styled-elements/Text'
import Button from '../components/styled-elements/Button'

import Block from '../components/Shared/Block'
import ColorBox from '../components/Shared/ColorBox'
import Contact from '../components/Shared/Contact'
import ContactAction from '../components/Shared/ContactAction'
import ContactActionAlt from '../components/Shared/ContactActionAlt'
import Footer from '../components/Shared/Footer'
import Guides from '../components/Shared/Guides'
import Header from '../components/Shared/Header'
import PostContainer from '../components/Shared/PostContainer'
import RecentPosts from '../components/Shared/RecentPosts'


const StyledColorBox = styled(ColorBox)`
  background-image:
    linear-gradient(
      to bottom,
      rgb(64, 64, 112),
      ${theme.colors.brandAlt70} 70%
    )!important;
`

const Rule = styled(Container)`
  background-color: rgba(255,255,255, 0.15);
  height: 1px;
`

// moved the Posts lists here to run off
// until they have more than 1 blog post.
const PostsList = props => (
  <Box pb={[ 5, 6 ]} px={3}>
    <Container mw='lg' textCenter>
      <Container textCenter mb={4}>
        <Subheadline children='Posts archive' />
      </Container>
      <PostContainer />
    </Container>
  </Box>
)

export default () => (
  <Layout>
    <Header clear reverseBorder color='white' />

    <StyledColorBox pb={[ 4, 5, 6 ]} px={3}>
      <Container mw='rg' mt={[ 4, 5, 6 ]} >
        <FlexMobileColumn>
          <Box width={[ 1, 1/2 ]} mt={[ 0, 3 ]}>
            <Subheadline color='white' children='Info on the go' />
            <Display color='white' font='displayRegular'>Your guides to <LineBreak>Sydney Strata.</LineBreak></Display>
            <LargeText color='text40'>Download your complete <LineBreak>guide to Strata living.</LineBreak></LargeText>
          </Box>

          <Box width={[ 1, 1/2 ]} px={[ 3, 4 ]}>
            <Guides primary buttons />
          </Box>
        </FlexMobileColumn>
      </Container>

      <Rule mw='rg' my={[ 3, 4 ]} />

      <Container textCenter>
        <Subheadline color='white' mt={[ 1, 2 ]} mb={4} children='All our guides' />
        <Guides buttons />
      </Container>
    </StyledColorBox>

    <Block mw='sm' textCenter>
      <Subheadline children='Latest article' />
      <RecentPosts />
    </Block>

    <Block border>
      <ContactActionAlt btnColor='brandAlt' />
      <Contact />
    </Block>

    <Footer />
  </Layout>
)