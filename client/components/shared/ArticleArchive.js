import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'

import gql from 'graphql-tag';
import apollo from '../../lib/apollo.js';

import theme from '../theme'
import { formatDateString } from '../../lib/date.js'
import { Box, Flex } from '../styled-grid'
import Container from '../shared/Container'
import { Subheadline } from '../shared/Headline'
import { Text, LargeText } from '../shared/Text'


const ArticleRoot = Flex.withComponent('a').extend`
  border-bottom: 1px solid ${theme.colors.text20};
  flex-direction: column;

  &:first-child {
    border-top: 1px solid ${theme.colors.text20};
  }

  @media (min-width: ${theme.containers.sm}) {
    flex-direction: row;
  }
`

const Article = props =>
  <ArticleRoot href='#'>
    <Flex align='flex-end' width={[ 1, 1/4 ]}>
      <Text
        align='left'
        color='text70'
        mt={3}
        mb={[ 0, 3 ]}
        style={{ transform: 'translateY(-3px)' }}
      >
        {formatDateString(props.post.createdAt)}
      </Text>
    </Flex>
    <Flex width={[ 1, 3/4 ]}>
      <Link href={`/article?slug=${props.post.slug}`} as={`/article/${props.post.slug}`}>
        <LargeText
          align='left'
          font='displayRegular'
          mt={[ 1, 3 ]}
          mb={3}
        >
          {props.post.title}
        </LargeText>
      </Link>
    </Flex>
  </ArticleRoot>


class ArticleContainer extends React.Component {
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
        <Container textCenter>
          <Subheadline children='Article archive' />
        </Container>

        {this.state.posts.map((post, i) =>
          <Article post={post}/>
        )}
      </div>
    )
  }
}

export default ArticleContainer;
