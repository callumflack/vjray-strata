import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";

import theme from "../../components/theme";
import hoc from "../../components/Sharedy/hoc";
import { Box, Flex } from "../../components/styled-grid";

import Layout from "../../components/Sharedy/Layout";
import Container from "../../components/Sharedy/Container";
import {
  Display,
  Headline,
  Subheadline,
  HeadlineMeta
} from "../../components/Sharedy/Headline";
import {
  Text,
  LargeText,
  SmallText,
  LineBreak,
  LineBreakAll
} from "../../components/Sharedy/Text";

import Block from "../../components/Sharedy/Block";
import { HeroFrame } from "../../components/Sharedy/Hero";
import Contacts from "../../components/Sharedy/Contacts";
import ContactActionAlt from "../../components/Sharedy/ContactActionAlt";
import Footer from "../../components/Sharedy/Footer";
import Guides from "../../components/Sharedy/Guides";
import Header from "../../components/Sharedy/Header";
import PostContainer from "../../components/Sharedy/PostContainer";
import RecentPosts from "../../components/Sharedy/RecentPosts";
import Button from "../../components/Sharedy/Button";
import LargeButtonStyler from "../../components/Sharedy/LargeButtonStyler";

const StyledHeroFrame = styled(HeroFrame)`
  background-image: linear-gradient(
    to bottom,
    #d6f4ff,
    ${theme.colors.offBlue} 70%
  ) !important;
`;

// const Rule = Container.extend` errors, WTF???
const Rule = styled(Container)`
  background-color: rgba(74, 74, 85, 0.15);
  height: 1px;
  max-width: calc(960px - 64px);
`;

const FactsBox = styled(HeroFrame)`
  background-color: ${theme.colors.beige};
  background-image: initial;
`;

// moved the Posts lists here until
// they have more than 1 blog post.
const PostsList = props => (
  <Box pb={[5, 6]} px={3}>
    <Container mw="lg" textCenter>
      <Container textCenter mb={4}>
        <Subheadline children="Posts archive" />
      </Container>
      <PostContainer />
    </Container>
  </Box>
);

const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear color="brandAlt" />

    <StyledHeroFrame>
      <Box pt={[4, 4, 5, 5, 6]} pb={[4, 4, 5, 5, 6]}>
        <Container mw="rg" pb={[2, 3]}>
          <Flex direction={["column", "row"]}>
            <Box width={[9 / 12, 5 / 12]} mt={[0, 3]}>
              <Subheadline color="" children="Info on the go" />
              <Display color="brandAlt" font="displayRegular">
                Your guides to <LineBreakAll>Sydney Strata.</LineBreakAll>
              </Display>
              <LargeText color="brandAlt70">
                Download your complete{" "}
                <LineBreak>guide to Strata living.</LineBreak>
              </LargeText>
            </Box>

            <Box width={[1, 9 / 12]} pt={[3, 0]}>
              <Guides primary buttons icon />
            </Box>
          </Flex>
        </Container>

        <Rule mw="rg" my={[3, 4]} />

        <Container textCenter pb={[2, 3]}>
          <Subheadline
            color=""
            mt={[1, 2]}
            mb={[3, 4]}
            children="All our guides"
          />
          <Guides buttons />
        </Container>

        <Rule mw="rg" my={[3, 4]} />

        <Container mw="sm" textCenter>
          <Subheadline mt={[1, 2]} children="Forms and fact sheets" />
          <LargeText color="brandAlt" mt={[1, 2]} mb={3}>
            Need a form or a fact? Here's all our readily available PDF
            downloads to manage your Strata.
          </LargeText>
          <LargeButtonStyler>
            <Link href="/useful-info/forms-and-fact-sheets">
              <Button large icon bgColor="brandAlt" children="See the list" />
            </Link>
          </LargeButtonStyler>
        </Container>
      </Box>
    </StyledHeroFrame>

    <Block mw="sm" textCenter id="blog">
      <Subheadline children="Latest article" />
      <RecentPosts />
    </Block>

    <Block border>
      <ContactActionAlt btnColor="brand" />
      <Contacts />
    </Block>

    <Footer />
  </Layout>
);

class UsefulInfo extends React.Component {
  static async getInitialProps({ pathname }) {
    return {
      pathname
    };
  }

  render() {
    return <Root pathname={this.props.pathname} />;
  }
}

export default UsefulInfo;
