import Link from 'next/link'

import theme from '../theme'
import styled, { css } from 'styled-components'
import { Flex, Box } from '../styled-grid'
import { hoc } from '../styled-system/styled-components'
import { IconLogo } from '../styled-elements/Icons'
import { Text, InlineText, Divider } from '../styled-elements/Text'
import Button from '../styled-elements/Button'
// import { rgba } from 'polished';


// rgba(255,255,255,0.9)

const Root = styled(Flex)`
  --Header-height: 121px;
  --Header-background-color: white;
  --Header-border-color: rgba(88, 88, 112, 0.25);

  background-color: var(--Header-background-color);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: var(--Header-border-color);
  height: var(--Header-height);
  opacity: 1;
  position: fixed;
  top: 0;
  transform: translate3d(0, 0, 0) translateY(0px);
  transition:
    opacity 0.25s ease-in-out 0.25s,
    transform 800ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  z-index: 1;

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
    transform: translate3d(0, 0, 0) translateY(-121px);
  `}
`;

const Nav = styled.nav`
  a {
    cursor: pointer;
  }

  a:not(:last-child) {
    margin-right: 1.5rem;
  }

  ${props => props.clear && css`

  `}

  ${props => props.hideAtMobile && css`
    @media (max-width: 699px) {
      display: none;
    }
  `}
`;

// `this backticked comment stops Atom rendering the wrong colours after a s-c.

const LinkTextRoot = hoc('span').extend``

const LinkText = props =>
  <LinkTextRoot
    font='textRegular'
    fontSize={[ 2, 3 ]}
    color='text'
    {...props}
  />

const StyledDivider = styled(Divider)`
  margin-left: 0;
`



class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this)

    this.state = {
      isVisible: true,
      previousScrollPos: 0,
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

    this.setState({
      previousScrollPos: scrollPos,
      isVisible: !scrolledDown,
    });
  }

  render() {
    return (
      <Root
        align='center'
        justify='space-between'
        px={3}
        clear={this.props.clear}
        invert={this.props.invert}
        isHidden={!this.state.isVisible}>

        <Link href='/'>
          <a><IconLogo /></a>
        </Link>

        <Nav hideAtMobile>
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
          <Link href='tel:1300-667-123'>
            <a><LinkText>1300 667 123</LinkText></a>
          </Link>
        </Nav>

        <Nav>
          <Link href='/signin'>
            <a><LinkText>
              <Button invert>Sign in</Button>
            </LinkText></a>
          </Link>
        </Nav>
      </Root>
    )
  }
}

export default Header;