import styled from 'styled-components'
import { Flex, Box } from '../styled-grid'
import hoc from '../styled-elements/hoc'
import theme from '../theme'

import { LargeText, LineBreak } from '../styled-elements/Text'
import { Headline, Display } from '../styled-elements/Headline'
import CoverImage from '../styled-elements/CoverImage'
import Container from '../styled-elements/Container'

import HeroBox from '../Shared/HeroBox'
import QuickQuoteForm from './QuickQuoteForm'


const Root = styled(HeroBox)`
  --Hero-height: ${theme.blockHeights.hero};
`

const Image = styled(CoverImage)`
  background-image: url('static/img/home-hero.jpg');
  background-position: 30% 100%;

  @media (min-width: 1024px) {
    background-position: 100% 100%;
  }

  @media (min-width: 1280px) {
    background-size: contain !important;
    background-position: 85% 100%;
  }

  @media (min-width: 1536px) {
    background-position: 66% 100%;
  }
`

const ListeningBox = () => (
  <Root px={3}>
    <Image />

    <Container mw='lg' relative>
      <Flex
        style={{ height: '50vh' }}
        align='center'
        >
        <Box width={[ 5/12, 1/2 ]} ml={[ null, 3 ]}>
          <Display font='displayRegular'>
            Skip the hassle of
            <LineBreak>Strata management.</LineBreak>
          </Display>
          <LargeText>At V J Ray Strata, we understand how valuable your peace of mind is.</LargeText>
        </Box>
      </Flex>
    </Container>

    <QuickQuoteForm />
  </Root>
);

export default ListeningBox