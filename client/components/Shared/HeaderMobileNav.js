import PropTypes from 'prop-types'
import Link from 'next/link'
import styled, { css } from 'styled-components'

import theme from '../theme'
import { headerFade } from './animationConstants'

import { Flex } from 'rebass'
import Container from './Container'
import { Display } from './Headline'
import Button from './Button'
import { ButtonOutline } from './Buttons'
import { Text } from './Text'

const MobileNav = styled(Container)`
  a {
    margin: 0.5rem 0;
  }

  @media (max-width: ${theme.breakpoints[1]}em) {
    padding: 0;
  }
`

const MobileNavFlex = Flex.extend`
  align-content: flex-end;
  opacity: 0;
  transform: translateY(-32px);

  ${props => props.isVisible && css`
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity ${headerFade.duration}s ease-in-out,
      transform ${headerFade.duration}s ease-in-out;
  `}
`

const MobileModal = Flex.extend`
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity ${headerFade.duration}s ease-in-out,
    transform 0s ease-in-out 0s;
  background-color: ${theme.colors.offWhite};
  bottom: 0;
  left: 0;
  padding: ${theme.space[3]}px;
  position: fixed;
  right: 0;
  top: ${theme.blockHeights.navBar};
  z-index: 15;

  ${props => !props.isVisible && css`
    opacity: 0;
    transform: translateY(100vh);
    transition:
      opacity ${headerFade.duration}s ease-in-out,
      transform 0s ease-in-out ${headerFade.duration}s;
  `}
`

const LinkText = props =>
  <Display
    align='left'
    color='text'
    isActive={props.isActive}
    children={props.children}
  />


const HeaderMobileNav = props => (
  <MobileModal
    onClick={props.handleModalClick}
    isVisible={props.isVisible}
    column
  >
    <MobileNav textCenter>
      <MobileNavFlex column isVisible={props.isVisible}>
        {props.navItems.map((item) => {
          return (
            <Link href={item.href}>
              <a><LinkText>{item.label}</LinkText></a>
            </Link>
          )
        })}

        <Link href='/let-us-help-you'>
          <a>
            <Text align='left' font='textRegular' mt={1}>
              <ButtonOutline icon children='Get a fast quote' />
            </Text>
          </a>
        </Link>

      </MobileNavFlex>
    </MobileNav>
  </MobileModal>
)

HeaderMobileNav.propTypes = {
  navItems: PropTypes.array,
  isVisible: PropTypes.bool.isRequired,
  handleModalClick: PropTypes.func.isRequired,
};

HeaderMobileNav.defaultProps = {
  navItems: [],
};

export default HeaderMobileNav
