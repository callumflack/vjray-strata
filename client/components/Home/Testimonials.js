import styled from 'styled-components';
import theme from '../theme.js';
import { Box, Flex } from '../styled-grid';
import { Text, SmallText } from '../styled-elements/Text';

// const Testimonial = styled.div`
//   display: flex;
//   justify-content: ;
//   flex-direction: column;
//   margin-top: 2.5rem;
//   width: 275px;
// `;

const Testimonial = styled(Flex)`
  margin: 1rem 2rem;
  width: 290px;
`

const Quote = styled(SmallText)`
  border: 1px solid ${theme.colors.text20};
  display: inline-block;
  margin-bottom: 1.5rem;
  padding: 1.3rem 2rem 1.4rem;
  text-align: left;
`

const Image = styled.img`
  display: inline-block;
`

const Author = styled(Flex)`
  margin-left: 1.5rem;
`

const Testimonials = (props) => (
  <Flex justify='center' wrap>

    {Array(5).fill(1).map(() =>
    <Testimonial justify='center' column>
      <Quote>Sit sint quae officia asperiores provident, iusto similique Eligendi commodi quaerat provident voluptas sunt.</Quote>

      <Flex mx='auto'>
        <Image src='http://lorempixel.com/60/60' />
        <Author justify='flex-end' column>
          <SmallText>Dennis Sievers</SmallText>
          <SmallText color='text70'>Campsie</SmallText>
        </Author>
      </Flex>
    </Testimonial>
    )}

  </Flex>
);

export default Testimonials;