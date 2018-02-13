import PropTypes from "prop-types";
import Link from "next/link";

import styled from "styled-components";
import theme from "../theme";
import { Box } from "../styled-grid";

import { LargeText, LineBreak } from "../Sharedy/Text";
import { Display, Subheadline } from "../Sharedy/Headline";
import Button from "../Sharedy/Button";
import Container from "../Sharedy/Container";
import LargeButtonStyler from "./LargeButtonStyler";

const Root = styled(Box) `
  text-align: center;
`;

// How we can help make<LineBreak mx='auto'>your Strata living easier?</LineBreak>
const ContactAction = props => (
  <Root>
    <Subheadline children="Contact us" />
    <Display color={props.headlineColor || "text"} font="displayRegular">
      Strata Management made easy.
    </Display>

    <Box width={[1, 7 / 12]} mx="auto">
      {props.withButton && (
        <LargeButtonStyler color="white" mt={3} mb={3}>
          <Link href="/let-us-help-you">
            <Button
              large
              icon="true"
              bgColor={props.btnColor}
              children="Get a fast quote"
            />
          </Link>
        </LargeButtonStyler>
      )}

      {props.withByline && (
        <LargeText
          color="text70"
          children="…or drop-in without an appointment:"
        />
      )}
    </Box>
  </Root>
);

ContactAction.propTypes = {
  headlineColor: PropTypes.string,
  btnColor: PropTypes.string,
  withButton: PropTypes.bool,
  withByline: PropTypes.bool
};

ContactAction.defaultProps = {
  headlineColor: "text",
  withButton: false
};

export default ContactAction;
