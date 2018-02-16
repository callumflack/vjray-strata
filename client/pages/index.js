import React from "react";
import Link from "next/link";

import styled from "styled-components";
import { Flex, Box } from "../components/styled-grid";
import hoc from "../components/Sharedy/hoc";
import theme from "../components/theme";

import Layout from "../components/Sharedy/Layout";
import Container from "../components/Sharedy/Container";
import Button from "../components/Sharedy/Button";
import {
  Text,
  LargeText,
  MediumText,
  SmallText,
  AuthorText,
  LineBreak,
  LineBreakMax,
  LineBreakAll
} from "../components/Sharedy/Text";
import {
  Display,
  Headline,
  Subheadline,
  HeadlineMeta
} from "../components/Sharedy/Headline";

import Header from "../components/Sharedy/Header";
import Footer from "../components/Sharedy/Footer";
import Block from "../components/Sharedy/Block";
import Guides from "../components/Sharedy/Guides";
import RecentPosts from "../components/Sharedy/RecentPosts";
import ContactAction from "../components/Sharedy/ContactAction";
import Contacts from "../components/Sharedy/Contacts";
import LargeButtonStyler from "../components/Sharedy/LargeButtonStyler";
import HeroListening from "../components/Sharedy/HeroListening";

import FeatureList from "../components/Sharedy/FeatureList";
import HeroSydney from "../components/Sharedy/HeroSydney";
import HeroQuotes from "../components/Sharedy/HeroQuotes";
import Testimonials from "../components/Sharedy/Testimonials";
import GroupSiteLink from "../components/Sharedy/GroupSiteLink";

const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear />

    <HeroListening />

    <Block mw="rg" textCenter>
      <Box mx="auto" width={[1, 1, 5 / 6]}>
        <Headline
          font="displayMedium"
          color="text"
          mb={2}
          children="It all adds up to a better deal."
        />
        <LargeText color="text70">
          "You guys are very quick to respond and handle things efficiently, no
          complaints here!"<LineBreak m="auto">
            <AuthorText>— Linda &amp; Terry, Caringbah</AuthorText>
          </LineBreak>
        </LargeText>
      </Box>

      <FeatureList />
    </Block>

    <HeroSydney />

    <HeroQuotes>
      <Box px={3} py={[4, 4, 5, 5, 6]} style={{ position: "relative" }}>
        <Container textCenter>
          <Subheadline children="Our service" />
          <Display>It's our job to sort it.</Display>
          {/* width={[ 1, 9/12, 9/12, 7/12 ]} */}
          <Box w={[1, 1, 8 / 12]} mx="auto">
            <LargeText color="text70">
              "I have known and been happy with VJ Ray for years. I cannot fault you.
              Thank you!"{" "}
              <LineBreakAll mx="auto">
                <AuthorText>— Petrania, Belmore</AuthorText>
              </LineBreakAll>
            </LargeText>
            <Text font="textMedium" mt={3}>
              <Link href="/what-we-do-for-you">
                <Button
                  color="brand"
                  bg="white"
                  invert
                  icon="true"
                  children="What we do for you"
                />
              </Link>
            </Text>
          </Box>
        </Container>

        <Container mw="lg" pt={[3, 4]}>
          <Testimonials limit={5} />
        </Container>
      </Box>
    </HeroQuotes>

    <Block textCenter>
      <Subheadline children="Info on the go" />
      <Display color="brandAlt" mb={3} children="Your guides to Sydney Strata." />
      <Text color="text70" mx="auto" width={[1, 2 / 3, 2 / 3, 1 / 2]}>
        We've got guides and articles to help your Strata Management.
        <Link href="/useful-info">
          <a>Check all our guides.</a>
        </Link>
      </Text>

      <Box pt={4} pb={3}>
        <Guides featured limit={3} />
      </Box>

      <Subheadline mt={4}>
        <Link href={`/`} as={`/home`}>
          <a>Recent posts</a>
        </Link>
      </Subheadline>
      <RecentPosts />
    </Block>

    <GroupSiteLink />

    <Block>
      <ContactAction btnColor="brandAlt" withButton />
      <Contacts />
    </Block>

    <Footer />
  </Layout>
);

class Index extends React.Component {
  static async getInitialProps({ pathname }) {
    return {
      pathname
    };
  }
  render() {
    return <Root {...this.props} />;
  }
}

export default Index;
