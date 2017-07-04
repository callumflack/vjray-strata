import React from 'react'
import styled from 'styled-components'

import theme from '../components/theme'
import { Box, Flex } from '../components/styled-grid'
import Layout from '../components/shared/Layout'
import Block from '../components/shared/Block'
import Container from '../components/shared/Container'
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/shared/Headline'
import { Text, LargeText, SmallText, LineBreak } from '../components/shared/Text'
import Button from '../components/shared/Button'

import ColorBox from '../components/shared/ColorBox'
// import { IconDownload } from '../components/shared/Icons'
import GuideButton from '../components/shared/GuideButton'
import RecentPosts from '../components/shared/RecentPosts'
import ContactAction from '../components/shared/ContactAction'
import Contact from '../components/shared/Contact'


const StyledColorBox = styled(ColorBox)`
  background-color: ${theme.colors.brandAlt};
  background-image:
    linear-gradient(
      to bottom,
      rgba(0,0,0,0.2),
      ${theme.colors.brandAlt} 40%
    );
`

const Rule = styled(Container)`
  background-color: rgba(255,255,255, 0.15);
  height: 1px;
`

export default () => (
  <Layout>
    <StyledColorBox py={[ 5, 6 ]} px={3}>
      <Container mw='lg'>
        <Flex>
          <Box width={[ 1, 1/2 ]} mt={[ 2, 3 ]}>
            <Subheadline color='white' children='Info on the go' />
            <Display color='white'>Your guides to <LineBreak>Sydney Strata.</LineBreak></Display>
            <LargeText color='text40'>Download your complete guide for successful Strata living.</LargeText>
          </Box>
          <Box width={[ 1, 1/2 ]} px={[ 3, 4, 5 ]}>
            <GuideButton icon />
          </Box>
        </Flex>
      </Container>

      <Rule mw='lg' my={[ 3, 4 ]} />
      <Container textCenter>
        <Subheadline color='white' mt={[ 1, 2 ]} children='All our guides' />
        <Flex mx={-3} mt={[ 3, 4 ]}>
          {Array(3).fill(1).map(() =>
            <Box width={[ 1, 1/3 ]} px={3}>
              <GuideButton children='NSW Strata legislation 2017' />
            </Box>
          )}
        </Flex>
      </Container>
    </StyledColorBox>

    <Block mw='sm' textCenter>
      <RecentPosts subheading='Latest article' />
    </Block>

    <Box px={3} pb={[ 5, 6 ]}>
      <Container mw='sm' textCenter>
        <Subheadline children='Article archive' />
      </Container>
    </Box>

  </Layout>
)