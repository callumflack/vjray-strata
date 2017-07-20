import Link from 'next/link'

import contactDetails from '../constants'

import theme from '../theme'
import styled, { css } from 'styled-components'
import { Flex, Box } from '../styled-grid'
import hoc from '../styled-elements/hoc'
import { IconLogo } from '../styled-elements/Icons'
import { Text, InlineText, Divider } from '../styled-elements/Text'
import Container from '../styled-elements/Container'
import Button from '../styled-elements/Button'

const headerHeight = '121px';
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
  height: ${headerHeight};
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
    transform: translate3d(0, 0, 0) translateY(-${headerHeight});
    transition:
      opacity ${fade.duration}s ease-in-out,
      transform ${fade.duration}s ease-in-out;
  `}

  ${props => props.hasScrolledDown && css`
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

const AnimatedHamburger = styled.div`
  --bar-height: 5px;
  --bar-spacing: 14px;

  width: 40px;
  height: calc((var(--bar-spacing) * 2) + var(--bar-height));
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: var(--bar-height);
    width: 100%;
    background: currentColor;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }

  span:nth-child(1) {
    top: 0;
  }

  span:nth-child(2), span:nth-child(3) {
    top: var(--bar-spacing);
  }

  span:nth-child(4) {
    top: calc(var(--bar-spacing) * 2);
  }

  ${props => props.isOpen && css`
    span:nth-child(1) {
      top: var(--bar-spacing);
      width: 0%;
      left: 50%;
    }

    span:nth-child(2) {
      transform: rotate(45deg);
    }

    span:nth-child(3) {
      transform: rotate(-45deg);
    }

    span:nth-child(4) {
      top: var(--bar-spacing);
      width: 0%;
      left: 50%;
    }
  `}
`;

const Nav = styled.nav`
  a {
    cursor: pointer;
  }

  a:not(:last-child) {
    margin-right: 1.5rem;
  }

  ${props => props.hideAtDesktop && css`
    @media (min-width: 699px) {
      display: none;
    }
  `}

  ${props => props.hideAtMobile && css`
    @media (max-width: 699px) {
      display: none;
    }
  `}
`;

const MobileModal = Flex.extend`
  position: fixed;
  z-index: 15;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  top: ${headerHeight};
  background-color: #fff;

  ${props => !props.isVisible && css`
    display: none;
  `}
`;

const MobileNav = styled.nav`
  a {
    margin: 0.4rem 0;
  }
`;

const LinkTextRoot = hoc('span').extend`
  ${props => props.isActive && css`
    border-bottom: 2px solid ${theme.colors.text};
  `}
`

// `

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
          px={3}
          color={this.props.color}
          clear={this.props.clear}
          reverseBorder={this.props.reverseBorder}
          isHidden={!this.state.isVisible}
          hasScrolledDown={this.state.hasScrolledDown}
          isModalVisible={this.state.isModalVisible}
        >
          <Link href='/'>
            <a><IconLogo /></a>
          </Link>

          <Nav hideAtMobile>
            <Link href='/'>
              <a><LinkText isActive={this.props.pathname === '/'}>Home</LinkText></a>
            </Link>
            <Link href='/who-we-are'>
              <a><LinkText isActive={this.props.pathname === '/who-we-are'}>Who we are</LinkText></a>
            </Link>
            <Link href='/'>
              <a><LinkText isActive={this.props.pathname === '/what we do'}>What we do for you</LinkText></a>
            </Link>
            <Link href='/useful-info'>
              <a><LinkText isActive={this.props.pathname === '/useful-info'}>Useful info</LinkText></a>
            </Link>
            <Link href='/contact'>
              <a><LinkText isActive={this.props.pathname === '/contact'}>Contact us</LinkText></a>
            </Link>
            <StyledDivider />
            <Link href='tel:{contactDetails.phone}'>
              <a><LinkText>{contactDetails.phone}</LinkText></a>
            </Link>
          </Nav>

          <Nav hideAtMobile>
            <Link href='/signin'>
              <a><LinkText>
                <Button invert>Sign in</Button>
              </LinkText></a>
            </Link>
          </Nav>

          <Nav hideAtDesktop>
            <AnimatedHamburger onClick={this.handleModalTriggerClick} isOpen={this.state.isModalVisible}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </AnimatedHamburger>
          </Nav>
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
                <Link href='/'>
                  <a><MobileLinkText>What we do for you</MobileLinkText></a>
                </Link>
                <Link href='/useful-info'>
                  <a><MobileLinkText>Useful info</MobileLinkText></a>
                </Link>
                <Link href='/contact'>
                  <a><MobileLinkText>Contact us</MobileLinkText></a>
                </Link>
                <Divider />
                <Link href='tel:1300-667-123'>
                  <a><MobileLinkText>1300 667 123</MobileLinkText></a>
                </Link>
              </Flex>
            </Container>
          </MobileNav>
        </MobileModal>

      </div>
    )
  }
}

export default Header;