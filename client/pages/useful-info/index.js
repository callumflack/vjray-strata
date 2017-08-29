import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'

import theme from '../../components/theme'
import hoc from '../../components/styled-elements/hoc'
import { Box, Flex } from '../../components/styled-grid'

import Layout from '../../components/styled-elements/Layout'
import Container from '../../components/styled-elements/Container'
import { Display, Headline, Subheadline, HeadlineMeta } from '../../components/styled-elements/Headline'
import { Text, LargeText, SmallText, LineBreak, LineBreakAll } from '../../components/styled-elements/Text'

import Block from '../../components/Shared/Block'
import { ColorBox } from '../../components/Shared/Hero'
import Contacts from '../../components/Shared/Contacts'
import ContactActionAlt from '../../components/Shared/ContactActionAlt'
import Footer from '../../components/Shared/Footer'
import Guides from '../../components/Shared/Guides'
import Header from '../../components/Shared/Header'
import PostContainer from '../../components/Shared/PostContainer'
import RecentPosts from '../../components/Shared/RecentPosts'
import Button from '../../components/styled-elements/Button'
import LargeButtonStyler from '../../components/Shared/LargeButtonStyler'


const StyledColorBox = styled(ColorBox)`
  background-image:
    linear-gradient(
      to bottom,
      rgb(64, 64, 112),
      ${theme.colors.brandAlt70} 70%
    )!important;
`

const FactsBox = styled(ColorBox)`
  background-color: ${theme.colors.beige};
  background-image: initial;
`

// const Rule = Container.extend` errors, WTF???
const Rule = styled(Container)`
  background-color: rgba(255,255,255, 0.15);
  height: 1px;
  max-width: calc(960px - 64px);
`

// moved the Posts lists here until
// they have more than 1 blog post.
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

const Root = (props) => (
  <Layout>
    <Header pathname={props.pathname} clear reverseBorder color='white' />

    <StyledColorBox pb={[ 4, 5, 6 ]} px={[ 0, 3 ]}>
      <Container mw='rg' mt={[ 4, 5, 6 ]} pb={[ 2, 3 ]}>
        <Flex direction={[ 'column', 'row' ]}>
          <Box width={[ 9/12, 5/12 ]} mt={[ 0, 3 ]}>
            <Subheadline color='white' children='Info on the go' />
            <Display color='white' font='displayRegular'>Your guides to <LineBreakAll>Sydney Strata.</LineBreakAll></Display>
            <LargeText color='text40'>Download your complete <LineBreak>guide to Strata living.</LineBreak></LargeText>
          </Box>

          <Box width={[ 1, 9/12 ]} pt={[ 3, 0 ]}>
            <Guides primary buttons icon />
          </Box>
        </Flex>
      </Container>

      <Rule mw='rg' my={[ 3, 4 ]} />

      <Container textCenter>
        <Subheadline color='white' mt={[ 1, 2 ]} mb={[ 3, 4 ]} children='All our guides' />
        <Guides buttons />
      </Container>
    </StyledColorBox>

    <Block
      bg='beige'
      textCenter
      pt={4}
      pb={4}
    >
      <Subheadline mt={[ 1, 2 ]} children='Take action' />
      <Display color='brandAlt' children='Forms and fact sheets.' />
      <LargeText color='brandAlt70' mb={3}>
        Readily available PDF downloads <LineBreakAll m='auto'>to manage your Strata.</LineBreakAll>
      </LargeText>
      <LargeButtonStyler>
        <Link href='/useful-info/forms-and-fact-sheets'>
          <Button large icon bgColor='brandAlt' children='See the list' />
        </Link>
      </LargeButtonStyler>
    </Block>

    <Block mw='sm' textCenter id="blog">
      <Subheadline children='Latest article' />
      <RecentPosts />
    </Block>

    <Block border>
      <ContactActionAlt btnColor='brandAlt' />
      <Contacts />
    </Block>

    <Footer />
  </Layout>
)

class UsefulInfo extends React.Component {
  static async getInitialProps({ pathname }) {
    return {
      pathname,
    }
  }

  render() {
    return <Root pathname={this.props.pathname} />
  }
}

export default UsefulInfo;