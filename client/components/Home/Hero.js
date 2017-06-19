import styled from 'styled-components';

import theme from '../../css/theme.js';
import Block from '../shared/Block.js';
import Container from '../shared/Container.js';
import QuickQuoteForm from './QuickQuoteForm.js';
import {
  Paragraph,
} from '../shared/Text.js';


const BlockPosRelative = styled(Block)`
  position: relative;
`;

const Flex = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  margin-right: 2rem;
`;

const Title = styled.h1`
  color: ${theme.colors.brand};
`;


const Hero = () => (
  <BlockPosRelative altBackground>
    <Container>
      <Flex>
        <TextWrapper>
          <Title>Skip the hassle of Strata management.</Title>
          <Paragraph lg>At VJ Ray Strata, we understand how valuable piece of mind is.</Paragraph>
        </TextWrapper>

        <img src='http://lorempixel.com/400/300' />
      </Flex>
    </Container>

    <QuickQuoteForm />
  </BlockPosRelative>
);

export default Hero;
