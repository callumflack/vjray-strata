import React from "react";
import Link from "next/link";

import styled from "styled-components";
import theme from "../../components/theme";
import { Flex, Box } from "../../components/styled-grid";
import hoc from "../../components/Sharedy/hoc";

import {
  LargeText,
  Text,
  TextBlock,
  LineBreak
} from "../../components/Sharedy/Text";
import {
  Display,
  Headline,
  Subheadline,
  MobileSubheadline,
  HeadlineMeta
} from "../../components/Sharedy/Headline";
import Button from "../../components/Sharedy/Button";
import Container from "../../components/Sharedy/Container";
import CoverImage from "../../components/Sharedy/CoverImage";
import Icon from "../../components/Sharedy/Icon";
import Layout from "../../components/Sharedy/Layout";

import HeroWhat from "../../components/Sharedy/HeroWhat";
import Block from "../../components/Sharedy/Block";
import Contacts from "../../components/Sharedy/Contacts";
import ContactAction from "../../components/Sharedy/ContactAction";
import Footer from "../../components/Sharedy/Footer";
import Header from "../../components/Sharedy/Header";
import LargeButtonStyler from "../../components/Sharedy/LargeButtonStyler";
import { icons, servicesIntro, servicesList } from "../../components/constants";

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

const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear />
    <HeroWhat />
    <Block mw="sm" noBottomPadding>
      <Headline
        font="displayMedium"
        color="text"
        mt={[0, 4, 4, 3]}
        mb={2}
        children="Contents Insurance subheading."
      />
      <LargeText color="text70" w={[1, 2 / 3, 1]} children={servicesIntro} />
    </Block>
    <Block mw="sm" noBottomPadding>
      <Text>Content copy here.</Text>
    </Block>

    <Block textCenter>
      <ContactAction btnColor="brandAlt" withButton />
      <Contacts />
    </Block>

    <Footer />
  </Layout>
);

class ContentsInsurancePage extends React.Component {
  static async getInitialProps({ pathname }) {
    return {
      pathname
    };
  }
  render() {
    return <Root pathname={this.props.pathname} />;
  }
}

export default ContentsInsurancePage;
