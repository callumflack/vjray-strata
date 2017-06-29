import styled, {css} from 'styled-components';
import { Flex, Box } from '../styled-grid';
import { hoc } from '../styled-system/styled-components'
import theme from '../theme.js';
import Container from '../shared/Container.js';

const Root = hoc(Box).extend`
  ${props => props.bg && css`
    background-color: ${theme.colors[props.color]};
  `}
`;

Root.Section = Root.withComponent('section')

const Block = (props) => (
  <Root.Section bg={props.bg} px={3} py={[ 5, 6 ]}>
    <Container mw={props.width} textCenter={props.textCenter}>
      {props.children}
    </Container>
  </Root.Section>
);

export default Block;