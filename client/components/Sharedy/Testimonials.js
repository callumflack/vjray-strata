import React from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import apollo from "../../lib/apollo.js";
import styled from "styled-components";
import theme from "../theme.js";
import { Box, Flex } from "../styled-grid";
import { Text, SmallText } from "../Sharedy/Text";

const StyledFlex = styled(Flex)`
  margin: 0.75rem;
  position: relative;

  @media (min-width: 768px) {
    margin: 1rem 2rem;
    width: 290px;
  }
`;

const Quote = styled(SmallText)`
  background-color: white;
  border: 1px solid ${theme.colors.text40};
  display: block;
  padding: 1rem 1.25rem;
  text-align: left;

  @media (min-width: 768px) {
    padding: 1.25rem 1.5rem;
  }
`;

const StyledBox = styled(Box)`
  position: relative;
  top: -1px;
`;

const QuoteTriangle = styled("div")`
  color: ${theme.colors.text40};
  display: inline-block;
`;

const Image = styled.img`
  display: inline-block;
`;

const Testimonials = props => (
  <Flex justify="center" wrap="true">
    {props.testimonials.map((testimonial, i) => (
      <StyledFlex justify="center" column key={testimonial._id}>
        <Quote color="text">{testimonial.quote}</Quote>
        <StyledBox mb={[0, 1]} ml={[3, 4]}>
          <QuoteTriangle>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                fill="currentColor"
                points="28.59 0 1 27.59 1 0 0 0 0 30 30 0 28.59 0"
              />
              <polygon fill="white" points="1 0 1 27.59 28.59 0 1 0" />
            </svg>
          </QuoteTriangle>
        </StyledBox>
        <Box ml={[3, 4]}>
          <Flex justify="flex-end" column>
            <SmallText font="textMedium" color="brandAlt">
              {testimonial.name}
            </SmallText>
            <SmallText color="brandAlt">
              {testimonial.location}
              {testimonial.date && <span>&#44; {testimonial.date}</span>}
            </SmallText>
          </Flex>
        </Box>
      </StyledFlex>
    ))}
  </Flex>
);

class TestimonialsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      testimonials: []
    };
  }

  async componentDidMount() {
    const query = gql`{
      testimonials(
        featured: ${this.props.featured},
        limit: ${this.props.limit}
      ) {
        _id,
        name,
        date,
        quote,
        location
      }
    }`;

    const { data: { testimonials } } = await apollo.query({ query });
    this.setState({ testimonials });
  }

  render() {
    return <Testimonials testimonials={this.state.testimonials} {...this.props} />;
  }
}

TestimonialsContainer.propTypes = {
  featured: PropTypes.bool,
  limit: PropTypes.number
};

TestimonialsContainer.defaultProps = {
  featured: true,
  limit: 5
};

export default TestimonialsContainer;
