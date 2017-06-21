import styled from 'styled-components';
import Link from 'next/link';

import theme from '../css/theme.js';
import Block from '../components/shared/Block.js';
import Container from '../components/shared/Container.js';
import {
  Text,
} from '../components/shared/Text.js';

const FooterBlock = styled(Block)`
  padding-top: 0;
  padding-bottom: 0;
`;

const FooterContainer = styled(Container)`
  border-top: 1px solid #eaeaea;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
`;

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 3.5rem;
  opacity: 0.7;
`;

const Sitemap = styled(Text)`
  display: flex;
  flex-direction: row;
`;

const Nav = styled.nav`
  :not(:last-child) {
    margin-right: 3rem
  }

  a {
    display: block;
    margin-top: 1rem;
    max-width: 200px;
  }
`;

const NavHeader = styled.div`
  font-weight: bold;
  margin-top: 2rem;
`;

const Copyright = styled.div`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  opacity: 0.7;
`;

const Legal = styled.div`
  margin-top: 3.5rem;
  opacity: 0.7;
`;

const VerticalDivider = styled.span`
  --spacing: 1rem;

  margin-left: var(--spacing);
  margin-right: var(--spacing);
  font-weight: bold;

  :after { content: ' \00b7'; }
`;

const Footer = () => (
  <FooterBlock>
    <FooterContainer>
      <Text transparent>
        <FooterWrapper>
          <div>
            <Link href='/'>
              <a>
                <Logo src='/static/img/logo.svg' />
              </a>
            </Link>
            <Copyright>&copy; 2017</Copyright>
          </div>

          <Sitemap>
            <Nav>
              <NavHeader>Who we are</NavHeader>

              <Link href='/'>
                <a>Our story</a>
              </Link>
              <Link href='/'>
                <a>The team</a>
              </Link>
            </Nav>

            <Nav>
              <NavHeader>What we do for you</NavHeader>

              <Link href='/'>
                <a>Services</a>
              </Link>
              <Link href='/'>
                <a>For tenants</a>
              </Link>
              <Link href='/'>
                <a>For owners</a>
              </Link>
              <Link href='/'>
                <a>For investors</a>
              </Link>
            </Nav>

            <Nav>
              <NavHeader>Useful info</NavHeader>

              <Link href='/'>
                <a>The Strata guide</a>
              </Link>
              <Link href='/'>
                <a>Useful info</a>
              </Link>
              <Link href='/'>
                <a>Understanding Stata maintenance</a>
              </Link>
              <Link href='/'>
                <a>1300 667 123</a>
              </Link>
            </Nav>

            <Nav>
              <NavHeader>Contact us</NavHeader>

              <Link href='/'>
                <a>Get a quote</a>
              </Link>
              <Link href='/'>
                <a>Report an issue</a>
              </Link>
              <Link href='/'>
                <a>Become a member</a>
              </Link>
            </Nav>
          </Sitemap>
        </FooterWrapper>

        <Legal>
          <nav>
            <Link href='/'>
              <a>Terms of use</a>
            </Link>

            <VerticalDivider />
            <Link href='/'>
              <a>Privacy policy</a>
            </Link>

            <VerticalDivider />
            <Link href='/'>
              <a>ABN 31 064 030 311</a>
            </Link>
          </nav>
        </Legal>
      </Text>
    </FooterContainer>
  </FooterBlock>
);

export default Footer;
