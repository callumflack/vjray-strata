import Link from 'next/link'
import styled, { css } from 'styled-components'
import theme from '../theme'
import { Box, Flex } from '../styled-grid'
import { Text, SmallText } from '../styled-elements/Text'
import Button from '../styled-elements/Button'
import { IconPhone, IconEmail, IconAddress, IconEmergency } from '../styled-elements/Icons'


const locationList = [{
  name: 'Campsie Head Office',
  subOne: '8 Anglo Road',
  subTwo: 'Campsie, NSW 2194',
  phoneNumber: '1300 073 405',
  email: 'campsie@vjray.com.au',
  poBox: 'PO Box 369 Campsie, NSW 2194',
  emergencyPhoneNumber: '1300 073 777',
  googleMapsUrl: 'https://www.google.co.nz/maps/place/V+J+Ray/@-33.9113278,151.1011612,17z',
  imageName: 'map.jpg',
}, {
  name: 'Caringbah Office',
  subOne: '18 President Avenue',
  subTwo: 'Caringbah, NSW 2229',
  phoneNumber: '1300 073 405',
  email: 'caringbah@vjray.com.au',
  poBox: 'PO Box 369 Campsie, NSW 2194',
  emergencyPhoneNumber: '1300 073 777',
  googleMapsUrl: 'https://www.google.co.nz/maps/place/V.J.+Ray/@-34.0432583,151.1198929,17z',
  imageName: 'map.jpg',
}];


const Locations = styled(Flex)`
  flex-direction: column;
  text-align: left;

  @media (min-width: 512px) {
    flex-direction: row;
  }
`;

const LocationRoot = styled(Box)`
  @media (max-width: 699px) {
    margin-top: ${theme.space[4]}px;
  }
`;

const Location = (props) => (
  <LocationRoot
    width={[ 1, 1/3 ]}
    px={[ 3, 2 ]}>
    <Link href={props.location.googleMapsUrl}>
      <a>
        <Image src={'/static/img/' + props.location.imageName} />
      </a>
    </Link>

    <Box my={2}>
      <Link href={props.location.googleMapsUrl}>
        <a>
          <Text color='text' font='textMedium'>{props.location.name}</Text>
        </a>
      </Link>

      <Text color='text70'>{props.location.subOne}</Text>
      <Text color='text70'>{props.location.subTwo}</Text>
    </Box>

    <Box>
      <Link href='tel:{props.location.phoneNumber}'>
        <a><Item borderTop>
          <IconPhone contact />{props.location.phoneNumber}
        </Item></a>
      </Link>
      <Link href='mailto:{props.location.email}'>
        <a><Item>
          <IconEmail contact />{props.location.email}
        </Item></a>
      </Link>
      <Item>
        <IconAddress contact />{props.location.poBox}
      </Item>
      <Link href='tel:{props.location.emergencyPhoneNumber}'>
        <a><Item>
          <IconEmergency contact />Emergency {props.location.emergencyPhoneNumber}
        </Item></a>
      </Link>

    </Box>
  </LocationRoot>
);

const Image = styled.img`
  ${'' /* border: 1px solid ${theme.colors.text40}; */}
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
  <Locations
    justify='center'
    mx={-2}>

    {locationList.map((location, i) =>
      <Location location={location} key={i} />
    )}
  </Locations>
);

export default Contact;