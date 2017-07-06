import styled from 'styled-components';
import theme from '../theme.js';
import { Box, Flex } from '../styled-grid';
import { Text, SmallText } from '../styled-elements/Text';


const StyledFlex = styled(Flex)`
  margin: 1rem 2rem;
  position: relative;
  width: 290px;
`

const Quote = styled(SmallText)`
  background-color: white;
  border: 1px solid ${theme.colors.text};
  display: block;
  padding: 1.3rem 2rem 1.4rem;
  text-align: left;
`

const StyledBox = styled(Box)`
  position: relative;
  top: -1px;
`

const QuoteTriangle = styled('div')`
  color: ${theme.colors.text20};
  display: inline-block;
`

const Image = styled.img`
  display: inline-block;
`

const Author = styled(Flex)`
  ${'' /* margin-left: 1.5rem; */}
`

const Testimonials = (props) => (
  <Flex justify='center' wrap>

    {Array(5).fill(1).map(() =>
    <StyledFlex justify='center' column>
      <Quote>Sit sint quae officia asperiores provident, iusto similique Eligendi commodi quaerat provident voluptas sunt.</Quote>
      <StyledBox mb={1} ml={[ 3, 4 ]}>
        <QuoteTriangle>
          <svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <polygon fill="currentColor" points="18.59 0 1 17.59 1 0 0 0 0 20 20 0 18.59 0"/>
            <polygon fill="white" points="1 0 1 17.59 18.59 0 1 0"/>
          </svg>
        </QuoteTriangle>
      </StyledBox>

      <Box ml={[ 3, 4 ]}>
        {/* <Image src='http://lorempixel.com/60/60' /> */}
        <Author justify='flex-end' column>
          <SmallText font="textMedium" color='brand'>Dennis Sievers</SmallText>
          <SmallText color='brand'>Campsie</SmallText>
        </Author>
      </Box>
    </StyledFlex>
    )}

  </Flex>
);

export default Testimonials;