import React, { PropTypes } from 'react';
import Link from 'next/link';

import gql from 'graphql-tag';
import apollo from '../../lib/apollo.js';

import theme from '../theme.js';
import styled from 'styled-components';
import { Box, Flex } from '../styled-grid';
import { Text, SmallText } from '../styled-elements/Text.js';
import FlexMobileColumn from '../Shared/FlexMobileColumn'
import Button from '../styled-elements/Button'
import { IconDownload } from '../styled-elements/Icons'
import { ImageWithShadow } from './ImageWithShadow'


const Root = (props) => (
  <div>
    {props.primary ? (
      <div>
        {props.children}
      </div>
    ) : (
      <FlexMobileColumn mx={-3} align='center' justify='space-between'>{props.children}</FlexMobileColumn>
    )}
  </div>
);

const GuideButton = (props) => (
  <SmallText
    align='center'
    font='textRegular'
    letterSpacing='button'
    mt={3}
  >
    <Button clean color='white'>
      {props.icon && <IconDownload bottom mr={1} />}
      {props.title || 'Download'}
    </Button>
  </SmallText>
);

const Guides = (props) => (
  <Root primary={props.primary}>
    {props.guides.map((guide, i) =>
      <Box
        width={props.primary ? [1, 1/2] : [1, 1/3]}
        px={[4, 3]}
        key={guide._id}
      >
        <Link href={`${guide.file.url}`}>
          <a href={`${guide.file.url}`}>
            <ImageWithShadow src={guide.featureImage.secure_url} />
          </a>
        </Link>

        {props.buttons && (
          <GuideButton title={guide.title} icon={props.icon} />
        )}
      </Box>
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