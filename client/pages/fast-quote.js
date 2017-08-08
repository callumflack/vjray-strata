import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import apollo from '../lib/apollo'

import theme from '../components/theme'
import { contactDetails } from '../components/constants'

import Layout from '../components/styled-elements/Layout'
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import ColorBox from '../components/Shared/ColorBox'
import Container from '../components/styled-elements/Container'
import { Display, Headline, Subheadline } from '../components/styled-elements/Headline'
import { MediumText, LargeText, LineBreak } from '../components/styled-elements/Text'

import { FormHeader } from '../components/Shared/Form.js'
import FormQuote from '../components/Shared/FormQuote'
import ContactAction from '../components/Shared/ContactAction'
import Contact from '../components/Shared/Contact'


const StyledColorBox = styled(ColorBox)`
  background-color: transparent;
  background-image:
    linear-gradient(
      to bottom,
      rgba(222, 202, 178, 0.4),
      ${theme.colors.beige} 70%
    );
`

class FastQuote extends React.Component {
  static async getInitialProps({ req, query }) {
    const postQuery = gql`{
      post(slug: "${query.slug}") {
        _id,
        slug,
        title,
        description,
        content {
          html,
        },
        createdAt,
      }
    }`;

    return await apollo.query({
      query: postQuery,
    });
  }

  render() {
    return (
      <Layout>
        <Header clear />

        <StyledColorBox pb={[ 4, 5, 6 ]} px={3}>
          <Container mw='sm' mt={[ 4, 5, 6 ]} textCenter>
            <Subheadline color='brand' children='Confidential & no obligation' />
            <Display children='Get a fast quote.' />
            <MediumText color='text'>
              Forms not your thing? Call us on {contactDetails.phone}
              <LineBreak m='auto' children='or drop in anytime without an appointment.' />
            </MediumText>
          </Container>

          <Container mw='sm' mt={[3, 4]}>
            <FormHeader bg='brand' color='white' children='Fast quote form' />
            <FormQuote />
          </Container>
        </StyledColorBox>

        <Block textCenter>
          <ContactAction headlineColor='brandAlt' />
          <Contact />
        </Block>

        <Footer />
      </Layout>
    )
  }
}

export default FastQuote;