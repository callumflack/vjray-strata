import styled, {css} from 'styled-components';

import theme from '../../css/theme.js';

const HrWrapper = styled.h4`
  margin: auto;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  display: inline-block;
`;

const HeaderHr = (props) => (
  <HrWrapper>
    {props.children}
    <hr />
  </HrWrapper>
);

const Paragraph = styled.p`
  ${props => props.lg && css`
    font-size: ${theme.text.lg};
  `}

  ${props => props.transparent && css`
    opacity: ${theme.text.transparent};
  `}
`;

export { HeaderHr, Paragraph };
