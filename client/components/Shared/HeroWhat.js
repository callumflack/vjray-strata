import React from 'react';
import styled from 'styled-components'
import { Flex, Box } from '../styled-grid'
import hoc from '../Shared/hoc'
import theme from '../theme'
import { LargeText, LineBreak } from '../Shared/Text'
import { Display, Headline, MobileSubheadline } from '../Shared/Headline'
import Image from './Image'
import { HeroBox, HeroContainer, HeroFlex, HeroTitleBox } from './Hero'


// @media (max-width: 1024px) {
//   &:after {
//     background-color: initial;
//     background-image:
//       linear-gradient(
//         to right,
//         rgba(222, 202, 178, 0.3),
//         rgba(222, 202, 178, 0.2) 70%
//       );
//   }
// }

const StyledHeroBox = styled(HeroBox)`
  background-color: #ebe5df;
  background-color: initial;
  background-image: initial;
  background-image:
    linear-gradient(
      to bottom,
      rgba(222, 202, 178, 0.4),
      ${theme.colors.beige} 70%
    );
`

const HeroWhat = props => (
  <StyledHeroBox showAfterScreen>
    <Image what img='http://res.cloudinary.com/pw-img-cdn/image/upload/v1503618862/hero-what-_i582ye.png' />
    <HeroContainer>
      <HeroFlex>
        <HeroTitleBox
          w={[ 6/12, 5/12, 1/3, 1/2 ]}
          mb={[ 3, 4 ]}
        >
          <MobileSubheadline color='brandAlt' children='Services' />
          <Display color='brand' mb={2} children='What we do for you.' />
          <LargeText hideAtMobile>
            We’ll go further to help you find peace of mind by making Strata living easier.
          </LargeText>

        </HeroTitleBox>
      </HeroFlex>
    </HeroContainer>
  </StyledHeroBox>
)

export default HeroWhat