import React from 'react';
import Link from 'next/link';

import gql from 'graphql-tag';
import apollo from '../../lib/apollo.js';

import styled from 'styled-components';
import theme from '../theme.js';
import hoc from '../styled-elements/hoc';
import { Box } from '../styled-grid';
import { Text } from '../styled-elements/Text.js';
import { Headline  } from '../styled-elements/Headline.js';


const PostLink = hoc('span').extend`
  margin-left: 0.5rem;

  :after {
    content: '►';
    font-size: 70%;
    margin-left: 6px;
  }
`;

const HeadlineAligner = hoc('span').extend`
  display: inline-block;
  margin-top: 6px;
`

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
        {this.state.posts.map((post, i) =>
          <div key={i}>

            <Box
              width={1}
              mx='auto'
              my={3}
            >
              <img src={post.featureImage.secure_url} />
            </ Box>
            <Box
              width={[ 1, 5/6 ]}
              mx='auto'
              my={3}
            >
              <Headline
                align='left'
                font='displayRegular'
                color='text'
                my={3}
              >
                <HeadlineAligner>{post.title}</HeadlineAligner>
              </Headline>
              <Text align='left'>
                {post.description}
                <Link href={`/article?slug=${post.slug}`} as={`/blog/${post.slug}`}>
                  <a><PostLink color='brand' font='textLight'>Read more</PostLink></a>
                </Link>
              </Text>
            </Box>

          </div>
        )}
      </div>
    );
  }
}

export default RecentPosts;