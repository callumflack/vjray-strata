import Link from "next/link";
import { icons } from "constants";
import { Headline } from "./Shared/Headline";
import { Text, LineBreakAll } from "./Shared/Texts";
import Icon from "./Shared/Icon";
import Block from "./Shared/Block";

const StyledIcon = props => <Icon color="brand" size="100" icon={props.icon} />;

const GroupSiteLink = () => (
  <Block bg="beige" mw="sm" textCenter pt={[2, 3, 4]} pb={[2, 3, 4]}>
    <StyledIcon icon={icons.service} />
    <Headline font="displayMedium" color="brand">
      Looking for more than
      <LineBreakAll mx="auto">Strata Management?</LineBreakAll>
    </Headline>
    <Text color="text70" mx="auto" w={[1, 10 / 12]}>
      We offer full spectrum Real Estate Management services. Find out more on
      our
      <Link href="http://www.vjray.com.au/">
        <a>Group website.</a>
      </Link>
    </Text>
  </Block>
);

export default GroupSiteLink;
