import React from 'react'

import gql from 'graphql-tag'
import apollo from '../lib/apollo'
import fetchMarkdown from '../lib/fetchMarkdown.js'

import styled from 'styled-components'
import theme from '../components/theme'
import { Flex, Box } from '../components/styled-grid'
import hoc from '../components/styled-elements/hoc'

import { Text, TextBlock, DangerouslyResetTextBlock, LineBreak } from '../components/styled-elements/Text'
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/styled-elements/Headline'

import Layout from '../components/styled-elements/Layout'
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Container from '../components/styled-elements/Container'
import Block from '../components/Shared/Block'
import CoverImage from '../components/styled-elements/CoverImage'
import Button from '../components/styled-elements/Button'
import ContactAction from '../components/Shared/ContactAction'
import Contacts from '../components/Shared/Contacts'
import { HeroBox, HeroContainer, HeroFlex } from '../components/Shared/Hero'
import LargeButtonStyler from '../components/Shared/LargeButtonStyler'



// const Hero = styled(Box)`
const StyledHeroBox = styled(HeroBox)`
  --Hero-height: ${theme.blockHeights.superHero} !important;
  --Hero-height-mobile: ${theme.blockHeights.hero} !important;
  background-color: #4F90C8;
  background-image: initial;

  &:after {
    background-color: rgba(79, 144, 200, 0.25);
    background-color: rgba(255, 255, 255, 0.15);
    background-blend-mode: multiply;
    bottom: 0;
    content: " ";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`

const Image = styled(CoverImage)`
  background-image: url('static/img/who-cronulla.jpg');
  background-position: 50% 50%;

  @media (min-width: 1024px) { background-position: 50% 50%; }
  @media (min-width: 1280px) { background-position: 50% 50%; }
  @media (min-width: 1536px) { background-position: 30% 100%; }
`

{/* <Subheadline color='brandAlt' children='About us' /> */}
const Hero = props => (
  <StyledHeroBox>
    <Image />
    <HeroContainer mw='lg'>
      <HeroFlex style={{ zIndex: '1' }}>
        <Box w={[ 5/6, 5/6, 6/12, 2/3 ]} ml={[ null, 3 ]} mb={[ 4, 5, 6 ]}>
          <Display color='brandAlt'>
            We believe in better <LineBreak>Strata management </LineBreak><LineBreak>for Sydney.</LineBreak>
          </Display>
        </Box>
      </HeroFlex>
    </HeroContainer>
  </StyledHeroBox>
)

const TextBlockWrapper = styled(Flex)`
  margin-top: 0;
  margin-bottom: ${theme.space[4]}px;

  @media (min-width: ${theme.containers.sm}) {
    margin: 0;
  }
`



const pageQuery = gql`{
  page(page: "Who we are") {
    _id,
    who {
      post,
    },
  }
}`;


class WhoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ query, req, pathname }) {
    const { data: { page } } = await apollo.query({
      query: pageQuery,
    });

    const mikesLetter = await fetchMarkdown(req, 'mikes-letter');

    return {
      mikesLetter,
      ...page,
      pathname,
    }
  }

  render() {
    return (
      <Layout>
        <Header pathname={this.props.pathname} clear color='brandAlt' />
        <Hero />

        <Box px={3} py={[ 4, 5, 6 ]}>
          <Container>
            <Box width={[ 1, 11/12 ]} mx='auto'>

              <Flex direction={[ 'column', 'column', 'row' ]} mx={-3}>

                <Flex column width={[ 1, 1, 1/3, 1/4 ]} px={[ 4, 5, 3 ]}>
                  <Box mt='6px'>
                    <img src='static/img/mike-pollard.jpg' />
                  </Box>
                  <Text color='text70' mt={2} children='Mike Pollard' />
                  <Text color='text70' children='Owner' />
                </Flex>

                <TextBlockWrapper order={[ '-1', '-1', 'initial' ]} px={3} width={[ 1, 1, 2/3, 3/4 ]}>
                  <TextBlock dangerouslySetInnerHTML={{__html: this.props.mikesLetter.body.html}} />
                </TextBlockWrapper>
              </Flex>

            </Box>
          </Container>
        </Box>

        <Block border textCenter>
          <ContactAction btnColor='brandAlt' withButton />
          <Contacts />
        </Block>

        <Footer />
      </Layout>
    )
  }
}

export default WhoContainer;