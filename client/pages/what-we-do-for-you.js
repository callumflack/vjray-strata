import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Flex, Box } from "rebass";

import { icons, servicesIntro, servicesList } from "../components/constants";
import { LargeText, Text } from "../components/Shared/Text";
import { Headline } from "../components/Shared/Headline";
import Button from "../components/Shared/Button";
import Icon from "../components/Shared/Icon";
import Layout from "../components/Shared/Layout";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";
import HeroWhat from "../components/Legacy/HeroWhat";
import HeroBlock from "../components/Shared/HeroBlock";
import HGroup from "../components/Shared/HGroup";
import Block from "../components/Shared/Block";
import ContactAction from "../components/Legacy/ContactAction";
import LargeButtonStyler from "../components/Legacy/LargeButtonStyler";

const ItemRoot = styled(Flex)`
  &:last-child {
    margin-bottom: 0;
  }
`;

const ItemIcon = styled(Icon)`
  @media (min-width: 768px) {
    transform: translateY(-20px);
  }
`;

const Item = props => (
  <ItemRoot direction={["column", "row"]} mx={-2} mb={[3, 4]}>
    <Box px={[2]}>
      <ItemIcon color="brand" size="90" icon={icons[props.item.icon]} />
    </Box>
    <Box px={[2]}>
      <LargeText
        color="brand"
        font="displayMedium"
        mb={1}
        children={props.item.headline}
      />
      <Text color="text70">
        {props.item.text}
        {props.item.link && (
          <Link href="#">
            <a>Find out more</a>
          </Link>
        )}
      </Text>
      {props.item.buttonUrl && (
        <LargeButtonStyler align="left" color="white" mt={2}>
          <Link href={props.item.buttonUrl}>
            <Button
              large
              icon
              color="brand"
              bgColor="transparent"
              children={props.item.buttonLabel}
            />
          </Link>
        </LargeButtonStyler>
      )}
    </Box>
  </ItemRoot>
);

const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear />

    <HeroBlock
      beigeGradientBg
      img="http://res.cloudinary.com/pw-img-cdn/image/upload/v1503618862/hero-what-_i582ye.png"
    >
      <HGroup
        title="What we do for you."
        titleColor="brand"
        text="We’ll go further to help you find peace of mind by making Strata
            Management easier."
        textColor="text70"
      />
    </HeroBlock>

    <Block maxWidth="48em" noBottomPadding>
      <Headline
        font="displayMedium"
        color="text"
        mt={[0, 4, 4, 3]}
        mb={2}
        children="How we do this for you."
      />
      <LargeText color="text70" w={[1, 2 / 3, 1]} children={servicesIntro} />
    </Block>
    <Block maxWidth="48em" noBottomPadding>
      {servicesList.map((item, i) => <Item item={item} key={i} />)}
    </Block>

    <Block textCenter>
      <ContactAction btnColor="brandAlt" withButton />
    </Block>

    <Footer />
  </Layout>
);

class WhatPage extends React.Component {
  static async getInitialProps({ pathname }) {
    return {
      pathname,
    };
  }
  render() {
    return <Root pathname={this.props.pathname} />;
  }
}

export default WhatPage;
