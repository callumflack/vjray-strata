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
  --Header-height: ${theme.blockHeights.navBar};
  height: calc(70vh + var(--Header-height)) !important;

  @media (min-width: 768px) {
    height: calc(50vh + var(--Header-height)) !important;
  }
`

const StyledFlex = styled(Flex)`
  height: 70vh;

  @media (min-width: 768px) {
    height: 50vh;
  }
`

const Image = styled(CoverImage)`
  background-image: url('static/img/home-hero.jpg');
  background-position: 40% 100%;

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
      <StyledFlex align='center'>
        <Box width={[ 9/12, 5/12, 1/2 ]} ml={[ null, 3 ]}>
          <Display font='displayRegular'>
            Skip the hassle of&nbsp;
            <LineBreak>Strata management.</LineBreak>
          </Display>
          <LargeText>At V J Ray Strata, we understand how valuable your peace of mind is.</LargeText>
        </Box>
      </StyledFlex>
    </Container>

    <QuickQuoteForm />
  </Root>
);

export default ListeningBox