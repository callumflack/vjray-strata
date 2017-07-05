import React from 'react'
import styled from 'styled-components'

import theme from '../components/theme'
import { Box, Flex } from '../components/styled-grid'

import { formatDateString } from '../lib/date.js'
import Layout from '../components/shared/Layout'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Block from '../components/shared/Block'
import Container from '../components/shared/Container'

import { Display, Headline, Subheadline, HeadlineMeta } from '../components/shared/Headline'
import { Text, LargeText, SmallText, LineBreak } from '../components/shared/Text'
import Button from '../components/shared/Button'

import ColorBox from '../components/shared/ColorBox'
// import { IconDownload } from '../components/shared/Icons'
import GuideButton from '../components/shared/GuideButton'
import RecentPosts from '../components/shared/RecentPosts'
import ArticleArchive from '../components/shared/ArticleArchive'
import ContactAction from '../components/shared/ContactAction'
import ContactActionAlt from '../components/shared/ContactActionAlt'
import Contact from '../components/shared/Contact'


// rgba(0,0,0,0.2),
const StyledColorBox = styled(ColorBox)`
  background-color: ${theme.colors.brandAlt};
  background-image:
    linear-gradient(
      to bottom,
      rgba(64, 64, 112, 0.2),
      ${theme.colors.brandAlt70} 70%
    );
`

const Rule = styled(Container)`
  background-color: rgba(255,255,255, 0.15);
  height: 1px;
`

const FlexMobileColumn = styled(Flex)`
    flex-direction: column;

    @media (min-width: ${theme.containers.sm}) {
      flex-direction: row;
    }

    @media (max-width: ${theme.containers.sm}) {
      div + div {
        margin-top: ${theme.space[4]}px;
      }
    }
`



{/* <Subheadline
  align='center'
  mb={[ 3, 4 ]}
  children='Article archive' /> */}

export default () => (
  <Layout>
    <Header clear invert />

    <StyledColorBox pb={[ 4, 5, 6 ]} px={3}>
      <Container mw='rg' mt={[ 4, 5, 6 ]}>
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

      <Rule mw='lg' my={4} />

      <Container textCenter>
        <Subheadline color='white' mt={[ 1, 2 ]} mb={4} children='All our guides' />
        <FlexMobileColumn mx={-3}>
          {Array(3).fill(1).map(() =>
            <Box width={[ 1, 1/3 ]} px={[ 4, 3 ]}>
              <GuideButton children='NSW Strata legislation 2017' />
            </Box>
          )}
        </FlexMobileColumn>
      </Container>
    </StyledColorBox>

    <Block mw='sm' textCenter>
      <RecentPosts subheading='Latest article' />
    </Block>

    <Box pb={[ 5, 6 ]} px={3}>
      <Container mw='lg' textCenter>
        <ArticleArchive />
      </Container>
    </Box>

    <Block bg='offWhite'>
      <ContactActionAlt />
      <Contact />
    </Block>

    <Footer />
  </Layout>
)