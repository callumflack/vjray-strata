import Link from "next/link";
import styled from "styled-components";
import theme from "../theme";
import hoc from "../Sharedy/hoc";
import { HeadlineMetaBaseStyles } from "../Sharedy/Headline";
import Button from "../Sharedy/Button";

const Root = hoc("div").extend`
  a {
    background-image: initial;
  }

  a + a,
  button + button {
    margin-left: 16px;
  }
`;

export default props => (
  <Root
    {...HeadlineMetaBaseStyles}
    align="center"
    color={props.bgColor || "white"}
    {...props}
  />
);
