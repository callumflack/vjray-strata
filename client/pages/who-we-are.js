import React from "react";

import gql from "graphql-tag";
import apollo from "../lib/apollo";
import fetchMarkdown from "../lib/fetchMarkdown.js";

import styled from "styled-components";
import theme from "../components/theme";
import { Flex, Box } from "../components/styled-grid";
import hoc from "../components/Sharedy/hoc";

import {
  Text,
  TextBlock,
  DangerouslyResetTextBlock,
  LineBreak
} from "../components/Sharedy/Text";
import {
  Display,
  Headline,
  Subheadline,
  MobileSubheadline,
  HeadlineMeta
} from "../components/Sharedy/Headline";

import Layout from "../components/Sharedy/Layout";
import Header from "../components/Sharedy/Header";
import Footer from "../components/Sharedy/Footer";
import Container from "../components/Sharedy/Container";
import Block from "../components/Sharedy/Block";

import HeroWho from "../components/Sharedy/HeroWho";
import CoverImage from "../components/Sharedy/CoverImage";
import Button from "../components/Sharedy/Button";
import ContactAction from "../components/Sharedy/ContactAction";
import Contacts from "../components/Sharedy/Contacts";
import LargeButtonStyler from "../components/Sharedy/LargeButtonStyler";

const TextBlockWrapper = styled(Flex)`
  margin-top: 0;
  margin-bottom: ${theme.space[4]}px;

  @media (min-width: ${theme.containers.sm}) {
    margin: 0;
  }
`;

const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear color="brandAlt" />
    <HeroWho />

    <Block noBottomPadding>
      <Flex direction={["column", "column", "row"]} mx={[-2, -2, -2, -3]}>
        <Flex column width={[1, 1, 1 / 3]} px={[4, 2, 2, 3, 3]}>
          <Box mt="6px">
            <img src="static/img/mike-pollard.jpg" />
          </Box>
          <Text color="text70" mt={2} children="Mike Pollard" />
          <Text color="text70" children="Managing Director" />
        </Flex>
        <TextBlockWrapper
          order={["-1", "-1", "initial"]}
          px={[2, 2, 2, 3]}
          width={[1, 1, 2 / 3]}
        >
          <TextBlock
            dangerouslySetInnerHTML={{ __html: props.mikesLetter.body.html }}
          />
        </TextBlockWrapper>
      </Flex>
    </Block>

    <Block textCenter>
      <ContactAction btnColor="brandAlt" withButton />
      <Contacts />
    </Block>
    <Footer />
  </Layout>
);

class WhoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ req, pathname }) {
    const mikesLetter = await fetchMarkdown(req, "mikes-letter");

    return {
      mikesLetter,
      pathname
    };
  }

  render() {
    return <Root {...this.props} />;
  }
}

export default WhoContainer;
