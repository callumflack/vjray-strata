import React from 'react';
import styled from 'styled-components'
import { Flex, Box } from '../styled-grid'
import hoc from '../styled-elements/hoc'
import theme from '../theme'
import { LargeText, LineBreakAll } from '../styled-elements/Text'
import { Display, Headline, MobileSubheadline } from '../styled-elements/Headline'
import Image from './Image'
import { HeroBox, HeroContainer, HeroFlex, HeroTitleBox } from './Hero'


// @media (max-width: 1024px) {
//   &:after {
//     background-image:
//       linear-gradient(
//         to right,
//         rgba(222, 202, 178, 0.5),
//         rgba(222, 202, 178, 0.1) 80%
//       );
//   }
// }

const StyledHeroBox = styled(HeroBox)`
  background-image: initial;
  background-image:
    linear-gradient(
      to bottom,
      rgba(222, 202, 178, 0.4),
      ${theme.colors.beige} 70%
    );
  }
`

const HeroEmergency = props => (
  <StyledHeroBox showAfterScreen>
    <Image emergency img='http://res.cloudinary.com/pw-img-cdn/image/upload/v1504161478/hero-emegency_dtjyhz.png' />
    <HeroContainer mw='rg'>
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