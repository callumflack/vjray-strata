import PropTypes from 'prop-types'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { Absolute, Flex } from 'rebass'
import theme from '../theme'
import { Text } from './Texts'

const StyledFlex = styled(Flex)`
  a {
    cursor: pointer;
    line-height: ${theme.blockHeights.navBar};
  }

  a:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const LinkTextRoot = styled(Text)`
  ${props => props.isActive && css`
    border-bottom: 2px solid currentColor;
    padding-bottom: 33px;
  `}
`

const LinkText = props => (
  <LinkTextRoot
    is="span"
    family="textRegular"
    color="inherit"
    isActive={props.isActive}
    children={props.children}
  />
);

const HeaderDesktopNav = props => (
  <Absolute top right bottom left>
    <StyledFlex justify="center">
      {props.navItems
        .filter(item => item.label !== 'Home')
        .map(item => {
          return (
            <Link href={item.href}>
              <a><LinkText isActive={props.pathname === item.href}>{item.label}</LinkText></a>
            </Link>
          )
        })
      }
    </StyledFlex>
  </Absolute>
)

HeaderDesktopNav.propTypes = {
  navItems: PropTypes.array,
  pathname: PropTypes.string,
};

HeaderDesktopNav.defaultProps = {
  navItems: [],
  pathname: '',
};

export default HeaderDesktopNav
