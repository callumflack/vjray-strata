import styled from 'styled-components';

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

const HeaderBold = styled.h2`
  font-weight: bold;
`;

const TextLarge = styled.p`
  font-size: 1.35rem;
  opacity: 0.8;
`;

export { HeaderHr, HeaderBold, TextLarge };
