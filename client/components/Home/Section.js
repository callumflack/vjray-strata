import styled, {css} from 'styled-components';
import { Flex, Box } from '../styled-grid';
import { hoc } from '../styled-system/styled-components'
import theme from '../theme.js';
import Container from '../shared/Container.js';

// background-color: ${props => props.color || 'inherit'};

// ${props => props.bg='beige' && css`
//    background-color: ${theme.colors.beige};
//  `}

const Root = hoc(Box).extend`
  ${props => props.bg && css`
     background-color: ${theme.colors.blue6};
   `}
`;

const Block = (props) => (
  <Root px={3} py={[ 5, 6 ]}>
    <Container textCenter>
      {props.children}
    </Container>
  </Root>
);

export default Block;