import styled from 'styled-components';

import theme from '../../css/theme.js';
import Button from './Button.js';
import {
  HeaderHr,
  Uppercase,
  Paragraph,
  Text,
} from '../shared/Text.js';

const StyledButton = styled(Button)`
  display: inline-block;
  margin-top: 2rem;
  padding: 1.5rem 6rem;
`;

const Locations = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: left;
`;

const Location = styled.div`
  margin-top: 2.5rem;
`;

const LocationImage = styled.img`
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
  <div>
    <HeaderHr>Get in touch</HeaderHr>

    <h1>Call 1300 073 405.</h1>

    <StyledButton fill icon bgColor='brand'><Uppercase>Get a fast quote</Uppercase></StyledButton>

    <Text transparent>
      <Paragraph lg>
        Or drop-in without an appointment.
        <br />
        We're open Monday to Saturday, 9am-5pm.
      </Paragraph>
    </Text>

    <Locations>
      {Array(2).fill(1).map(() =>
      <Location>
        <LocationImage src='http://lorempixel.com/300/225' />

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
      </Location>
      )}
    </Locations>
  </div>
);

export default Contact;
