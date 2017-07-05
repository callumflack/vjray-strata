import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import apollo from '../lib/apollo'

import theme from '../components/theme'

import Layout from '../components/shared/Layout'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Block from '../components/shared/Block'
import ColorBox from '../components/shared/ColorBox'
import Container from '../components/shared/Container'
import { Display, Headline, Subheadline } from '../components/shared/Headline'
import { MediumText, LargeText, LineBreak } from '../components/shared/Text'

import { FormHeader } from '../components/shared/Form.js'
import FullQuoteForm from '../components/shared/FullQuoteForm'
import ContactAction from '../components/shared/ContactAction'
import Contact from '../components/shared/Contact'


const StyledColorBox = styled(ColorBox)`
  background-color: ${theme.colors.beige};
  background-image:
    linear-gradient(
      to bottom,
      rgba(222, 202, 178, 0.2),
      ${theme.colors.beige} 40%
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
            <Subheadline>Confidential & no obligation</Subheadline>
            <Display>Get a fast quote.</Display>
            <MediumText color='text'>
              Forms not your thing? Call us on 1300 073
              <LineBreak m='auto'>or drop in Monday to Saturday, 9am-5pm.</LineBreak>
            </MediumText>
          </Container>

          <Container mw='sm' mt={[3, 4]}>
            <FormHeader bg='brand' color='white'>Quick response message</FormHeader>
            <FullQuoteForm />
          </Container>
        </StyledColorBox>

        <Block textCenter>
          <ContactAction btnColor='brandAlt' />
          <Contact />
        </Block>

        <Footer />
      </Layout>
    )
  }
}

export default FastQuote;