import styled from 'styled-components';
import Button from './shared/Button.js';
import Link from 'next/link';

import theme from '../css/theme.js';

const SiteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: ${theme.colors.beige};
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
      <a href='/'>
        <Logo src='/static/img/logo.svg' />
      </a>
    </Link>

    <Nav>
      <Link href='/who-we-are'>
        Who we are
      </Link>
      <Link href='/'>
        What we do for you
      </Link>
      <Link href='/'>
        Useful info
      </Link>
      <Link href='/'>
        Contact us
      </Link>
      <Link href='/'>
        1300 667 123
      </Link>
    </Nav>

    <Nav>
      <Link href='/signin'>
        <Button bordered>Sign in</Button>
      </Link>
    </Nav>
  </SiteHeader>
);

export default Header;
