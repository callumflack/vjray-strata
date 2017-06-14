import styled, {css} from 'styled-components';

import Block from '../shared/Block.js';
import Container from '../shared/Container.js';
import {
  HeaderHr,
} from '../shared/Text.js';

const BlockWrapper = styled(Block)`
  color: ${props => props.color || 'inherit'};

  ${props => props.sectionImg && css`
    padding-bottom: 0;
  `}
`;

const Section = (props) => (
  <BlockWrapper textCenter color={props.color} sectionImg={props.sectionImg}>
    <Container sm>
      {props.children}
    </Container>
  </BlockWrapper>
);

export default Section;
