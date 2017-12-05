import Link from "next/link";
import styled from "styled-components";
import theme from "../theme";
import hoc from "../Sharedy/hoc";
import { HeadlineMetaBaseStyles } from "../Sharedy/Headline";
import Button from "../Sharedy/Button";

const Root = hoc("span").extend``;

export default props => (
  <Root {...HeadlineMetaBaseStyles} align="center" color="white" {...props} />
);
