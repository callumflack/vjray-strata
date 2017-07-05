import React from 'react';
import Link from 'next/link';

import gql from 'graphql-tag';
import apollo from '../../lib/apollo.js';

import theme from '../theme.js';
import styled from 'styled-components';
import { Box, Flex } from '../styled-grid';
import { Text } from '../styled-elements/Text.js';
import { ImageWithShadow } from './ImageWithShadow'


const query = gql`{
  guides(limit: 3) {
    _id,
    title,
    featureImage {
      secure_url,
    },
    file {
      filename
    },
    createdAt,
  }
}`;

class Guides extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guides: [],
    };
  }

  async componentDidMount() {
    const { data: { guides } } = await apollo.query({ query });
    this.setState({ guides });
  }

  render() {
    return (
      <Flex align='center' justify='space-between' mx={-3}>
        {this.state.guides.map((guide, i) =>
          <Box key={i} px={3}>
            <Link href={`${process.env.SERVER_URI}/${guide.file.filename}`}>
              <a><ImageWithShadow src={guide.featureImage.secure_url} /></a>
            </Link>
          </Box>
        )}
      </Flex>
    )
  }
}

export default Guides;