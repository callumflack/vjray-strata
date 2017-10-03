import React from 'react'
import Link from 'next/link';

import gql from 'graphql-tag';
import apollo from '../lib/apollo.js';
import { formatDateString } from '../lib/date.js'

import styled from 'styled-components'
import theme from './theme'

import { Box, Flex } from 'rebass'
import Container from './Shared/Container'
import { Subheadline } from './Shared/Headline'
import { Text, LargeText } from './Shared/Text'

import Post from './Post'


class PostContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 0,
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
        {this.state.posts.map((post, i) =>
          <Post post={post}/>
        )}
      </div>
    )
  }
}

export default PostContainer;