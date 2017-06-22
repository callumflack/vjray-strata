import React from 'react';
import Link from 'next/link';

import gql from 'graphql-tag';
import apollo from '../../lib/apollo.js';

import styled from 'styled-components';
import theme from '../theme.js';
import { Flex, Box } from '../styled-grid';
import Button from './Button.js';
import { Texty } from '../shared/Texty.js';
import { Subheadline  } from '../shared/Headline.js';

import {
  HeaderHr,
  Text,
  Paragraph,
} from '../shared/Text.js';

const Image = styled.img`
  width: 300px;
`;

const PostLink = styled(Button)`
  margin-left: 0.5rem;
  font-weight: bold;
  color: ${theme.colors.brand};
`;





class RecentPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: props.limit || 1,
      posts: [],
    }
  }

  async componentDidMount() {
    const query = gql`{
      posts(limit: ${this.state.limit}) {
        _id,
        slug,
        title,
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
        {/* <HeaderHr><Button clean icon>Recent posts</Button></HeaderHr> */}
        <Subheadline>
          <Link href={`/`} as={`/home`}>
            Recent posts
          </Link>
        </Subheadline>


        {this.state.posts.map((post, i) =>
          <div key={i}>
            <Box mt={2}>
              <Image src='http://lorempixel.com/300/225' />
            </Box>

            <h2><strong>{post.title}</strong></h2>

            <Texty>
              {post.description}
              <Link href={`/article?slug=${post.slug}`} as={`/article/${post.slug}`}>
                <a><PostLink clean icon>Read more</PostLink></a>
              </Link>
            </Texty>
          </div>
        )}
      </div>
    );
  }
}

export default RecentPosts;