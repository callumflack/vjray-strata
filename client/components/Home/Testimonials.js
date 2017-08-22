import styled from 'styled-components';
import theme from '../theme.js';
import { Box, Flex } from '../styled-grid';
import { Text, SmallText } from '../styled-elements/Text';


const StyledFlex = styled(Flex)`
  margin: 1rem;
  position: relative;

  @media (min-width: 768px) {
    margin: 1rem 2rem;
    width: 290px;
  }
`

const Quote = styled(SmallText)`
  background-color: white;
  border: 1px solid ${theme.colors.text40};
  display: block;
  padding: 1.3rem 1.4rem 1.4rem;
  text-align: left;

  @media (min-width: 768px) {
    padding: 1.3rem 2rem 1.4rem;
  }
`

const StyledBox = styled(Box)`
  position: relative;
  top: -1px;
`

const QuoteTriangle = styled('div')`
  color: ${theme.colors.text40};
  display: inline-block;
`

const Image = styled.img`
  display: inline-block;
`

const testimonialList = [{
  name: 'Jean',
  quote: 'We are happy with everything. Can\'t think of a change currently. Thanks guys, you are terrific.',
  location: 'Picnic Point',
}, {
  name: 'Andrew',
  quote: 'Nothing but great service and friendly staff.',
  location: 'Campsie',
}, {
  name: 'Neil',
  quote: 'Extremely happy with the service that is given to our complex.',
  location: 'Caringbah',
}, {
  name: 'Daniel & Ruth',
  quote: 'Love dealing with Sueallen. She responds immediately and organises what is needed or requested straight away.',
  location: 'Caringbah',
}, {
  name: 'Linda & Terry',
  quote: 'You guys are very quick to respond and handle things efficiently — no complaints here.',
  location: 'Jindabyne',
}];

const Testimonial = (props) => (
  <StyledFlex justify='center' column>
    <Quote color='text'>{props.testimonial.quote}</Quote>
    <StyledBox mb={1} ml={[ 3, 4 ]}>
      <QuoteTriangle>
        <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
          <polygon fill="currentColor" points="28.59 0 1 27.59 1 0 0 0 0 30 30 0 28.59 0"/>
          <polygon fill="white" points="1 0 1 27.59 28.59 0 1 0"/>
        </svg>
      </QuoteTriangle>
    </StyledBox>

    <Box ml={[ 3, 4 ]}>
      <Flex justify='flex-end' column>
        <SmallText font="textMedium" color='brandAlt'>{props.testimonial.name}</SmallText>
        <SmallText color='brandAlt'>{props.testimonial.location}</SmallText>
      </Flex>
    </Box>
  </StyledFlex>
);

const Testimonials = (props) => (
  <Flex justify='center' wrap>
    {testimonialList.map((testimonial, i) =>
      <Testimonial testimonial={testimonial} key={i} />
    )}
  </Flex>
);

export default Testimonials;