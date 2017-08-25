import PropTypes from 'prop-types'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import theme from '../theme'
import { icons } from '../constants'
import hoc from '../styled-elements/hoc'
import { Box, Flex } from '../styled-grid'
import Container from '../styled-elements/Container'
import { Text, SmallText, Divider } from '../styled-elements/Text'
import Icon from '../styled-elements/Icon';


const Root = hoc(Box).extend`
  border-top: 1px solid ${theme.colors.text20};
  font-family: inherit;

  ${props => props.bg && css`
    background-color: ${theme.colors[props.color]};
  `}
`;

const StyledContainer = styled(Container)`
  border-top: 1px solid ${theme.colors.text20};
`;

// as soon as you extend it, you lose the hoc()
// so I'm assigning margins manually…
// this is why proper Rebass is so good…
const Nav = Flex.withComponent('nav').extend`
  color: ${theme.colors.text40};
  margin-top: ${theme.space[3]}px;

  p,
  span,
  a {
    color: ${theme.colors.text70};

    @media (max-width: 512px) {
      font-size: ${theme.fontSizes[0]}pt;
    }
  }

  span {
    font-family: ${theme.fonts.textRegular};
  }

  @media (min-width: 700px) {
    margin-top: {theme.space[4]}px;
  }
`;

const StyledNav = styled(Nav)`
  p,
  span,
  a {
    color: ${theme.colors.text40} !important;
  }

  span {
    font-family: ${theme.fonts.textLight} !important;
  }

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

  a {
    display: block;

    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
`;

const StyledDivider = styled(Divider)`
  @media (max-width: 700px) {
    display: none;
  }
`


const Footer = (props) => (
  <Root bg={props.bg}>
    <Container
      mw="lg"
      pt={[ 0, 2 ]}
      pb={[ 3, 4 ]}
    >
      <Flex direction={[ 'column', 'row' ]} justify='space-between'>

        <Flex>
          <Box>
            <Link href='/'>
              <a><Icon
                color='brandAlt'
                size='80'
                icon={icons.logo}
              /></a>
            </Link>
          </Box>
          {/* <Box>
            <StyledNav direction={[ 'column', 'row' ]}>
              <Link href='/'><a>Terms of use</a></Link>
              <StyledDivider />
              <Link href='/'><a>Privacy</a></Link>
            </StyledNav>
          </Box> */}
        </Flex>

        <Box>
          <Flex direction={[ 'column', 'row' ]} justify='center'>
            <Nav direction={[ 'column', 'row' ]}>
              <Column>
                <Link href='/who-we-are'><a><span>About Us</span></a></Link>
                <Link href='/who-we-are'><a>Who we are</a></Link>
                <Link href='/what-we-do-for-you'><a>What we do for you</a></Link>
              </Column>
              <Column>
                <Link href='/useful-info'><a><span>Useful Info</span></a></Link>
                <Link href='/useful-info'><a>Strata guides</a></Link>
                <Link href='/useful-info#blog'><a>Strata blog</a></Link>
                <Link href='/useful-info/forms-and-fact-sheets'><a>Forms and facts</a></Link>
              </Column>
              <Column>
                <Link href='/contact'><a><span>Contact Us</span></a></Link>
                <Link href='/fast-quote'><a>Get a fast quote</a></Link>
                <Link href='/contact?form=report#contact-forms'><a>Report an issue</a></Link>
                <Link href='/emergency'><a>Emergencies</a></Link>
              </Column>
            </Nav>
          </Flex>

        </Box>

      </Flex>
    </Container>
  </Root>
);

Footer.propsTypes = {
  bg: PropTypes.string,
};

export default Footer;