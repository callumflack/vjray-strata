import styled, {css} from 'styled-components';

import theme from '../../css/theme.js';

const Container = styled.div`
  --width: ${theme.containers.rg};

  margin: auto;
  max-width: calc(var(--width));

  ${props => props.sm && css`
    --width: ${theme.containers.sm};
  `}

  ${props => props.lg && css`
    --width: ${theme.containers.lg};
  `}
`;

export default Container;
