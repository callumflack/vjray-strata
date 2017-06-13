import styled from 'styled-components';
import Anchor from './shared/Anchor.js';
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

const Header = () => (
  <SiteHeader>
    <Link href='/'>
      <Anchor vSpace>V.J.Ray</Anchor>
    </Link>

    <nav>
      <Link href='/'>
        <Anchor vSpace>Who we are</Anchor>
      </Link>
      <Link href='/'>
        <Anchor vSpace>What we do for you</Anchor>
      </Link>
      <Link href='/'>
        <Anchor vSpace>Useful info</Anchor>
      </Link>
      <Link href='/'>
        <Anchor vSpace>Contact us</Anchor>
      </Link>
      <Link href='/'>
        <Anchor vSpace>1300 667 123</Anchor>
      </Link>
    </nav>

    <nav>
      <Link href='/signin'>
        <Anchor bordered>Sign in</Anchor>
      </Link>
    </nav>
  </SiteHeader>
);

export default Header;
