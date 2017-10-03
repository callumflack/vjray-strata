import React from 'react';
import styled from 'styled-components'
import { Flex, Box } from './styled-grid'
import hoc from './Shared/hoc'
import theme from './theme'
import { LargeText, LineBreak, LineBreakAll } from './Shared/Text'
import { Display, Headline, MobileSubheadline } from './Shared/Headline'
import CoverImage from './Shared/CoverImage'
import { HeroBox, HeroContainer, HeroFlex, HeroTitleBox } from './Hero'


// #cbd7fc,
const StyledHeroBox = styled(HeroBox)`
  align-items: center;
  background-color: initial;
  background-image: initial;
`

const HeroFacts = props => (
  <StyledHeroBox>
    <HeroContainer mw='sm'>
      <HeroFlex>
        <HeroTitleBox
          width={[ 2/3, 1, 2/3, 2/3 ]}
          ml={0}
          mb={[ 3, 4 ]}
        >
          <MobileSubheadline color='brand' children='Contact us' />
          <Display color='brand'>
            Strata forms <LineBreakAll>and fact sheets.</LineBreakAll>
          </Display>
          <LargeText color='text70'>
            Readily available PDF downloads <LineBreak>to help your Strata Management.</LineBreak>
          </LargeText>

        </HeroTitleBox>
      </HeroFlex>
    </HeroContainer>
  </StyledHeroBox>
)

export default HeroFacts