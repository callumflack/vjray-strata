import styled from 'styled-components';
import theme from '../theme.js';
import { Box, Flex } from '../styled-grid';
import { Texty } from './Texty.js';
import Button from './Button.js';
import { IconContact } from '../Home/Icons.js';


const Locations = styled(Flex)`
  text-align: left;
`;

const Image = styled.img`
  border: 1px solid ${theme.colors.text40};
`;

const Item = styled.div`
  --Item-rule: ${theme.colors.text20};

  border-top: 1px solid var(--Item-rule);
  color: ${theme.colors.text70};
  padding: 0.5rem 0;
  :last-child { border-bottom: 1px solid var(--Item-rule); };
`;


const Contact = (props) => (
  <Locations justify='center'>

    {Array(2).fill(1).map(() =>

    <Box width={[ 1/2, 1/3 ]} mx={2}>
      <Image src='static/img/map.jpg' />

      <Box my={2}>
        <Texty medium active>Campsie Head Office</Texty>
        <Texty grey>8 Anglo Road</Texty>
        <Texty grey>Campsie, NSW 2194</Texty>
      </Box>

      <Box>
        <Item><IconContact mx={1}/>1300 073 405</Item>
        <Item><IconContact mx={1}/>campsie@vjray.com.au</Item>
        <Item><IconContact mx={1}/>PO Box 369 Campsie, NSW 2194</Item>
        <Item><IconContact mx={1}/>Emergency 1300 073 777</Item>
      </Box>

    </Box>
    )}

  </Locations>
);

export default Contact;