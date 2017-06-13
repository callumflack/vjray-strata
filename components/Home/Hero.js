import styled from 'styled-components';

import Block from '../shared/Block.js';
import Container from '../shared/Container.js';

const Wrapper = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  margin-right: 2rem;
`;

const Title = styled.h1`
  color: #D3145A;
`;

const QuoteForm = styled.form`
  position: relative;
  height: 3.5rem;
  max-width: 500px;
  margin-top: 2rem;
`;

const QuoteFormInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
  background-color: #fff;
  border: 1px solid #ccc;
`;

// Use anchor component?
const QuoteFormButton = styled.button`
  --gutter: 0.4rem;
  position: absolute;
  right: var(--gutter);
  top: var(--gutter);
  padding: 0 1.5rem;
  height: calc(100% - (var(--gutter) * 2));
  background-color: #D3145A;
  color: #fff;
  border: 0;
  font-weight: bold;
`;

const Hero = () => (
  <Block altBackground>
    <Container>
      <Wrapper>
        <TextWrapper>
          <Title>We understand how valuable piece of mind is.</Title>
          <p>Leave your apartment asset to VJ Ray and skip the hassle of management and maintenace.</p>

          <QuoteForm>
            <QuoteFormInput placeholder='Enter your email' />
            <QuoteFormButton type='submit'>Get a quote today</QuoteFormButton>
          </QuoteForm>
        </TextWrapper>

        <img src='http://lorempixel.com/400/300' />
      </Wrapper>
    </Container>
  </Block>
);

export default Hero;
