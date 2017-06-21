import styled from 'styled-components'
import { Flex, Box } from 'grid-styled';
import { hoc } from '../styled-components'
import theme from '../theme.js';

import Container from '../shared/Container.js';
import QuickQuoteForm from './QuickQuoteForm.js';
import { LargeText } from '../shared/Texty.js';
// import Headline from '../shared/Headline.js';
import { Headline, Display, DisplayAlt } from '../shared/Headline.js';

const Root = styled(Box)`
  align-items: center;
  background-color: ${theme.colors.beige};
  height: 50vh;
  position: relative;
`

{/* <Box width={theme.containers.lg} m='auto'> */}
{/* <Headline color={theme.colors.brand} fontSize={[ 6, 7 ]} mb={2}>Skip the hassle of Strata management.</Headline> */}

const Hero = () => (
  <Root px={2}>
    <Container width={theme.containers.lg}>
      <Flex
        style={{ height: '50vh' }}
        align='center'
        >
        <Box width={[ 1, 1/2 ]}>
          <DisplayAlt>Skip the hassle of Strata management.</DisplayAlt>
          <LargeText>At VJ Ray Strata, we understand how valuable piece of mind is.</LargeText>
        </Box>
      </Flex>
    </Container>

    <QuickQuoteForm />
  </Root>
);

export default Hero