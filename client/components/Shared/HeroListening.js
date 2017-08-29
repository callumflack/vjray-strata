import React from 'react';
import styled from 'styled-components'
import { Flex, Box } from '../styled-grid'
import hoc from '../styled-elements/hoc'
import theme from '../theme'

import { LargeText, LineBreak } from '../styled-elements/Text'
import { Headline, Display } from '../styled-elements/Headline'
import CoverImage from '../styled-elements/CoverImage'

import { HeroBox, HeroContainer, HeroFlex, HeroTitleBox } from './Hero'
import FormQuickQuote from './FormQuickQuote'


const StyledHeroBox = styled(HeroBox)`
  background-color: ${theme.colors.beige};

  @media (max-width: 512px) {
    &:after {
      background-color: rgba(0, 153, 209, 0.96);
      background-color: rgba(64, 64, 112, 0.1);
      background-color: rgba(0, 0, 0, 0.25);
      background-color: rgba(121, 122, 154, 0.5);
      background-color: rgba(247, 242, 236, 0.5);
      background-color: rgba(71, 39, 0, 0.25);
      background-color: rgba(223, 212, 184, 0.5);
      background-color: initial;
      background-image: initial;

      background-image:
        linear-gradient(
          to right,
          rgba(223, 212, 184, 0.5),
          rgba(223, 212, 184, 0.1) 100%
        );

    }
  }
`
// ml={[ null, 3 ]}
const HeroListening = () => (
  <StyledHeroBox>
    <CoverImage constrain listening src='http://res.cloudinary.com/pw-img-cdn/image/upload/v1503542523/home-hero_eq4eot.jpg' />
    <HeroContainer mw='lg'>
      <HeroFlex>
        <HeroTitleBox width={[ 5/10, 5/12, 6/12 ]} mb={[ 3, 4 ]}>
          <Display mb={2}>
            Skip the hassle of <LineBreak>Strata Management.</LineBreak>
          </Display>
          <LargeText children='At V J Ray Strata, we understand how valuable your peace of mind is.' />
        </HeroTitleBox>
      </HeroFlex>
    </HeroContainer>

    <FormQuickQuote />
  </StyledHeroBox>
);

export default HeroListening