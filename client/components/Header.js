import Link from 'next/link';
import styled from 'styled-components';
import { Flex, Box } from './styled-grid';
import { hoc } from './styled-system/styled-components'
import { Texty, InlineText } from './shared/Texty.js';
import Button from './shared/Button.js';
import theme from './theme.js';

const Root = styled(Flex)`
  align-items: center;
  padding: 2rem;
  background-color: transparent;
  border-bottom: 1px solid ${theme.colors.text20};
`;

const Logo = styled.img`
  height: 3.5rem;
  opacity: 0.7;
`;

const Nav = styled.nav`
  a:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const LinkText = props => (
  <InlineText fontSize={[ 2, 3 ]} medium>
    { props.children }
  </InlineText>
)

const Header = () => (
  <Root align='space-between' justify='space-between'>
    <Link href='/'>
      <a>
        <Logo src='/static/img/logo.svg' />
      </a>
    </Link>

    <Nav>
      <Link href='/who-we-are'>
        <LinkText>Who we are</LinkText>
      </Link>
      <Link href='/'>
        <LinkText>What we do for you</LinkText>
      </Link>
      <Link href='/'>
        <LinkText>Useful info</LinkText>
      </Link>
      <Link href='/'>
        <LinkText>Contact us</LinkText>
      </Link>
      <Link href='/'>
        <LinkText>1300 667 123</LinkText>
      </Link>
    </Nav>

    <Nav>
      <Link href='/signin'>
        <a>
          <Button bordered>Sign in</Button>
        </a>
      </Link>
    </Nav>
  </Root>
);

export default Header;