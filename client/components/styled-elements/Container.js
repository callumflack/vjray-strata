import styled, { css } from 'styled-components';
import { Box } from '../styled-grid';
import theme from '../theme.js';


// https://www.styled-components.com/docs/basics#extending-styles?
// const ContainerSm = Container.extend` <= NAH


const Container = styled(Box)`
  margin-left: auto;
  margin-right: auto;

  ${props => props.fullSize && css`
    height: 100%;
    width: 100%;
  `}

  ${props => !props.mw && css`
    max-width: ${theme.containers.rg};
  `}

  ${props => props.mw && css`
    max-width: ${theme.containers[props.mw]};
  `}

  @media (max-width: 699px) {
    max-width: 100%;
  }

  ${props => props.relative && css`
    position: relative;
  `}

  ${props => props.center && css`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
  `}

  ${props => props.textCenter && css`
    text-align: center;
  `}
`;

export default Container