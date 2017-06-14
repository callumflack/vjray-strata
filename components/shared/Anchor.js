import styled, {css} from 'styled-components';

import theme from '../../css/theme.js';

const Anchor = styled.a`
  font-weight: bold;

  ${props => props.bordered && css`
    display: inline-block;
    padding: 0.8rem 2rem;
    color: inherit;
    border: 1px solid currentColor;
    border-radius: 30px;
  `}

  ${props => props.fill && css`
    padding: 1.5rem 6rem;
    background-color: ${theme.colors.brand};
    color: #fff;
  `}

  ${props => props.vSpace && css`
    :not(:last-child) {
      margin-right: 1.5rem;
    }
  `}
`;

export default Anchor;
