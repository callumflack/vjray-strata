import Link from 'next/link'
import PropTypes from 'prop-types'

import { contactDetails, icons } from '../constants'
import theme from '../theme'

import styled, { css } from 'styled-components'
import { Flex, Box } from '../styled-grid'

import hoc from '../styled-elements/hoc'
import { IconLogo } from '../styled-elements/Icons'
import Icon from '../styled-elements/Icon';
import { Text, InlineText, Divider } from '../styled-elements/Text'
import Container from '../styled-elements/Container'
import Button from '../styled-elements/Button'
import Hamburger from './Hamburger'


const fade = {
  duration: 0.25,
  delay: 0.25,
};

const Root = styled(Flex)`
  --Header-background-color: white;
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
    opacity ${fade.duration}s ease-in-out ${fade.delay}s,
    transform ${fade.duration}s ease-in-out ${fade.delay}s;
  width: 100%;
  z-index: 3;

  ${props => props.color && css`
    color: ${theme.colors[props.color] || theme.colors.text};
  `}

  ${props => props.clear && css`
    --Header-background-color: transparent;
  `}

  ${props => props.reverseBorder && css`
    --Header-border-color: rgba(255, 255, 255, 0.15);
  `}

  ${props => props.isHidden && css`
    opacity: 0;
    transform: translate3d(0, 0, 0) translateY(-${theme.blockHeights.navBar});
    transition:
      opacity ${fade.duration}s ease-in-out 1s,
      transform ${fade.duration}s ease-in-out 1s;
  `}

  ${props => props.hasScrolledDown && css`
    --Header-border-color: transparent;
    background-color: ${theme.colors[props.bg] || theme.colors.white};
    box-shadow:
      0 16px 24px 2px rgba(0,0,0,0.03),
      0 6px 30px 5px rgba(0,0,0,0.03);
    color: ${theme.colors.text};
    transition:
      opacity ${fade.duration}s ease-in-out,
      transform ${fade.duration}s ease-in-out;
  `}

  ${props => props.isModalVisible && css`
    transition: all 0s;
  `}
`;

const ResponsiveToggle = styled(Box)`
  ${props => props.hideAtDesktop && css`
    @media (min-width: 1024px) {
      display: none;
    }
  `}

  ${props => props.hideAtMobile && css`
    @media (max-width: 1024px) {
      display: none;
    }
  `}
`
const DesktopNav = ResponsiveToggle.extend`
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;

  a {
    cursor: pointer;
    line-height: ${theme.blockHeights.navBar};
  }

  a:not(:last-child) {
    margin-right: 1.5rem;
  }

  ${props => props.hideAtDesktop && css`
    @media (min-width: 1024px) {
      display: none;
    }
  `}

  ${props => props.hideAtMobile && css`
    @media (max-width: 1024px) {
      display: none;
    }
  `}
`;

const MobileModal = Flex.extend`
  background-color: white;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: ${theme.blockHeights.navBar};
  z-index: 15;

  ${props => !props.isVisible && css`
    display: none;
  `}
`;

const MobileNav = styled.nav`
  a {
    margin: 0.5rem 0;
  }
`;

const LinkTextRoot = hoc('span').extend`
  ${props => props.isActive && css`
    border-bottom: 2px solid currentColor;
    padding-bottom: 33px;
  `}
`

const LinkText = props =>
  <LinkTextRoot
    font='textRegular'
    fontSize={[ 2, 3 ]}
    color='inherit'
    {...props}
  />

const StyledDivider = styled(Divider)`
  margin-left: 0 !important;
`

const MobileLinkText = props =>
  <LinkText fontSize={4} {...props} />














/**
  final component
**/

class Header extends React.Component {
  static timeout = null;

  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this)
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleModalTriggerClick = this.handleModalTriggerClick.bind(this);

    this.state = {
      isVisible: true,
      hasScrolledDown: false,
      previousScrollPos: 0,
      isModalVisible: false,
    };
  }

  componentDidMount() {
    const scrollPos = window.scrollY;
    const previousScrollPos = this.state.previousScrollPos;
    this.setState({ previousScrollPos: scrollPos });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const scrollPos = window.scrollY;
    const previousScrollPos = this.state.previousScrollPos;
    const scrolledDown = scrollPos > previousScrollPos;

    if (this.state.isModalVisible) return;

    this.setState({
      previousScrollPos: scrollPos,
      isVisible: !scrolledDown,
    });

    if (scrollPos <= 200) {
      return this.setState({
        hasScrolledDown: false,
      });
    }

    if (scrolledDown && !this.state.hasScrolledDown) {
      this.setState({
        hasScrolledDown: scrolledDown,
      });
    }
  }

  handleModalClick() {
    const scrollPos = window.scrollY;

    if (scrollPos <= 200) {
      this.setState({
        hasScrolledDown: false,
      });
    }

    this.setState({
      isModalVisible: false,
    });
  }

  handleModalTriggerClick() {
    const scrollPos = window.scrollY;
    const areHidingModel = this.state.isModalVisible;

    this.setState({
      isVisible: true,
      hasScrolledDown: !areHidingModel || !(areHidingModel && scrollPos <= 200),
      isModalVisible: !this.state.isModalVisible,
    });
  }





  render() {
    return (
      <div>
        <Root
          align='center'
          justify='space-between'
          px={[2,3]}
          color={this.props.color}
          clear={this.props.clear}
          reverseBorder={this.props.reverseBorder}
          isHidden={!this.state.isVisible}
          hasScrolledDown={this.state.hasScrolledDown}
          isModalVisible={this.state.isModalVisible}
        >
          <DesktopNav hideAtMobile w={5/9} style={{ textAlign: 'center' }}>
            <Nav>
              <Link href='/who-we-are'>
                <a><LinkText isActive={this.props.pathname === '/who-we-are'}>Who we are</LinkText></a>
              </Link>
              <Link href='/what-we-do-for-you'>
                <a><LinkText isActive={this.props.pathname === '/what-we-do-for-you'}>What we do for you</LinkText></a>
              </Link>
              <Link href='/useful-info'>
                <a><LinkText isActive={this.props.pathname === '/useful-info'}>Useful info</LinkText></a>
              </Link>
              <Link href='/contact'>
                <a><LinkText isActive={this.props.pathname === '/contact'}>Contact us</LinkText></a>
              </Link>
              {/* <StyledDivider />
              <Link href='tel:{contactDetails.phone}'>
              <a><LinkText>{contactDetails.phone}</LinkText></a>
              </Link> */}
            </Nav>
          </DesktopNav>

          <Box>
            <Link href='/'>
              <a><Icon
                color={this.props.color}
                size='80'
                icon={icons.logo}
              /></a>
            </Link>
          </Box>

          <ResponsiveToggle hideAtMobile p={2}>
            <Nav style={{ textAlign: 'right' }}>
              <Link href='tel:{contactDetails.phone}'>
                <a><LinkText>
                  <Button invert>T {contactDetails.phone}</Button>
                </LinkText></a>
              </Link>
            </Nav>
          </ResponsiveToggle>

          <ResponsiveToggle hideAtDesktop p={2}>
            <Hamburger onClick={this.handleModalTriggerClick} isOpen={this.state.isModalVisible}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Hamburger>
          </ResponsiveToggle>

        </Root>

        <MobileModal
          onClick={this.handleModalClick}
          isVisible={this.state.isModalVisible}
          align='center'
          justify='center'
          column
          bg='brand'
        >
          <MobileNav>
            <Container textCenter>
              <Flex column>
                <Link href='/'>
                  <a><MobileLinkText>Home</MobileLinkText></a>
                </Link>
                <Link href='/who-we-are'>
                  <a><MobileLinkText>Who we are</MobileLinkText></a>
                </Link>
                <Link href='/what-we-do-for-you'>
                  <a><MobileLinkText>What we do for you</MobileLinkText></a>
                </Link>
                <Link href='/useful-info'>
                  <a><MobileLinkText>Useful info</MobileLinkText></a>
                </Link>
                <Link href='/contact'>
                  <a><MobileLinkText>Contact us</MobileLinkText></a>
                </Link>
                <Divider />
                <Link href='tel:{contactDetails.phone}'>
                  <a><MobileLinkText>{contactDetails.phone}</MobileLinkText></a>
                </Link>

              </Flex>
            </Container>
          </MobileNav>
        </MobileModal>

      </div>
    )
  }
}

Header.propTypes = {
  color: PropTypes.string,
  clear: PropTypes.bool,
  reverseBorder: PropTypes.bool,
  pathname: PropTypes.string,
};

Header.defaultProps = {
  color: 'text',
  clear: false,
  reverseBorder: false,
};

export default Header;