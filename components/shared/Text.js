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

const textStyles = css`
  ${props => props.lg && css`
    font-size: ${theme.text.lg};
  `}

  ${props => props.transparent && css`
    opacity: ${theme.text.transparent};
  `}

  ${props => props.brand && css`
    color: ${theme.colors.brand};
  `}
`;

const Text = styled.span`
  ${textStyles}
`;

const Paragraph = styled.p`
  ${textStyles}
`;

const Uppercase = styled.span`
  text-transform: uppercase;
`;

export { HeaderHr, Text, Paragraph, Uppercase };
