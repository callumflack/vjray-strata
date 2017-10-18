import React from 'react';
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import theme from '../theme-new'
import { LargeText } from './Text'
import LineBreak from "./LineBreak";
import { Display, Headline, MobileSubheadline } from './Headline'
import Image from './Image'
import { HeroBox, HeroContainer, HeroFlex, HeroTitleBox } from './Hero'


const StyledHeroBox = styled(HeroBox)`
  background-image: linear-gradient(
    to bottom,
    rgba(222, 202, 178, 0.4),
    ${theme.colors.beige} 70%
  );
`;

const HeroContact = props => (
  <StyledHeroBox showAfterScreen avoidMenuAtLaptopSize>
    <Image what img="http://res.cloudinary.com/pw-img-cdn/image/upload/v1503618862/hero-what-_i582ye.png" />
    
    <HeroContainer mw='rg'>
      <HeroFlex>
        <HeroTitleBox width={[ 7/12, 5/12, 4/12, 4/12 ]} ml={[ 1, 3 ]} mb={[ 3, 4 ]}>
          <MobileSubheadline color='brand' children='Contact us' />
          <Display color='brand' mb={2} children='How can we help make your Strata living easier?' />
          <LargeText hideAtMobile color='text' children='Visit, call or write to us.' />
        </HeroTitleBox>
      </HeroFlex>
    </HeroContainer>
  </StyledHeroBox>
)

export default HeroContact