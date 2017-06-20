import styled, { css } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import theme from '../theme.js';

// https://github.com/styled-components/styled-components/pull/814
// const X = Y.withComponent('z').extend` ... `
// const Container = Y.withComponent('z').extend` ... `


// N.B. cause we're styling <Box> we get Box's methods too.
// ========================================================


// 1. extending
// https://www.styled-components.com/docs/basics#extending-styles
// ==============================================================
// const Container = styled(Box)`
//   margin: auto;
//   max-width: ${theme.containers.rg};
//   text-align: ${props => props.center ? 'center' : 'initial'};
// `;
//
// const ContainerSm = Container.extend`
//   max-width: ${theme.containers.sm};
// `;
//
// const ContainerLg = Container.extend`
//   max-width: ${theme.containers.lg};
// `;


// 2. add props
// https://www.styled-components.com/docs/basics#attaching-additional-props
// ========================================================================
// const Container = styled(Box).attrs({
//   // define dynamic attributes
//   // textalign: props => props.align || 'initial',
//   textalign: props => props.center,
//   // maxwidth: props => props.width || `${theme.containers.rg}`,
// })`
//   margin: auto;
//   text-align: ${props => props.center ? 'center' : 'initial'};
// `;


// 3. Barry's clean version
// ========================
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

// max-width: calc(var(--width));
// text-align: ${props => props.align};

// const Container = styled(Box)`
//   --width: ${theme.containers.rg};
//   margin: auto;
//   max-width: calc(var(--width));
//
//   ${props => props.sm && css`
//     --width: ${theme.containers.sm};
//   `}
//
//   ${props => props.lg && css`
//     --width: ${theme.containers.lg};
//   `}
//
//   ${props => props.textCenter && css`
//     text-align: center;
//   `}
// `;


export default Container

// export { Container, ContainerSm, ContainerLg };

// module.exports = {
//   Container,
//   ContainerSm,
//   ContainerLg
// }