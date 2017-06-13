import styled, {css} from 'styled-components';

import theme from '../../css/theme.js';

const Block = styled.section`
  padding: 7rem 3rem;
  background-color: ${props => props.altBackground ? theme.colors.alt : 'inherit'};
  color: ${props => props.color ? props.color : 'inherit' };

  @media (max-width: 600px) {
    padding: 4rem 2rem;
  }

  ${props => props.textCenter && css`
    text-align: center;
  `}
`;

export default Block;
