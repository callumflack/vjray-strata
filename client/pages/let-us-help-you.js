import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import apollo from "../lib/apollo";

import theme from "../components/theme";
import { contactDetails } from "../components/constants";

import { Box } from "../components/styled-grid";
import Layout from "../components/Sharedy/Layout";
import Container from "../components/Sharedy/Container";
import { Display, Headline, Subheadline } from "../components/Sharedy/Headline";
import { MediumText, LargeText, LineBreak } from "../components/Sharedy/Text";

import Header from "../components/Sharedy/Header";
import Footer from "../components/Sharedy/Footer";
import Block from "../components/Sharedy/Block";
import { FormHeader } from "../components/Sharedy/Form.js";
import FormQuote from "../components/Sharedy/FormQuote";
import ContactAction from "../components/Sharedy/ContactAction";
import Contacts from "../components/Sharedy/Contacts";

const blockStyle = {
  backgroundImage:
    "linear-gradient(to bottom, rgba(223, 212, 184, 0.4), #F7F2EC 70% )"
};

// Forms not your thing? Call us on {contactDetails.phone} <LineBreak m='auto' children='or drop in anytime without an appointment:' />
const Root = props => (
  <Layout>
    <Header pathname="/contact" clear />

    <Block mw="sm" pt={[5, 4, 5, 5, 6]} textCenter style={blockStyle}>
      <Subheadline children="Confidential, no obligation" />
      <Display children="Get a fast quote." mb={2} />
      <MediumText color="text">
        Let us find you a better solution. Add your details below and we'll call
        you for a conversation about how we can help.
      </MediumText>

      <Box mw="sm" mt={[3, 4]}>
        <FormHeader bg="brand" color="white" children="Fast quote form" />
        <FormQuote />
      </Box>
    </Block>

    <Block textCenter>
      <ContactAction headlineColor="brandAlt" />
      <Contacts />
    </Block>

    <Footer />
  </Layout>
);

class FastQuote extends React.Component {
  static async getInitialProps({ pathname, query }) {
    return {
      pathname,
      defaultForm: query.form
    };
  }

  render() {
    return <Root {...this.props} />;
  }
}

export default FastQuote;
