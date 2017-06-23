import styled from 'styled-components';

import theme from '../../css/theme.js';
import { Box, Flex } from '../styled-grid';
import { Texty } from './Texty.js';
import Button from './Button.js';
import { IconContact } from '../Home/Icons.js';
import {
  HeaderHr,
  Uppercase,
  Paragraph,
  Text,
} from '../shared/Text.js';



const Locations = styled(Flex)`
  text-align: left;
`;

const Image = styled.img`
  border: 1px solid #666;
  display: block;
  margin-bottom: 1.5rem;
`;

const LocationInfo = styled.div`
  margin-top: 0.5rem;
  opacity: ${theme.text.transparent};
`;

const InfoList = styled.div`
  margin-top: 1.5rem;
`;

const InfoListItem = styled.div`
  padding: 0.5rem 0;
  border-top: 1px solid #ccc;

  :last-child {
    border-bottom: 1px solid #ccc;
  }

  span {
    margin-right: 1rem;
  }
`;

const Contact = (props) => (
  <Locations justify='center'>

    {Array(2).fill(1).map(() =>

    <Box mx={2}>
      <Image src='http://lorempixel.com/300/225' />

      <Texty medium active mb={1}>Campsie Head Office</Texty>
      <Texty grey>8 Anglo Road</Texty>
      <Texty grey>Campsie, NSW 2194</Texty>

      <InfoList>
        <InfoListItem>
          <IconContact />

          1300 073 405
        </InfoListItem>
        <InfoListItem>
          <span>&#9742;</span>
          campsie@vjray.com.au
        </InfoListItem>
        <InfoListItem>
          <span>&#9742;</span>
          PO Box 369 Campsie, NSW 2194
        </InfoListItem>
        <InfoListItem>
          <span>&#9742;</span>
          Emergency 1300 073 777
        </InfoListItem>
      </InfoList>

    </Box>
    )}

  </Locations>
);

export default Contact;