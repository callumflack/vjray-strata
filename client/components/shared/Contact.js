import Link from 'next/link'
import styled, { css } from 'styled-components'
import theme from '../theme'
import { Box, Flex } from '../styled-grid'
import { Text, SmallText } from './Text'
import Button from './Button'
import { IconPhone, IconEmail, IconAddress, IconEmergency } from '../shared/Icons'


const Locations = styled(Flex)`
  flex-direction: column;
  text-align: left;

  @media (min-width: 512px) {
    flex-direction: row;
  }
`;

const Location = styled(Box)`
  @media (max-width: 699px) {
    margin-top: ${theme.space[4]}px;
  }
`;

const Image = styled.img`
  border: 1px solid ${theme.colors.text40};
`;

const Item = styled(SmallText)`
  --Item-rule: ${theme.colors.text20};
  border-bottom: 1px solid var(--Item-rule);
  color: ${theme.colors.text70} !important;
  padding: 0.5rem 0;

  ${props => props.borderTop && css`
    border-top: 1px solid var(--Item-rule);
  `}
`;

const Contact = (props) => (
  <Locations justify='center' mx={-2}>

    {Array(2).fill(1).map(() =>

    <Location width={[ 1, 1/3 ]} px={2}>
      <Image src='/static/img/map.jpg' />

      <Box my={2}>
        <Text color='brand' font='textMedium' mb='6px'>Campsie Head Office</Text>
        <Text color='text70'>8 Anglo Road</Text>
        <Text color='text70'>Campsie, NSW 2194</Text>
      </Box>

      <Box>
        <Link href='tel:1300 073 405'>
          <a><Item borderTop>
            <IconPhone contact />1300 073 405
          </Item></a>
        </Link>
        <Link href='mailto:campsie@vjray.com.au'>
          <a><Item>
            <IconEmail contact />campsie@vjray.com.au
          </Item></a>
        </Link>
        <Item>
          <IconAddress contact />PO Box 369 Campsie, NSW 2194
        </Item>
        <Link href='tel:1300 073 777'>
          <a><Item>
            <IconEmergency contact />Emergency 1300 073 777
          </Item></a>
        </Link>

      </Box>
    </Location>
    )}

  </Locations>
);

export default Contact;