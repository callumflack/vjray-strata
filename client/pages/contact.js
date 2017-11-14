import React from "react";
import Link from "next/link";

import gql from "graphql-tag";
import apollo from "../lib/apollo";

import { contactDetails } from "../components/constants";
import theme from "../components/theme";
import styled, { css } from "styled-components";
import { Flex, Box } from "rebass";

import Layout from "../components/Shared/Layout";
import Container from "../components/Shared/Container";
import CoverImage from "../components/Shared/CoverImage";
import {
  Display,
  Headline,
  Subheadline,
  MobileSubheadline,
  HeadlineMeta
} from "../components/Shared/Headline";
import {
  LargeText,
  SmallText,
  PrimaryButtonText
} from "../components/Shared/Texts";
import LineBreak from "../components/Shared/LineBreak";
import { Button } from "../components/Shared/Buttons";

import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";
import Block from "../components/Shared/Block";
import HeroBlock from "../components/Shared/HeroBlock";
import HGroup from "../components/Shared/HGroup";

import Contacts from "../components/Shared/Contacts";
import ContactForms from "../components/Shared/ContactForms";

import FormContact from "../components/Shared/FormContact";
import FormIssue from "../components/Shared/FormIssue";
import { FormHeader } from "../components/Shared/Form.js";
import { Tabs, Pane } from "../components/Shared/Tabs.js";
import ContactActionAlt from "../components/ContactActionAlt";
import LargeButtonStyler from "../components/LargeButtonStyler";

const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear color="brandAlt" />

    <HeroBlock
      bluegreyGradientBg
      img="http://res.cloudinary.com/pw-img-cdn/image/upload/v1503618861/hero-contact-_awgf0r.png"
    >
      <HGroup
        title="How can we help make your Strata living easier?"
        titleColor="text"
        titleFamily="displayMedium"
        text="Visit, call or write to us 24/7."
        textColor="text70"
      />
    </HeroBlock>

    <Block
      maxWidth="38em"
      title="Visit us anytime."
      titleColor="brand"
      text="No appointment needed."
      noBottomPadding
    >
      <Contacts pathname={props.pathname} />
      <SmallText center color="text70" mt={[3, 4]}>
        Looking for the Auburn office? They aren&apos;t affiliated with us.
        <LineBreak mx="auto">
          You can find them <Link href="http://vjrayauburn.com.au/">here.</Link>
        </LineBreak>
      </SmallText>
    </Block>

    <Block
      id="contact-forms"
      maxWidth="38em"
      title="Write to us."
      titleColor="brand"
      text="We'll respond quick smart."
      noBottomPadding
    >
      <ContactForms defaultForm={props.defaultForm} />
    </Block>

    <Block
      id="emergencies"
      title="Is it a Strata emergency?"
      titleColor="brand"
      text="Go to our after-hours Strata repairs."
    >
      <a href="https://vjraystrata.com.au/emergency">
        <PrimaryButtonText center>
          <Button icon bg="brand" children="Emergencies" />
        </PrimaryButtonText>
      </a>
    </Block>

    <Block
      border
      maxWidth="38em"
      subhead="Learn more"
      title="Skip the hassle of Strata Management"
      titleColor="text"
    >
      <a href="let-us-help-you">
        <PrimaryButtonText center>
          <Button icon bg="brand" children="Get a fast quote" />
        </PrimaryButtonText>
      </a>
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
