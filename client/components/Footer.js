import styled from 'styled-components';
import Link from 'next/link';

import theme from './theme.js';
import { Box, Flex } from '../components/styled-grid';
import Block from '../components/shared/Block.js';
import Container from '../components/shared/Container.js';
import { Texty, SmallText } from '../components/shared/Texty.js';








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
  margin-top: 40px;
`

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

// const Column = props => (
//   <ColumnRoot {...props}>
//     <SmallText grey>
//       { props.children }
//     </SmallText>
//   </ColumnRoot>
// )






const Copyright = styled.div`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  opacity: 0.7;
`;

const Legal = styled.div`
  margin-top: 3.5rem;
  opacity: 0.7;
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
          <SmallText grey mx={1} my={2}>&copy; 2017</SmallText>
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




      <Legal>
        <nav>
          <Link href='/'><a>Terms of use</a></Link>
          <Divider />
          <Link href='/'><a>Privacy policy</a></Link>
          <Divider />
          <Link href='/'><a>ABN 31 064 030 311</a></Link>
        </nav>
      </Legal>

    </FooterContainer>
  </Box>
);

export default Footer;