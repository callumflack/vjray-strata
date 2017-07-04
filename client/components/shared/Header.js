import Link from 'next/link'
import styled, { css } from 'styled-components'
import { Flex, Box } from '../styled-grid'
import { hoc } from '../styled-system/styled-components'
import { IconLogo } from '../shared/Icons'
import { Text, InlineText } from '../shared/Text'
import Button from '../shared/Button'
import theme from '../theme'
// import { rgba } from 'polished';



// padding: 2rem;
// transform: translateY(var(--Header-height));

const Root = styled(Flex)`
  --Header-height: 121px;
  --Header-background-color: white;

  background-color: var(--Header-background-color);
  border-bottom: 1px solid rgba(88, 88, 112, 0.15);
  height: var(--Header-height);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  ${props => props.ruled && css`
    --Header-background-color: transparent;
  `}
`;

const Logo = styled.img`
  height: 3.5rem;
  opacity: 0.7;
`;

const Nav = styled.nav`
  a {
    cursor: pointer;
  }

  a:not(:last-child) {
    margin-right: 1.5rem;
  }

  ${props => props.hideAtMobile && css`
    @media (max-width: 699px) {
      display: none;
    }
  `}
`;

// const LinkText = Text.withComponent('span').extend`
const LinkTextRoot = hoc('span').extend``

const LinkText = props =>
  <LinkTextRoot font='displayRegular' fontSize={[ 2, 3 ]} color='text' {...props} />




const Header = () => (
  <Root align='center' justify='space-between' px={3}>
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
      <Link href='/'>
        <a><LinkText>Useful info</LinkText></a>
      </Link>
      <Link href='/'>
        <a><LinkText>Contact us</LinkText></a>
      </Link>
      <Link href='/'>
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
);

export default Header;