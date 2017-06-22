import styled, { css } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import theme from '../theme.js';


// https://www.styled-components.com/docs/basics#extending-styles?
// const ContainerSm = Container.extend`


const Container = styled(Box)`
  margin-left: auto;
  margin-right: auto;

  ${props => !props.width && css`
    max-width: ${theme.containers.rg};
  `}

  ${props => props.relative && css`
    position: relative;
  `}

  ${props => props.textCenter && css`
    text-align: center;
  `}
`;


export default Container