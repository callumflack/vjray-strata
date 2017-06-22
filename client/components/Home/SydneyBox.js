import styled from 'styled-components'
import { Flex, Box } from '../styled-grid';
import { hoc } from '../styled-system/styled-components'
import theme from '../theme.js';

import Container from '../shared/Container.js';
import { Texty, LineBreak } from '../shared/Texty.js';
import { Display, Subheadline  } from '../shared/Headline.js';
import Button from '../shared/Button.js';

const Root = styled(Box)`
  background-image: url('static/img/sydney.jpg');
  background-position: 50% 90%;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${theme.colors.text70};
  height: 75vh;
  position: relative;

  &:before {
    background: rgba(247, 242, 236, 0.2);
    background-blend-mode: multiply;
    bottom: 0;
    content: " ";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`

const SydneyBox = () => (
  <Root px={3}>
    <Container width={theme.containers.rg} textCenter relative pt={[ 5, 6 ]}>
      <Subheadline>Dependable and effective</Subheadline>
      <Display>We help make high-density <LineBreak m='auto'>Sydney living great.</LineBreak></Display>
      <Container width={[ 1, 2/3 ]}>
        <Texty active mb={3}>This paragraph is about VJ Ray's history in Sydney, how they love Sydney and want to see it progress upwards and stave off housing uncertainty and more pain points that hit customer in the guts.</Texty>
        <Texty medium>
          <Button color='brand' invert icon>Watch video</Button>
        </Texty>
      </Container>
    </Container>
  </Root>
);

export default SydneyBox