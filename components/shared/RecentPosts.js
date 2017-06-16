import React from 'react';
import styled from 'styled-components';

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

class RecentPosts extends React.Component {
  render() {
    return (
      <div>
        <HeaderHr><Button clean icon>Recent posts</Button></HeaderHr>

        {this.props.posts.map((post, i) =>
          <div key={i}>
            <Image src='http://lorempixel.com/300/225' />

            <h2><strong>{post.title}</strong></h2>

            <Paragraph>{post.content}<Text brand><Button clean icon><strong>Read more</strong></Button></Text></Paragraph>
          </div>
        )}
      </div>
    );
  }
}

export default RecentPosts;
