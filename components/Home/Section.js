import styled from 'styled-components';

import Block from '../shared/Block.js';
import Container from '../shared/Container.js';
import {
  HeaderHr
} from '../shared/Text.js';

const SectionWrapper = (props) => (
  <Block textCenter color={props.color}>
    <Container sm>
      <HeaderHr>{props.section.fields.primaryHeader}</HeaderHr>
      <h1>{props.section.fields.secondaryHeader}</h1>
      <p>{props.section.fields.content}</p>

      {props.children}
    </Container>
  </Block>
);

export default SectionWrapper;
