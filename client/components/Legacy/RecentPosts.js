import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import gql from "graphql-tag";
import apollo from "../../lib/apollo.js";

import styled from "styled-components";
import theme from "./theme.js";
import hoc from "../Shared/hoc";
import { Box } from "rebass";
import { Text } from "../Shared/Texts.js";
import { Display, Headline } from "../Shared/Headline.js";

const PostLink = hoc("span").extend`
  margin-left: 0.5rem;

  :after {
    content: '►';
    font-size: 55%;
    margin-left: 6px;
    margin-bottom: 2px;
  }
`;

const HeadlineAligner = hoc("span").extend`
  display: inline-block;
  margin-top: 6px;
`;

/**

Post image for safe-keeping

<Box
  width={[ 1, 5/6 ]}
  mx='auto'
  my={3}
>
  <img src={post.featureImage.secure_url} />
</Box>

* */

class RecentPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const query = gql`{
      posts(limit: ${this.props.limit}) {
        _id,
        slug,
        title,
        featureImage {
          secure_url,
        },
        createdAt,
        description,
      }
    }`;

    const { data: { posts } } = await apollo.query({ query });
    this.setState({ posts });
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post, i) => (
          <div key={i}>
            <Link href={`/blog?slug=${post.slug}`} as={`/blog/${post.slug}`}>
              <a>
                <Box width={[1, 5 / 6]} mx="auto">
                  <Display align="center" color="brandAlt" mb={3}>
                    {post.title}
                  </Display>
                  <Text align="left" mx="auto" w={[1, 10 / 12]}>
                    {post.description}
                    <PostLink color="brandAlt" font="textLight">
                      Read more
                    </PostLink>
                  </Text>
                </Box>
              </a>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

RecentPosts.propTypes = {
  limit: PropTypes.number,
};

RecentPosts.defaultProps = {
  limit: 1,
};

export default RecentPosts;
