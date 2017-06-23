import Link from 'next/link';
import styled from 'styled-components';
import { Flex, Box } from './styled-grid';
import { hoc } from './styled-system/styled-components'
import { Text, InlineText, Anchor } from './shared/Text.js';
import Button from './shared/Button.js';
import theme from './theme.js';
import { rgba } from 'polished';

// padding: 2rem;
// transform: translateY(var(--Header-height));

const Root = styled(Flex)`
  --Header-height: 121px;

  background-color: transparent;
  border-bottom: 1px solid rgba(88, 88, 112, 0.15);
  height: var(--Header-height);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
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
`;

const LinkText = props => (
  <Anchor fontSize={[ 2, 3 ]} medium>
    { props.children }
  </Anchor>
)

const Header = () => (
  <Root align='center' justify='space-between' px={3}>
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
        <LinkText>
          <Button invert>Sign in</Button>
        </LinkText>
      </Link>
    </Nav>
  </Root>
);

export default Header;