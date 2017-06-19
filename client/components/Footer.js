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
              <Logo src='/static/img/logo.svg' />
            </Link>
            <Copyright>&copy; 2017</Copyright>
          </div>

          <Sitemap>
            <Nav>
              <NavHeader>Who we are</NavHeader>

              <Link href='/'>
                Our story
              </Link>
              <Link href='/'>
                The team
              </Link>
            </Nav>

            <Nav>
              <NavHeader>What we do for you</NavHeader>

              <Link href='/'>
                Services
              </Link>
              <Link href='/'>
                For tenants
              </Link>
              <Link href='/'>
                For owners
              </Link>
              <Link href='/'>
                For investors
              </Link>
            </Nav>

            <Nav>
              <NavHeader>Useful info</NavHeader>

              <Link href='/'>
                The Strata guide
              </Link>
              <Link href='/'>
                Useful info
              </Link>
              <Link href='/'>
                Understanding Stata maintenance
              </Link>
              <Link href='/'>
                1300 667 123
              </Link>
            </Nav>

            <Nav>
              <NavHeader>Contact us</NavHeader>

              <Link href='/'>
                Get a quote
              </Link>
              <Link href='/'>
                Report an issue
              </Link>
              <Link href='/'>
                Become a member
              </Link>
            </Nav>
          </Sitemap>
        </FooterWrapper>

        <Legal>
          <nav>
            <Link href='/'>
              Terms of use
            </Link>

            <VerticalDivider />
            <Link href='/'>
              Privacy policy
            </Link>

            <VerticalDivider />
            <Link href='/'>
              ABN 31 064 030 311
            </Link>
          </nav>
        </Legal>
      </Text>
    </FooterContainer>
  </FooterBlock>
);

export default Footer;
