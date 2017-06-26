import styled from 'styled-components';
import theme from '../theme.js';
import { Box, Flex } from '../styled-grid';
import { Text, SmallText } from './Text.js';
import Button from './Button.js';
import { IconContact } from '../shared/Icons.js';


const Locations = styled(Flex)`
  text-align: left;
`;

const Image = styled.img`
  border: 1px solid ${theme.colors.text40};
`;

const Item = styled(SmallText)`
  --Item-rule: ${theme.colors.text20};
  border-top: 1px solid var(--Item-rule);
  color: ${theme.colors.text70};
  padding: 0.5rem 0;

  :last-child {
    border-bottom: 1px solid var(--Item-rule);
  };
`;

const Icon = styled(IconContact)`
  margin: 0 9px 0 6px;
`

const Contact = (props) => (
  <Flex justify='center' style={{ textAlign: 'left' }}>

    {Array(2).fill(1).map(() =>

    <Box width={[ 1/2, 1/3 ]} mx={2}>
      <Image src='static/img/map.jpg' />

      <Box my={2}>
        <Text color='brand' medium>Campsie Head Office</Text>
        <Text color='text70'>8 Anglo Road</Text>
        <Text color='text70'>Campsie, NSW 2194</Text>
      </Box>

      <Box>
        <Item><Icon bottom/>1300 073 405</Item>
        <Item><Icon bottom/>campsie@vjray.com.au</Item>
        <Item><Icon bottom/>PO Box 369 Campsie, NSW 2194</Item>
        <Item><Icon bottom/>Emergency 1300 073 777</Item>
      </Box>

    </Box>
    )}

  </Flex>
);

export default Contact;