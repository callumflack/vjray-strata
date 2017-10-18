import React from 'react';
import styled from 'styled-components'
import { Flex, Box, Banner } from 'rebass'
import { HeroBox, HeroContainer, HeroFlex, HeroTitleBox } from './Hero'
import BlockCrown from "./BlockCrown";
import { Text } from './Texts'
import { Button } from './Buttons'


const StyledBanner = styled(Banner)`
  height: 70vh;
  position: relative;

  &:after {
    background-color: rgba(255, 255, 255, 0.15);
    background-image:
      linear-gradient(
        to bottom,
        rgba(18, 150, 222, 1),
        rgba(18, 150, 222, 0.4) 75%
      );
    background-blend-mode: multiply;
    bottom: 0;
    content: " ";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`

const StyledButton = styled(Button)`
  span {
    border-top: 0.3125em solid transparent;
    border-bottom: 0.3125em solid transparent;
    border-left: 0.4375em solid;
    border-right: 0;
  }
`;

{/* <CoverImage who src="http://res.cloudinary.com/pw-img-cdn/image/upload/v1507095035/hero-cronulla-bw_glru1c.jpg" /> */}

const HeroStrata = props => (
  <StyledBanner
    is="section"
    py={[64, 64, 128, 128]}
    backgroundImage="http://res.cloudinary.com/pw-img-cdn/image/upload/v1507095035/hero-cronulla-bw_glru1c.jpg"
  >
    <HeroContainer textCenter style={{ zIndex: 1 }}>
      <BlockCrown
        crownWidth="42em"
        subhead={props.subhead}
        subheadColor="white"
        title={props.title}
        titleColor="white"
        text={props.text}
        largeTextColor="white"
      >
        <Text center noUnderline family="textMedium" mt={3}>
          <StyledButton
            fontSize={[2, 2, 2, 3]}
            bg="white"
            color="brandAlt"
            px={3}
            icon
            href="https://vjraystrata.com.au"
          >
            Visit VJ Ray Strata
          </StyledButton>
        </Text>
      </BlockCrown>
    </HeroContainer>
  </StyledBanner>
);

export default HeroStrata