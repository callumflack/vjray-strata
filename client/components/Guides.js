import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import gql from 'graphql-tag';
import apollo from '../lib/apollo.js';

import theme from './theme.js';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import { Text, SmallText } from './Shared/Text.js';
import Button from './Shared/Button'
import { IconDownload } from './Shared/Icons'

import BoxReset from './BoxReset'
import ImageWithShadow from './ImageWithShadow'


const GuideButton = (props) => (
  <SmallText
    align='center'
    font='textRegular'
    letterSpacing='button'
    mt={3}
    noUnderline
  >
    <Link href={`${props.guide.file.url}`}>
      <a>
        <Button clean color='white'>
          {props.icon && <IconDownload bottom mr={1} />}
          {props.guide.title || 'Download'}
        </Button>
      </a>
    </Link>
  </SmallText>
);

// Box or BoxReset?
const Root = (props) => (
  <div>
      <Flex
        direction={!props.primary && [ 'column', 'row' ]}
        justify='center'
        mx={-2}>
        {props.children}
      </Flex>
      <BoxReset>
    </BoxReset>
  </div>
);

const StyledBox = styled(Box)`
  @media (max-width: 512px) {
    &:not(:first-child) {
      margin-top: 3rem;
    }
  }
`

const StyledLink = styled(Box)`
  border: 1px solid rgba(0, 0, 0, 0.05);
`

// {props.buttons && (
//   <GuideButton guide={guide} icon={props.icon} />
// )}

const Guides = (props) => (
  <Root primary={props.primary}>
    {props.guides.map((guide, i) =>
      <StyledBox
        width={props.primary ? [8/12, 1/2, 8/12] : [8/12, 1/2, 5/12 ]}
        mx={['auto', 0]}
        px={2}
        key={guide._id}
      >
        <StyledLink>
          <Link href={`${guide.file.url}`}>
            <a href={`${guide.file.url}`}>
              <ImageWithShadow src={guide.featureImage.secure_url} />
            </a>
          </Link>
        </StyledLink>

      </StyledBox>
    )}
  </Root>
);

class GuidesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guides: [],
    };
  }

  async componentDidMount() {
    const query = gql`{
      guides(
        primary: ${this.props.primary},
        featured: ${this.props.featured},
        limit: ${this.props.limit},
      ) {
        _id,
        title,
        featureImage {
          secure_url,
        },
        file {
          url,
        },
        createdAt,
      }
    }`;

    const { data: { guides } } = await apollo.query({ query });
    this.setState({ guides });
  }

  render() {
    return <Guides guides={this.state.guides} {...this.props} />
  }
}

GuidesContainer.propTypes = {
  limit: PropTypes.number,
  primary: PropTypes.bool,
  featured: PropTypes.bool,
  buttons: PropTypes.bool,
  icon: PropTypes.bool,
};

GuidesContainer.defaultProps = {
  limit: 0,
  primary: false,
  featured: false,
  buttons: false,
  icon: false,
};

export default GuidesContainer;

export {
  GuideButton,
};