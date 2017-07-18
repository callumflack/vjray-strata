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
// import { rgba } from 'polished';


// rgba(255,255,255,0.9)

const headerHeight = '121px';
const fade = {
  duration: 0.25,
  delay: 0.25,
};

const Root = styled(Flex)`
  --Header-background-color: white;
  --Header-border-color: rgba(88, 88, 112, 0.25);

  background-color: var(--Header-background-color);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: var(--Header-border-color);
  color: ${theme.colors.text};
  height: ${headerHeight};
  opacity: 1;
  position: fixed;
  top: 0;
  transform: translate3d(0, 0, 0) translateY(0px);
  transition:
    opacity ${fade.duration}s ease-in-out ${fade.delay}s;
    transform 800ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  z-index: 3;

  ${props => props.blue && css`
    color: ${theme.colors.brandAlt};
  `}

  ${props => props.clear && css`
    --Header-background-color: transparent;
  `}

  ${props => props.invert && css`
    --Header-border-color: rgba(255, 255, 255, 0.25);

    a,
    a span {
      color: white;
    }
  `}

  ${props => props.isHidden  && css`
    ${'' /* transition: opacity 0.3s, visibility 0s 0.3s; */}
    opacity: 0;
    transform: translate3d(0, 0, 0) translateY(${-1 * headerHeight});
  `}

  ${props => props.hasScrolledDown  && css`
      background-color: ${theme.colors[props.bg] || theme.colors.white};
      box-shadow:
        0 16px 24px 2px rgba(0,0,0,0.06),
        0 6px 30px 5px rgba(0,0,0,0.03);
      color: ${theme.colors[props.color] || theme.colors.text};
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
  padding-top: ${headerHeight};
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

const LinkTextRoot = hoc('span').extend``

const LinkText = props =>
  <LinkTextRoot
    font='textRegular'
    fontSize={[ 2, 3 ]}
    color='inherit'
    {...props}
  />

const StyledDivider = styled(Divider)`
  margin-left: 0;
`

const MobileLinkText = props =>
  <LinkText fontSize={4} {...props} />



class Header extends React.Component {
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

  handleScroll() {
    const scrollPos = window.scrollY;
    const previousScrollPos = this.state.previousScrollPos;
    const scrolledDown = scrollPos > previousScrollPos;

    if (scrolledDown && !this.state.hasScrolledDown) {
      // Extra timeout to give leeway for the unpredicatable duration of
      // operations such as waiting for the css transition to be triggered
      const leeway = 0.10;

      setTimeout(() => {
        this.setState({
          hasScrolledDown: scrolledDown,
        });
      }, (fade.duration + fade.delay + leeway) * 1000);
    }

    this.setState({
      previousScrollPos: scrollPos,
      isVisible: !scrolledDown,
    });
  }

  handleModalClick() {
    this.setState({
      isModalVisible: false,
    });
  }

  handleModalTriggerClick() {
    this.setState({
      isModalVisible: true,
    });
  }

  render() {
    return (
      <div>
        <Root
          align='center'
          justify='space-between'
          px={3}
          blue={this.props.blue}
          clear={this.props.clear}
          invert={this.props.invert}
          isHidden={!this.state.isVisible}
          hasScrolledDown={this.state.hasScrolledDown}
        >

          <Link href='/'>
            <a><IconLogo /></a>
          </Link>

          <Nav hideAtMobile>
            <Link href='/'>
              <a><LinkText>Home</LinkText></a>
            </Link>
            <Link href='/who-we-are'>
              <a><LinkText>Who we are</LinkText></a>
            </Link>
            <Link href='/'>
              <a><LinkText>What we do for you</LinkText></a>
            </Link>
            <Link href='/useful-info'>
              <a><LinkText>Useful info</LinkText></a>
            </Link>
            <Link href='/contact'>
              <a><LinkText>Contact us</LinkText></a>
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
            <a href='#' onClick={this.handleModalTriggerClick}>
              <LinkText fontSize={5}>
                &#9776;
              </LinkText>
            </a>
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
            <Root
              align='center'
              justify='space-between'
              px={3}
              clear={this.props.clear}
              invert={this.props.invert}
            >
              <Box py={3}>
                <Link href='/'>
                  <a><IconLogo /></a>
                </Link>
              </Box>

              <Nav>
                <a href='#'>
                  <LinkText fontSize={7}>
                    &times;
                  </LinkText>
                </a>
              </Nav>
            </Root>

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