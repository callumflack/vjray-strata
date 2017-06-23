import styled from 'styled-components';
import Link from 'next/link';
import theme from './theme.js';
import { Box, Flex } from '../components/styled-grid';
import Block from '../components/shared/Block.js';
import Container from '../components/shared/Container.js';
import { Text, SmallText } from '../components/shared/Text.js';


const FooterContainer = styled(Container)`
  border-top: 1px solid ${theme.colors.text20};
  padding-top: 1.5rem;
  padding-bottom: 3rem;
`;

const Logo = styled.img`
  height: 3rem;
  opacity: 0.4;
`;

// const Root = hoc('h1').extend`
const Nav = Flex.withComponent('nav').extend`
  color: ${theme.colors.text40};
  margin-top: 40px;
`;

const Column = styled(Box)`
  :not(:last-child) {
    margin-right: 3rem
  }

  span,
  a {
    color: ${theme.colors.text70};
  }

  span {
    font-family: ${theme.fonts.textRegular};
  }

  a {
    display: block;
    margin-top: 12px;
  }
`;

const Divider = styled.span`
  --spacing: 1rem;
  margin-left: var(--spacing);
  margin-right: var(--spacing);
  :after { content: '•'; }
`;


const Footer = () => (
  <Box py={0}>
    <FooterContainer mx="lg">

      <Flex justify='space-between'>
        <div>
          <Link href='/'>
            <a><Logo src='/static/img/logo.svg' /></a>
          </Link>
          <SmallText lightGrey mx={1} my={2}>&copy; 2017</SmallText>
        </div>

        <Nav>
          <Column>
            <span>Who we are</span>
            <Link href='/'><a>Our story</a></Link>
            <Link href='/'><a>The team</a></Link>
          </Column>
          <Column>
            <span>What we do for you</span>
            <Link href='/'><a>Services</a></Link>
            <Link href='/'><a>For tenants</a></Link>
            <Link href='/'><a>For owners</a></Link>
            <Link href='/'><a>For investors</a></Link>
          </Column>
          <Column>
            <span>Useful info</span>
            <Link href='/'><a>The Strata guide</a></Link>
            <Link href='/'><a>Useful info</a></Link>
            <Link href='/'><a>Understanding Stata</a></Link>
          </Column>
          <Column>
            <span>Contact us</span>
            <Link href='/'><a>Get a quote</a></Link>
            <Link href='/'><a>Report an issue</a></Link>
            <Link href='/'><a>Become a member</a></Link>
          </Column>
        </Nav>
      </Flex>

      <Nav lightGrey>
        <Link href='/'><a>Terms of use</a></Link>
        <Divider />
        <Link href='/'><a>Privacy policy</a></Link>
        <Divider />
        <Link href='/'><a>ABN 31 064 030 311</a></Link>
      </Nav>

    </FooterContainer>
  </Box>
);

export default Footer;