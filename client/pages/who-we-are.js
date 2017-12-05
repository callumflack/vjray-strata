import React from "react";
import styled from "styled-components";
import { Flex, Box } from "rebass";
import fetchMarkdown from "../lib/fetchMarkdown";
import theme from "../components/theme-new";

import { Text, TextBlock } from "../components/Shared/Text";
import Layout from "../components/Shared/Layout";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";
import Block from "../components/Shared/Block";
import HeroWho from "../components/HeroWho";
import ContactAction from "../components/Legacy/ContactAction";
import Contacts from "../components/Shared/Contacts";

const TextBlockWrapper = styled(Flex)`
  margin-top: 0;
  margin-bottom: ${theme.space[4]}px;

  @media (min-width: ${theme.breakpoints[1]}em) {
    margin: 0;
  }
`;

const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear color="brandAlt" />
    <HeroWho />

    <Block maxWidth="60em" noBottomPadding>
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
      pathname,
    };
  }

  render() {
    return <Root {...this.props} />;
  }
}

export default WhoContainer;
