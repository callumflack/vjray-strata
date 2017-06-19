import styled, { ThemeProvider } from 'styled-components';

import { Flex, Box } from 'grid-styled';
import { hoc } from '../styled-components'
// import { space, width, fontSize, color } from 'styled-system'

import theme from '../../css/theme.js';
import Block from '../shared/Block.js';
import Container from '../shared/Container.js';
import QuickQuoteForm from './QuickQuoteForm.js';
import {
  Paragraph,
} from '../shared/Text.js';

import { Headline } from '../shared/Headline.js';


const styledTheme = {
  breakpoints: [
    32, 48, 64
  ],
  space: [
    0, 6, 12, 18, 24
  ],
  fontSizes: [
    12, 16, 19, 22, 24, 32, 40, 58
  ]
}


const BlockPosRelative = styled(Block)`
  position: relative;
`;

// const Flex = styled.div`
//   display: flex;
// `;

const TextWrapper = styled.div`
  margin-right: 2rem;
`;

// <BlockPosRelative altBackground>
//   <Container>
//     <Flex>
//       <TextWrapper>
//         <Headline>Skip the hassle of Strata management.</Headline>
//         <Paragraph lg>At VJ Ray Strata, we understand how valuable piece of mind is.</Paragraph>
//       </TextWrapper>
//
//       <img src='http://lorempixel.com/400/300' />
//     </Flex>
//   </Container>
//
//   <QuickQuoteForm />
// </BlockPosRelative>

// <Box width={theme.containers.lg} px={2} m='auto'>



const Hero = () => (
  <div>
    <ThemeProvider theme={styledTheme}>
      <Box width={theme.containers.lg} px={2} m='auto'>
        <Flex
          style={{ height: '50vh' }}
          align='center'
          >
          <Box width={1/2}>
            <Headline light active fontSize={[ 6, 7 ]} mb={2} color={theme.colors.brand}>Skip the hassle of Strata management.</Headline>
            <Paragraph fontSize={[ 3, 4 ]}>At VJ Ray Strata, we understand how valuable piece of mind is.</Paragraph>
          </Box>
        </Flex>
      </Box>
    </ThemeProvider>


  </div>
);

export default Hero