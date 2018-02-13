import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";
import theme from "../theme";
import hoc from "../Sharedy/hoc";
import { Box } from "../styled-grid";
import Container from "../Sharedy/Container";
import {
  Display,
  Subheadline,
  HeadlineMetaBaseStyles,
  HeadlineMeta
} from "../Sharedy/Headline";
import { LineBreakAll } from "../Sharedy/Text";
import Button from "../Sharedy/Button";
import LargeButtonStyler from "./LargeButtonStyler";

const Root = styled(Box) `
  text-align: center;
`;

const ContactActionAlt = props => (
  <Root>
    <Subheadline>Contact us</Subheadline>
    <Display color={props.headlineColor || "text"} font="displayRegular" mb={3}>
      Skip the hassle of{" "}
      <LineBreakAll m="auto">Strata Management.</LineBreakAll>
    </Display>
    <LargeButtonStyler>
      <Link href="/let-us-help-you">
        <Button
          large
          icon="true"
          bgColor={props.btnColor}
          children="Get a fast quote"
        />
      </Link>
    </LargeButtonStyler>
  </Root>
);

ContactActionAlt.propTypes = {
  btnColor: PropTypes.string
};

export default ContactActionAlt;
