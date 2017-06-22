import styled from 'styled-components'
import { Flex, Box } from 'grid-styled';
import { hoc } from '../styled-components'
import theme from '../theme.js';

import Container from '../shared/Container.js';
import QuickQuoteForm from './QuickQuoteForm.js';
import { LargeText } from '../shared/Texty.js';
import { Headline, Display } from '../shared/Headline.js';

const Root = styled(Box)`
  align-items: center;
  background-color: ${theme.colors.beige};
  height: 50vh;
  position: relative;
`

const Hero = () => (
  <Root px={2}>
    <Container width={theme.containers.lg}>
      <Flex
        style={{ height: '50vh' }}
        align='center'
        >
        <Box width={[ 1, 1/2 ]}>
          <Display>Skip the hassle of Strata management.</Display>
          <LargeText>At VJ Ray Strata, we understand how valuable piece of mind is.</LargeText>
        </Box>
      </Flex>
    </Container>

    <QuickQuoteForm />
  </Root>
);

export default Hero