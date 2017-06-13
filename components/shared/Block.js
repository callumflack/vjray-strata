import styled, {css} from 'styled-components';

const Block = styled.section`
  padding: 7rem 3rem;
  background-color: ${props => props.altBackground ? '#F6EFE9' : 'inherit'};
  color: ${props => props.color ? props.color : 'inherit' };

  @media (max-width: 600px) {
    padding: 4rem 2rem;
  }

  ${props => props.textCenter && css`
    text-align: center;
  `}
`;

export default Block;
