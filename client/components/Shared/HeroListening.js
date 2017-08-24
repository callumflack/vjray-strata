import React from 'react';
import styled from 'styled-components'
import { Flex, Box } from '../styled-grid'
import hoc from '../styled-elements/hoc'
import theme from '../theme'
import setCloudinaryImages from '../../lib/cloudinaryDimensions.js'

import { LargeText, LineBreak } from '../styled-elements/Text'
import { Headline, Display } from '../styled-elements/Headline'
import CoverImage from '../styled-elements/CoverImage'

import { HeroBox, HeroContainer, HeroFlex } from './Hero'
import FormQuickQuote from './FormQuickQuote'


const StyledHeroBox = styled(HeroBox)`
  background-color: ${theme.colors.beige};
`

// background-image: url('static/img/home-hero.jpg');
const Image = styled(CoverImage)`
  background-position: 35% 100%;
  @media (min-width: 1024px) { background-position-x: 100%; }
  @media (min-width: 1280px) { background-position-x: 85%; }
  @media (min-width: 1536px) { background-position-x: 66%; }

  @media (min-width: 1280px) { background-size: contain !important; }
`

const Root = () => (
  <StyledHeroBox>
    <Image src='http://res.cloudinary.com/pw-img-cdn/image/upload/v1503542523/home-hero_eq4eot.jpg' />
    <HeroContainer mw='lg'>
      <HeroFlex>
        <Box width={[ 8/10, 5/12, 4/10 ]} ml={[ null, 3 ]} mb={[ 3, 4 ]}>
          <Display mb={2}>
            Skip the hassle of <LineBreak>Strata management.</LineBreak>
          </Display>
          <LargeText>At V J Ray Strata, we understand how valuable your peace of mind is.</LargeText>
        </Box>
      </HeroFlex>
    </HeroContainer>

    <FormQuickQuote />
  </StyledHeroBox>
);

class HeroListening extends React.Component {
  componentDidMount() {
    setCloudinaryImages();
  }

  render() {
    return <Root />
  }
}

export default HeroListening