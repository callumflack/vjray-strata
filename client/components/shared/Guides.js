import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import gql from 'graphql-tag';

import apollo from '../../lib/apollo.js';
import theme from '../../css/theme.js';
import {
  Text,
} from '../shared/Text.js';

const GuidesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: left;
  margin-top: 4rem;
`;

const Guide = styled.div`
  width: 175px;
  box-shadow: 0 0 15px #aaa;
`;

const GuideHead = styled.div`
  padding: 0.5rem 0.8rem;
`;

const Icon = styled.div`
  text-align: right;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  line-height: 1;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

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
      <GuidesWrapper>
        {this.state.guides.map((guide, i) =>
          <Guide key={i}>
            <GuideHead>
              <Icon>&#8486;</Icon>

              <Link href={`${process.env.SERVER_URI}/${guide.file.filename}`}>
                <a>
                  <Text brand>{guide.title}</Text>
                </a>
              </Link>
            </GuideHead>

            <Link href={`${process.env.SERVER_URI}/${guide.file.filename}`}>
              <a>
                <Image src={guide.featureImage.secure_url} />
              </a>
            </Link>
          </Guide>
        )}
      </GuidesWrapper>
    )
  }
}

export default Guides;
