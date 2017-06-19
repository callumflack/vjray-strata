import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import theme from '../../css/theme.js';
import Button from './Button.js';
import {
  HeaderHr,
  Text,
  Paragraph,
} from '../shared/Text.js';

const Image = styled.img`
  display: block;
  margin: 3.5rem auto 2.5rem;
  width: 300px;
`;

const PostLink = styled(Button)`
  margin-left: 0.5rem;
  font-weight: bold;
  color: ${theme.colors.brand};
`;

class RecentPosts extends React.Component {
  render() {
    return (
      <div>
        <HeaderHr><Button clean icon>Recent posts</Button></HeaderHr>

        {this.props.posts.map((post, i) =>
          <div key={i}>
            <Image src='http://lorempixel.com/300/225' />

            <h2><strong>{post.title}</strong></h2>

            <Paragraph>{post.description}
              <Link href={`/article?slug=${post.slug}`} as={`/article/${post.slug}`}>
                <a><PostLink clean icon>Read more</PostLink></a>
              </Link>
            </Paragraph>
          </div>
        )}
      </div>
    );
  }
}

export default RecentPosts;
