import styled from 'styled-components';

import theme from '../../css/theme.js';
import { Box, Flex } from '../styled-grid';
import Button from './Button.js';
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

      <strong><Text brand>Campsie Head Office</Text></strong>

      <LocationInfo>
        <div>8 Anglo Road</div>
        <div>Campsie, NSW 2194</div>

        <InfoList>
          <InfoListItem>
            <span>&#9742;</span>
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

      </LocationInfo>
    </Box>
    )}

  </Locations>
);

export default Contact;