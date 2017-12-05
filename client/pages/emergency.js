import React from "react";
import Link from "next/link";

import { contactDetails } from "../components/constants";
import Layout from "../components/Shared/Layout";
import { Text, LargeText, PrimaryButtonText } from "../components/Shared/Texts";
import LineBreak from "../components/Shared/LineBreak";
import ButtonOutline from "../components/Shared/Buttons";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";
import HeroBlock from "../components/Shared/HeroBlock";
import HGroup from "../components/Shared/HGroup";
import Block from "../components/Shared/Block";

// prettier-ignore
const EmergencyItem = props => (
  <div>
    <LargeText family="displayMedium" mb={1}>
      {props.heading}
    </LargeText>
    <Text mb={4} color="text70">
      {props.text}
      {props.link && !props.button && (
        <Link href={props.link}>
          <a>{props.linkLabel}</a>
        </Link>
      )}
    </Text>
    {/* {props.button && (
      <PrimaryButtonText color="white" align="left" mt={2} mb={4}>
        <Link href={props.link} prefetch passHref>
          <a>
            <ButtonOutline brandBg icon color="brand">
              {props.linkLabel}
            </ButtonOutline>
          </a>
        </Link>
      </PrimaryButtonText>
    )} */}
    {props.afterText && (
      <Text mb={4} color="text70">
        {props.afterText}
      </Text>
    )}
  </div>
);

const Root = props => (
  <Layout>
    <Header pathname="/contact" clear />

    <HeroBlock
      bluegreyGradientBg
      img="https://res.cloudinary.com/pw-img-cdn/image/upload/v1504161478/hero-emegency_dtjyhz.png"
    >
      <HGroup
        title={
          <span>
            It happens.&nbsp;
            <LineBreak>We&apos;re prepared.</LineBreak>
          </span>
        }
        titleColor="brandAlt"
        titleFamily="displayMedium"
        text={
          <span>
            At VJ Ray Strata,&nbsp;
            <LineBreak break={["inline", "block"]}>
              we&apos;ll sort it for you.
            </LineBreak>
          </span>
        }
        textColor="text70"
      />
    </HeroBlock>

    <Block maxWidth="38em">
      <EmergencyItem
        heading="Is it due to a natural disaster?"
        text="In the case of a natural disaster such as a major storm or flood, please
        contact the NSW State Emergency Service on "
        link="tel:132-500"
        linkLabel="132 500"
      />

      <EmergencyItem
        heading="Is it a rental property?"
        text="If your repair relates to a property that you are renting through one of
        our offices, please go to the "
        link="http://www.vjray.com.au/"
        linkLabel="VJ Ray Group website"
      />

      <EmergencyItem
        heading="Is it a non-urgent issue?"
        text="For non-urgent repairs please report the issue with the following link: "
        link="/contact?form=report#contact-forms"
        linkLabel="Report an issue"
        button
      />

      <EmergencyItem
        heading="Is it within business hours?"
        text="If your repair is urgent and the time is currently office hours, please
        contact us by calling "
        link={`tel:${contactDetails.emergencyBusinessHours}`}
        linkLabel="${contactDetails.emergencyBusinessHours}"
        afterText="Please don't rely on an email for an urgent repair as your strata
        manager may not see the email in time to contact the relevant repairer."
      />

      <EmergencyItem
        heading="Is it after-hours?"
        text="Remember, our business hours include Saturdays until 4pm (2pm at our
        Carringbah office). For after-hours emergency repairs only, contact our
        director Mike Pollard on "
        link={`tel:${contactDetails.emergencyAfterHours}`}
        linkLabel="${contactDetails.emergencyAfterHours}"
        afterText="Additional charges will apply."
      />

      {/* <ResponsiveToggle hideAtDesktop>
        <LargeButtonStyler color="white" align="left" mt={2}>
          <Link href={`tel:${contactDetails.emergencyAfterHours}`}>
            <a>
              <Button
                icon
                color="brand"
                bgColor="transparent"
                children="Call after-hours"
              />
            </a>
          </Link>
        </LargeButtonStyler>
      </ResponsiveToggle> */}
    </Block>

    <Footer />
  </Layout>
);

class Emergency extends React.Component {
  static async getInitialProps({ pathname }) {
    return {
      pathname,
    };
  }

  render() {
    return <Root {...this.props} />;
  }
}

export default Emergency;
