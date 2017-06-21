import styled from 'styled-components';
import Button from './shared/Button.js';
import Link from 'next/link';

import theme from '../css/theme.js';

const SiteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: ${theme.colors.alt};
  border-bottom: 2px solid #E3DEDB;
  font-weight: bold;
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

const Header = () => (
  <SiteHeader>
    <Link href='/'>
      <a>
        <Logo src='/static/img/logo.svg' />
      </a>
    </Link>

    <Nav>
      <Link href='/who-we-are'>
        <a>Who we are</a>
      </Link>
      <Link href='/'>
        <a>What we do for you</a>
      </Link>
      <Link href='/'>
        <a>Useful info</a>
      </Link>
      <Link href='/'>
        <a>Contact us</a>
      </Link>
      <Link href='/'>
        <a>1300 667 123</a>
      </Link>
    </Nav>

    <Nav>
      <Link href='/signin'>
        <a>
          <Button bordered>Sign in</Button>
        </a>
      </Link>
    </Nav>
  </SiteHeader>
);

export default Header;
