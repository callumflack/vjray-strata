import styled from 'styled-components'
// import { Flex, Box } from 'grid-styled';
import { Flex, Box } from '../styled-grid';
import { hoc } from '../styled-system/styled-components'
import theme from '../theme.js';

import { LargeText } from '../shared/Text.js';
import { Headline, Display } from '../shared/Headline.js';
import Container from '../shared/Container.js';
import QuickQuoteForm from './QuickQuoteForm.js';

const Root = styled(Box)`
  --Header-height: 121px;

  align-items: center;
  background-color: ${theme.colors.beige};
  height: calc(50vh + var(--Header-height));
  padding-top: var(--Header-height);
  position: relative;
`

const Image = styled(Box)`
  background-image: url('static/img/home-hero.jpg');
  background-position: 30% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  @media (min-width: 1024px) {
    background-size: contain;
    background-position: 100% 100%;
  }

  @media (min-width: 1280px) {
    background-position: 85% 100%;
  }

  @media (min-width: 1536px) {
    background-position: 60% 100%;
  }
`

const HeroBox = () => (
  <Root px={3}>
    <Image />

    <Container mx='lg' relative>
      <Flex
        style={{ height: '50vh' }}
        align='center'
        >
        <Box width={[ 5/12, 1/2 ]} ml={[ null, 3 ]}>
          <Display>Skip the hassle of Strata management.</Display>
          <LargeText>At VJ Ray Strata, we understand how valuable piece of mind is.</LargeText>
        </Box>
      </Flex>
    </Container>

    <QuickQuoteForm />
  </Root>
);

export default HeroBox