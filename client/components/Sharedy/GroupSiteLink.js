import Link from "next/link";
import styled from "styled-components";
import { Flex, Box } from "../styled-grid";
import theme from "../theme";
import { icons } from "../constants";
import hoc from "../Sharedy/hoc";
import Container from "../Sharedy/Container";
import { Headline } from "../Sharedy/Headline";
import {
  Text,
  SmallText,
  LargeText,
  LineBreak,
  LineBreakMax,
  LineBreakAll
} from "../Sharedy/Text";
import Icon from "../Sharedy/Icon";
import LargeButtonStyler from "../Sharedy/LargeButtonStyler";
import Button from "../Sharedy/Button";
import Block from "./Block";

const StyledIcon = props => <Icon color="brand" size="100" icon={props.icon} />;

const StyledHeading = props => (
  <Headline color="brand" font="displayMedium" {...props} />
);

const StyledText = props => (
  <Text color="text70" mx="auto" w={[1, 10 / 12]} {...props} />
);

const GroupSiteLink = () => (
  <Block bg="beige" mw="sm" textCenter pt={[2, 3, 4]} pb={[3, 4, 5]}>
    <StyledIcon icon={icons.sun} />
    <StyledHeading>Already a customer?</StyledHeading>
    <StyledText>Here's a few helpful links.</StyledText>
    <LargeButtonStyler color="white" mt={3} mb={4}>
      <Link href="https://www.lookatmystrata.com.au/212825/Login/Logon" passHref>
        <a>
          <Button large icon="true" bgColor="brand" children="Your portal" />
        </a>
      </Link>
      <Link href="https://www.deft.com.au/" passHref>
        <a>
          <Button large invert icon="true" color="brand" children="Pay by DEFT" />
        </a>
      </Link>
    </LargeButtonStyler>

    <StyledIcon icon={icons.service} />
    <StyledHeading>
      Looking for more than&nbsp;
      <LineBreakAll mx="auto" children="Strata Management?" />
    </StyledHeading>
    <StyledText>
      We offer full spectrum Real Estate Management services. Find out more on our&nbsp;
      <Link href="http://www.vjray.com.au/">
        <a>Group website.</a>
      </Link>
    </StyledText>
  </Block>
);

export default GroupSiteLink;
