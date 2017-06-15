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

const RecentPosts = (props) => (
  <div>
    <HeaderHr><Button clean icon>Recent posts</Button></HeaderHr>

    <Image src='http://lorempixel.com/300/225' />

    <h2><strong>The five biggest pitfalls to avoid in your Body Corp.</strong></h2>
    <Paragraph>Adipisicing tempora unde dolorum nam sint? Tempore accusantium asperiores rem ipsa laboriosam maxime Dolor sed provident fugiat ut expedita voluptate? Molestias mollitia culpa quos labore? <Text brand><Button clean icon><strong>Read more</strong></Button></Text></Paragraph>
  </div>
);

export default RecentPosts;
