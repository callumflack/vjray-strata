import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import { formatDateString } from "../../lib/date.js";

import styled from "styled-components";
import theme from "../theme";
import { Flex } from "../styled-grid";
import { Text, LargeText } from "../Sharedy/Text";

const Root = Flex.withComponent("a").extend`
  border-bottom: 1px solid ${theme.colors.text20};
  flex-direction: column;

  &:first-child {
    border-top: 1px solid ${theme.colors.text20};
  }

  @media (min-width: ${theme.containers.sm}) {
    flex-direction: row;
  }
`;

const Post = props => (
  <Root href="#">
    <Flex align="flex-end" width={[1, 1 / 4]}>
      <Text
        align="left"
        color="text70"
        mt={3}
        mb={[0, 3]}
        style={{ transform: "translateY(-3px)" }}
      >
        {formatDateString(props.post.createdAt)}
      </Text>
    </Flex>
    <Flex width={[1, 3 / 4]}>
      <Link
        href={`/blog?slug=${props.post.slug}`}
        as={`/blog/${props.post.slug}`}
      >
        <LargeText align="left" font="displayRegular" mt={[1, 3]} mb={3}>
          {props.post.title}
        </LargeText>
      </Link>
    </Flex>
  </Root>
);

Post.propTypes = {
  post: PropTypes.object
};

export default Post;
