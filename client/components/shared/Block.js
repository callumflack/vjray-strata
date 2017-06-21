import styled, {css} from 'styled-components';

import theme from '../../css/theme.js';

const Block = styled.section`
  background-color: ${props => props.beigeBackground ? theme.colors.beige : 'inherit'};
  color: ${props => props.color || 'inherit'};
  padding: 7rem 3rem;
  position: relative;

  @media (max-width: 600px) {
    padding: 4rem 2rem;
  }
`;

export default Block;