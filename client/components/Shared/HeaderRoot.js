import styled, { css } from 'styled-components'
import { Flex } from 'rebass'
import theme from '../theme'
import { headerFade } from './animationConstants'

const HeaderRoot = styled(({
  isHidden,
  isWindowScrolled,
  isModalVisible,
  children,
  ...rest
}) => (
  <Flex is="header" {...rest}>{children}</Flex>
))`
  --Header-background-color: rbga(255, 255, 255, 1);
  --Header-border-color: rgba(88, 88, 112, 0.15);
  background-color: var(--Header-background-color);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: var(--Header-border-color);
  height: ${theme.blockHeights.navBar};
  opacity: 1;
  position: fixed;
  top: 0;
  transform: translate3d(0, 0, 0) translateY(0px);
  transition:
    opacity ${headerFade.duration}s ease-in-out ${headerFade.delay}s,
    transform ${headerFade.duration}s ease-in-out ${headerFade.delay}s,
    background-color ${headerFade.duration}s ease-in-out,
    border ${headerFade.duration}s ease-in-out 0s;
  width: 100%;
  z-index: 3;

  @media (max-width: 512px) {
    button {
      padding: 0 0.75rem;
    }
  }

  @media (max-width: 320px) {
    button span {
      display: none;
    }
  }

  ${props => props.color && css`
    color: ${theme.colors[props.color] || theme.colors.text};
  `}

  ${props => props.clear && css`
    --Header-background-color: rbga(255, 255, 255, 0);
  `}

  ${props => props.reverseBorder && css`
    --Header-border-color: rgba(255, 255, 255, 0.15);
  `}

  ${props => props.isHidden && css`
    opacity: 0;
    transform: translate3d(0, 0, 0) translateY(-${theme.blockHeights.navBar});
    transition:
      opacity ${headerFade.duration}s ease-in-out 1s,
      transform ${headerFade.duration}s ease-in-out 1s,
      background-color ${headerFade.duration}s ease-in-out,
      border ${headerFade.duration}s ease-in-out 0s;
  `}

  ${props => props.isWindowScrolled && css`
    --Header-border-color: transparent;
    background-color: ${theme.colors[props.bg] || 'rgba(255, 255, 255, 1)'};
    box-shadow:
      0 16px 24px 2px rgba(0,0,0,0.03),
      0 6px 30px 5px rgba(0,0,0,0.03);
    color: ${theme.colors.text};
    transition:
      opacity ${headerFade.duration}s ease-in-out,
      transform ${headerFade.duration}s ease-in-out,
      background-color ${headerFade.duration}s ease-in-out,
      border ${headerFade.duration}s ease-in-out;
  `}

  ${props => props.isModalVisible && css`
    --Header-background-color: ${theme.colors.offWhite};
    --Header-border-color: rgba(88, 88, 112, 0.15);
    background-color: var(--Header-background-color);
    border-bottom: 1px solid var(--Header-border-color);
    transition:
      opacity ${headerFade.duration}s ease-in-out,
      transform ${headerFade.duration}s ease-in-out,
      background-color ${headerFade.duration}s ease-in-out,
      border ${headerFade.duration}s ease-in-out;
  `}

  ${props => props.invertTextOnMobile && css`
    @media (max-width: 512px) {
      --Header-border-color: rgba(255, 255, 255, 0.15);

      a,
      span {
        color: ${theme.colors.text20} !important;
      }

      button {
        border-color: --Header-border-color;
      }
    }
  `}
`;

export default HeaderRoot;