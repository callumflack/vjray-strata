import React from 'react'

import gql from 'graphql-tag'
import apollo from '../lib/apollo'
import fetchMarkdown from '../lib/fetchMarkdown.js'

import styled from 'styled-components'
import theme from '../components/theme'
import { Flex, Box } from '../components/styled-grid'
import hoc from '../components/styled-elements/hoc'

import { Text, TextBlock, DangerouslyResetTextBlock, LineBreak } from '../components/styled-elements/Text'
import { Display, Headline, Subheadline, MobileSubheadline, HeadlineMeta } from '../components/styled-elements/Headline'

import Layout from '../components/styled-elements/Layout'
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Container from '../components/styled-elements/Container'
import Block from '../components/Shared/Block'

import HeroWho from '../components/Shared/HeroWho'
import CoverImage from '../components/styled-elements/CoverImage'
import Button from '../components/styled-elements/Button'
import ContactAction from '../components/Shared/ContactAction'
import Contacts from '../components/Shared/Contacts'
import LargeButtonStyler from '../components/Shared/LargeButtonStyler'





const TextBlockWrapper = styled(Flex)`
  margin-top: 0;
  margin-bottom: ${theme.space[4]}px;

  @media (min-width: ${theme.containers.sm}) {
    margin: 0;
  }
`

const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear color='brandAlt' />
    <HeroWho />

    <Block>
      <Box w={[ 1, 11/12 ]} mx='auto'>
        <Flex direction={[ 'column', 'column', 'row' ]} mx={[ -2, -2, -2, -3 ]}>

          <Flex column width={[ 1, 1, 1/3, 1/4 ]} px={[ 2, 2, 2, 5, 3 ]}>
            <Box mt='6px'>
              <img src='static/img/mike-pollard.jpg' />
            </Box>
            <Text color='text70' mt={2} children='Mike Pollard' />
            <Text color='text70' children='Owner' />
          </Flex>
          <TextBlockWrapper order={[ '-1', '-1', 'initial' ]} px={[ 2, 2, 2, 3 ]} width={[ 1, 1, 2/3, 3/4 ]}>
            <TextBlock dangerouslySetInnerHTML={{__html: props.mikesLetter.body.html}} />
          </TextBlockWrapper>

        </Flex>
      </Box>
    </Block>

    <Block border textCenter>
      <ContactAction btnColor='brandAlt' withButton />
      <Contacts />
    </Block>
    <Footer />
  </Layout>
)



class WhoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ req, pathname }) {
    const mikesLetter = await fetchMarkdown(req, 'mikes-letter');

    return {
      mikesLetter,
      pathname,
    }
  }

  render() {
    return (
      <Root {...this.props} />
    )
  }
}

export default WhoContainer;