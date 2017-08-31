import styled from 'styled-components';
import theme from '../theme.js';
import { Box, Flex } from '../styled-grid';
import { Text, SmallText } from '../styled-elements/Text';
import CoverImage from '../styled-elements/CoverImage'

const Root = styled(Flex)`
  height: auto;
  position: relative;
`;

const HeroQuotes = (props) => (
  <Root justify='center'>
    <CoverImage homeMap src='http://res.cloudinary.com/pw-img-cdn/image/upload/v1504164157/home-sydney-map_jlaxzd.jpg' />
    { props.children }
  </Root>
);

export default HeroQuotes;