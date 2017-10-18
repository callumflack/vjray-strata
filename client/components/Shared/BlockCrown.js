import PropTypes from 'prop-types';
import Link from 'next/link'
import styled from 'styled-components'
import { Box } from 'rebass';
import Block from './Block'
import { LargeText } from './Texts'
import { Display, Heading, Subheading } from './Headings'

// p?
const BlockCrown = props => (
  <Block
    id={props.id}
    bg={props.bg}
    textCenter={props.textCenter}
    maxWidth={props.maxWidth}
    border={props.border}
    noBottomPadding={props.noBottomPadding}
  >
    <Box width={props.crownWidth} mx='auto'>
      {props.subhead && (
        <Subheading
          color={props.subheadColor}
          children={props.subhead}
        />
      )}
      {props.heading && (
        <Heading
          color={props.headingColor}
          family={props.headingFamily}
          children={props.heading}
          mb={3}
        />
      )}
      {props.title && (
        <Display
          color={props.titleColor}
          family={props.titleFamily}
          dangerouslySetInnerHTML={{ __html: props.title }}
          mb={3}
        />
      )}
      {props.text && (
        <LargeText
          color={props.largeTextColor}
          mb={4}
          dangerouslySetInnerHTML={{ __html: props.text }}
        />
      )}
    </Box>
    {props.children}
  </Block>
);

BlockCrown.propTypes = {
  id: PropTypes.string,
  bg: PropTypes.string,
  border: PropTypes.bool,
  noBottomPadding: PropTypes.bool,
  textCenter: PropTypes.bool,
  maxWidth: PropTypes.string,
  crownWidth: PropTypes.string,
  subhead: PropTypes.string,
  subheadColor: PropTypes.string,
  heading: PropTypes.string,
  headingColor: PropTypes.string,
  headingFamily: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleFamily: PropTypes.string,
  text: PropTypes.string,
  largeTextColor: PropTypes.string,
}

BlockCrown.defaultProps = {
  textCenter: true,
  border: false,
  noBottomPadding: false,
  subheadColor: "text",
  headingColor: "text",
  titleColor: "text",
  titleFamily: "displayRegular",
  largeTextColor: "text70",
};

export default BlockCrown;
