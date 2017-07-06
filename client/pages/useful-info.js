import React from 'react'
import styled from 'styled-components'

import { formatDateString } from '../lib/date.js'

import theme from '../components/theme'
import { hoc } from '../components/styled-system/styled-components'
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
import Guides, { GuideButton } from '../components/Shared/Guides'
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

// const FlexMobileColumn = styled(Flex)`
//     flex-direction: column;
//
//     @media (min-width: ${theme.containers.sm}) {
//       flex-direction: row;
//     }
//
//     @media (max-width: ${theme.containers.sm}) {
//       div + div {
//         margin-top: ${theme.space[4]}px;
//       }
//     }
// `

export default () => (
  <Layout>
    <Header />

    <StyledColorBox pb={[ 4, 5, 6 ]} px={3}>
      <Container mw='rg' mt={[ 4, 5, 6 ]} >
        <FlexMobileColumn>
          <Box
            width={[ 1, 1/2 ]}
            mt={[ 0, 3 ]}>
            <Subheadline color='white' children='Info on the go' />
            <Display color='white' font='displayRegular'>Your guides to <LineBreak>Sydney Strata.</LineBreak></Display>
            <LargeText color='text40'>Download your complete guide for successful Strata living.</LargeText>
          </Box>
          <Box
            width={[ 1, 1/2 ]}
            px={[ 3, 4 ]}>
            <GuideButton icon />
          </Box>
        </FlexMobileColumn>
      </Container>

      <Rule mw='lg' my={[ 3, 4 ]} />

      <Container textCenter>
        <Subheadline color='white' mt={[ 1, 2 ]} mb={4} children='All our guides' />
        <Guides buttons />
      </Container>
    </StyledColorBox>

    <Block mw='sm' textCenter>
      <RecentPosts subheading='Latest article' />
    </Block>

    <Box pb={[ 5, 6 ]} px={3}>
      <Container mw='lg' textCenter>
        <Container textCenter mb={4}>
          <Subheadline children='Posts archive' />
        </Container>
        <PostContainer />
      </Container>
    </Box>

    <Block bg='offWhite'>
      <ContactActionAlt btnColor='brandAlt' />
      <Contact />
    </Block>

    <Footer bg='offWhite' />
  </Layout>
)