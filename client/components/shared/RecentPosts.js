import React from 'react';
import Link from 'next/link';

import gql from 'graphql-tag';
import apollo from '../../lib/apollo.js';

import styled from 'styled-components';
import { hoc } from '../styled-system/styled-components';
import theme from '../theme.js';
import { Flex, Box } from '../styled-grid';
import { Text, InlineText } from '../shared/Text.js';
import { Headline, Subheadline  } from '../shared/Headline.js';


const PostsSubheadline = props =>
  <Subheadline>
    <Link href={`/`} as={`/home`}>
      {props.children || 'Recent posts'}
    </Link>
  </Subheadline>

const PostLink = hoc('span').extend`
  color: ${theme.colors.brand};
  margin-left: 0.5rem;

  :after {
    content: '►';
    font-size: 70%;
    margin-left: 6px;
  }
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
        <PostsSubheadline />

        {this.state.posts.map((post, i) =>
          <div key={i}>
            <Box
              width={[ 1, 2/3 ]}
              mx='auto'
              my={3}>
              <img src='http://lorempixel.com/620/460' />
            </Box>

            <Headline
              font='displayMedium'
              color='text'
              my={3}
              children={post.title} />

            <Text>
              {post.description}
              <Link href={`/article?slug=${post.slug}`} as={`/article/${post.slug}`}>
                <a><PostLink font='textMedium'>Read more</PostLink></a>
              </Link>
            </Text>
          </div>
        )}
      </div>
    );
  }
}

export default RecentPosts;