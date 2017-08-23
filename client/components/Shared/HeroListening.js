import styled from 'styled-components'
import { Flex, Box } from '../styled-grid'
import hoc from '../styled-elements/hoc'
import theme from '../theme'

import { LargeText, LineBreak } from '../styled-elements/Text'
import { Headline, Display } from '../styled-elements/Headline'
import CoverImage from '../styled-elements/CoverImage'

import { HeroBox, HeroContainer, HeroFlex } from './Hero'
import FormQuickQuote from './FormQuickQuote'


const StyledHeroBox = styled(HeroBox)`
  background-color: ${theme.colors.beige};
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

const HeroListening = () => (
  <StyledHeroBox>
    <Image />
    <HeroContainer mw='lg'>
      <HeroFlex>
        <Box width={[ 9/12, 5/12, 1/2 ]} ml={[ null, 3 ]} mb={4}>
          <Display font='displayRegular'>
            Skip the hassle of <LineBreak>Strata management.</LineBreak>
          </Display>
          <LargeText>At V J Ray Strata, we understand how valuable your peace of mind is.</LargeText>
        </Box>
      </HeroFlex>
    </HeroContainer>

    <FormQuickQuote />
  </StyledHeroBox>
);

export default HeroListening