import styled from 'styled-components'
import { Flex, Box } from 'grid-styled';
import { hoc } from '../styled-components'
import theme from '../theme.js';

import Container from '../shared/Container.js';
import QuickQuoteForm from './QuickQuoteForm.js';
import {
  Texty,
} from '../shared/Texty.js';
import Headline from '../shared/Headline.js';

const Root = styled(Box)`
  align-items: center;
  background-color: ${theme.colors.alt};
  height: 50vh;
  position: relative;
`

// <Box width={theme.containers.lg} m='auto'>

const Hero = () => (
  <Root px={2}>
    <Container width={theme.containers.lg}>
      <Flex
        style={{ height: '50vh' }}
        align='center'
        >
        <Box width={[ 1, 1/2, ]}>
          <Headline light active fontSize={[ 6, 7 ]} mb={2} color={theme.colors.brand}>Skip the hassle of Strata management.</Headline>
          <Texty light fontSize={[ 4, 5 ]}>At VJ Ray Strata, we understand how valuable piece of mind is.</Texty>
        </Box>
      </Flex>
    </Container>

    <QuickQuoteForm />
  </Root>
);

export default Hero