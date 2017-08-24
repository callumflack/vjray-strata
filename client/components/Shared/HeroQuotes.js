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

const Root = styled(Flex)`
  height: auto;
  position: relative;
`;

const StyledBox = styled(Box)`
  background-image: url('static/img/home-sydney-map.jpg');
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: cover;

  bottom: 0;
  left: 0;
  position: absolute;
  top: 30%;
  right: 0;

  @media (min-width: 1536px) { background-position-x: 0; }

  &:before {
    background-blend-mode: multiply;
    background-image:
      linear-gradient(
        to bottom,
        white,
        rgba(64, 64, 112, 0.1) 40%
      );
    bottom: 0;
    content: " ";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const TalkBox = (props) => (
  <Root justify='center'>
    <StyledBox />
    { props.children }
  </Root>
);

export default TalkBox;