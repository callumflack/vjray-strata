import React from 'react';
import styled from 'styled-components'
import { Flex, Box } from '../styled-grid'
import hoc from '../styled-elements/hoc'
import theme from '../theme'
import { LargeText, LineBreakAll } from '../styled-elements/Text'
import { Display, Headline, MobileSubheadline } from '../styled-elements/Headline'
import CoverImage from '../styled-elements/CoverImage'
import { HeroBox, HeroContainer, HeroFlex, HeroTitleBox } from './Hero'


const StyledHeroBox = styled(HeroBox)`
  background-image: initial;
  background-image:
    linear-gradient(
      to bottom,
      rgba(222, 202, 178, 0.4),
      ${theme.colors.beige} 70%
    );

    @media (max-width: 1024px) {
    &:after {
      background-color: initial;
      background-image:
        linear-gradient(
          to right,
          rgba(223, 212, 184, 0.5),
          rgba(223, 212, 184, 0.1) 80%
        );
    }

    @media (max-width: 512px) {
      &:after {
        background-color: initial;
        background-image:
          linear-gradient(
            to right,
            rgba(223, 212, 184, 0.96),
            rgba(223, 212, 184, 0.5) 80%
          );
      }
    }
  }
`


const HeroEmergency = props => (
  <StyledHeroBox>
    <CoverImage constrain emergency src='http://res.cloudinary.com/pw-img-cdn/image/upload/v1503653804/hero-emergency-_ryfz7y.png' />
    <HeroContainer mw='lg'>
      <HeroFlex>
        <HeroTitleBox
          w={1}
          mb={[ 3, 4 ]}
        >
          <MobileSubheadline children='Emergencies' />
          <Display color='brand' mb={2}>
            It happens. <LineBreakAll>We're prepared.</LineBreakAll>
          </Display>
          <LargeText hideAtMobile>
            At V J Ray Strata, <LineBreakAll>we'll sort it for you.</LineBreakAll>
          </LargeText>

        </HeroTitleBox>
      </HeroFlex>
    </HeroContainer>
  </StyledHeroBox>
)

export default HeroEmergency