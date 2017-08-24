import React from 'react';
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

const HeroListening = () => (
  <StyledHeroBox>
    <CoverImage listening src='http://res.cloudinary.com/pw-img-cdn/image/upload/v1503542523/home-hero_eq4eot.jpg' />
    <HeroContainer mw='lg'>
      <HeroFlex>
        <Box width={[ 8/10, 5/12, 4/10 ]} ml={[ null, 3 ]} mb={[ 3, 4 ]}>
          <Display mb={2}>
            Skip the hassle of <LineBreak>Strata management.</LineBreak>
          </Display>
          <LargeText children='At V J Ray Strata, we understand how valuable your peace of mind is.' />
        </Box>
      </HeroFlex>
    </HeroContainer>

    <FormQuickQuote />
  </StyledHeroBox>
);

export default HeroListening