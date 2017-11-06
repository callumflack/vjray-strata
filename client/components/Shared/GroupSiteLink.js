import Link from 'next/link';

import styled from 'styled-components'
import { Flex, Box } from '../styled-grid'

import theme from '../theme'
import { icons } from '../constants'

import hoc from '../Shared/hoc'
import Container from '../Shared/Container'
import { Headline } from '../Shared/Headline'
import { Text, SmallText, LargeText, LineBreak, LineBreakMax, LineBreakAll } from '../Shared/Text'
import Icon from '../Shared/Icon';
import LargeButtonStyler from '../Shared/LargeButtonStyler';
import Button from '../Shared/Button';
import Block from './Block';


const StyledIcon = (props) => <Icon color='brand' size='100' icon={ props.icon } />

const StyledHeading = (props) => <Headline color='brand' font='displayMedium' {...props} />

const StyledText = props => <Text color="text70" mx="auto" w={[1, 10 / 12]} {...props} />;

const GroupSiteLink = () => (
  <Block bg="beige" mw="sm" textCenter pt={[2, 3, 4]} pb={[3, 4, 5]}>
    <StyledIcon icon={icons.service} />
    <StyledHeading>Already a customer?</StyledHeading>
    <StyledText>Here's a few helpful links.</StyledText>
    <LargeButtonStyler color="white" mt={3} mb={4}>
      <Link href="/portal">
        <Button large icon bgColor="brand" children="Your portal" />
      </Link>
      <Link href="/portal">
        <Button
          large
          invert
          noRadius
          icon
          color="brand"
          children="Pay by DEFT"
        />
      </Link>
    </LargeButtonStyler>

    <StyledIcon icon={icons.service} />
    <StyledHeading>
      Looking for more than&nbsp;
      <LineBreakAll mx="auto" children="Strata Management?" />
    </StyledHeading>
    <StyledText>
      We offer full spectrum Real Estate Management services. Find out more on
      our&nbsp;
      <Link href="http://www.vjray.com.au/">
        <a>Group website.</a>
      </Link>
    </StyledText>
  </Block>
);

export default GroupSiteLink;