import PropTypes from 'prop-types'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import theme from '../theme'
import hoc from '../styled-elements/hoc'
import { Box, Flex } from '../styled-grid'
import Container from '../styled-elements/Container'
import { Text, SmallText, Divider } from '../styled-elements/Text'
import { IconLogo } from '../styled-elements/Icons'


const Root = hoc(Box).extend`
  font-family: inherit;

  ${props => props.bg && css`
    background-color: ${theme.colors[props.color]};
  `}
`;

const StyledContainer = styled(Container)`
  border-top: 1px solid ${theme.colors.text20};
  padding-top: 1.5rem;
  padding-bottom: 3rem;
`;

// as soon as you extend it, you lose the hoc()
const Nav = Flex.withComponent('nav').extend`
  color: ${theme.colors.text40};
  margin-top: ${theme.space[2]}px;

  @media (min-width: 700px) {
    margin-top: {theme.space[3]}px;
  }
`;

const StyledNav = styled(Nav)`
  a:not(:first-child) {
    margin-top: 12px;
  }

  @media (min-width: 700px) {
    a:not(:first-child) {
      margin-top: 0;
    }
  }
`;

const Column = styled(Box)`
  @media (max-width: 700px) {
    :not(:first-child) {
      margin-top: 2rem
    }
  }

  @media (min-width: 700px) {
    :not(:last-child) {
      margin-right: 3rem
    }
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

    &:not(:first-child) {
      margin-top: 12px;
    }
  }
`;

const StyledDivider = styled(Divider)`
  @media (max-width: 700px) {
    display: none;
  }
`


const Footer = (props) => (
  <Root bg={props.bg} px={3}>
    <StyledContainer mx="lg">

      <Flex direction={[ 'column', 'row' ]} justify='space-between'>
        <div>
          <Link href='/'>
            <a><IconLogo color='text70' /></a>
          </Link>
          <SmallText color='text40' mx={2} my={1} children='&copy; 2017' />

          <StyledNav direction={[ 'column', 'row' ]}>
            <Link href='/'><a>Terms</a></Link>
            <StyledDivider />
            <Link href='/'><a>Privacy</a></Link>
          </StyledNav>
        </div>

        <div>
          <Nav direction={[ 'column', 'row' ]}>
            <Column>
              <Link href='/who-we-are'><a><span>About us</span></a></Link>
              <Link href='/who-we-are'><a>Who we are</a></Link>
              <Link href='/what-we-do-for-you'><a>What we do for you</a></Link>
            </Column>
            <Column>
              <Link href='/useful-info'><a><span>Useful info</span></a></Link>
              <Link href='/useful-info'><a>Strata guides</a></Link>
              <Link href='/useful-info#blog'><a>Strata blog</a></Link>
              <Link href='/useful-info/forms-and-fact-sheets'><a>Forms and facts</a></Link>
            </Column>
            <Column>
              <Link href='/contact'><a><span>Contact us</span></a></Link>
              <Link href='/fast-quote'><a>Get a fast quote</a></Link>
              <Link href='/contact?form=report#contact-forms'><a>Report an issue</a></Link>
              <Link href='/emergency'><a>Emergencies</a></Link>
            </Column>
          </Nav>
        </div>
      </Flex>



    </StyledContainer>
  </Root>
);

Footer.propsTypes = {
  bg: PropTypes.string,
};

export default Footer;