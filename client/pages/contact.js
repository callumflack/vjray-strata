import React from "react";
import Link from "next/link";

import gql from "graphql-tag";
import apollo from "../lib/apollo";

import { contactDetails } from "../components/constants";

import theme from "../components/theme";
import styled, { css } from "styled-components";
import { Flex, Box } from "../components/styled-grid";

import Layout from "../components/Sharedy/Layout";
import Container from "../components/Sharedy/Container";
import CoverImage from "../components/Sharedy/CoverImage";
import {
  Display,
  Headline,
  Subheadline,
  MobileSubheadline,
  HeadlineMeta
} from "../components/Sharedy/Headline";
import {
  Text,
  SmallText,
  LargeText,
  LineBreak
} from "../components/Sharedy/Text";
import Button from "../components/Sharedy/Button";

import Header from "../components/Sharedy/Header";
import Footer from "../components/Sharedy/Footer";
import Block from "../components/Sharedy/Block";
import HeroContact from "../components/Sharedy/HeroContact";
import FormContact from "../components/Sharedy/FormContact";
import FormIssue from "../components/Sharedy/FormIssue";
import { FormHeader } from "../components/Sharedy/Form.js";
import { Tabs, Pane } from "../components/Sharedy/Tabs.js";
import ContactActionAlt from "../components/Sharedy/ContactActionAlt";
import Contacts from "../components/Sharedy/Contacts";
import LargeButtonStyler from "../components/Sharedy/LargeButtonStyler";

const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear color="brandAlt" />
    <HeroContact />

    <Block textCenter pb={[0, 0]}>
      <Display color="brandAlt" mb={1} children="Visit us anytime." />
      <LargeText color="text70" children="No appointment necessary." />
      <Box mt={0}>
        <Contacts />
        <SmallText color="text70" mt={[3, 4]}>
          Looking for the Auburn office? They aren't affiliated with us.{" "}
          <LineBreak mx="auto">
            You can find them{" "}
            <Link href="http://vjrayauburn.com.au/">here.</Link>
          </LineBreak>
        </SmallText>
      </Box>
    </Block>

    <Block id="contact-forms" mw="sm" pb={[0, 0]}>
      <Container textCenter>
        <Display color="brandAlt" mb={1} children="Write to us." />
        <LargeText color="text70">We'll respond quick smart.</LargeText>
      </Container>

      <Box mt={[3, 3, 3, 4]}>
        <Tabs selected={props.defaultForm === "report" ? 1 : 0}>
          {props.tabs.map(tab => (
            <Pane label={tab.name} key={tab._id}>
              {tab.content}
            </Pane>
          ))}
        </Tabs>
      </Box>
    </Block>

    <Block textCenter>
      <Display color="brand" mb={1} children="Is it an emergency?" />
      <LargeText color="text70" mb={3}>
        For all types of after-hours repairs.
      </LargeText>
      <LargeButtonStyler>
        <Link href="/emergency">
          <Button large icon bgColor="brand" children="Emergencies" />
        </Link>
      </LargeButtonStyler>
    </Block>

    <Block border>
      <ContactActionAlt btnColor="brandAlt" />
    </Block>

    <Footer />
  </Layout>
);

class ContactPage extends React.Component {
  static async getInitialProps({ pathname, query }) {
    return {
      pathname,
      defaultForm: query.form
    };
  }

  render() {
    const tabs = [
      {
        _id: 0,
        name: "Quick response",
        content: <FormContact />
      },
      {
        _id: 1,
        name: "Report an issue",
        content: <FormIssue />
      }
    ];

    return <Root pathname={this.props.pathname} tabs={tabs} {...this.props} />;
  }
}

export default ContactPage;
