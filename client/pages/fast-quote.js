import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import apollo from '../lib/apollo'

import theme from '../components/theme'

import Layout from '../components/styled-elements/Layout'
import Header from '../components/Sharedy/Header'
import Footer from '../components/Sharedy/Footer'
import Block from '../components/Sharedy/Block'
import ColorBox from '../components/Sharedy/ColorBox'
import Container from '../components/styled-elements/Container'
import { Display, Headline, Subheadline } from '../components/styled-elements/Headline'
import { MediumText, LargeText, LineBreak } from '../components/styled-elements/Text'

import { FormHeader } from '../components/Sharedy/Form.js'
import FullQuoteForm from '../components/Sharedy/FullQuoteForm'
import ContactAction from '../components/Sharedy/ContactAction'
import Contact from '../components/Sharedy/Contact'


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
            <Subheadline children='Confidential & no obligation' />
            <Display children='Get a fast quote.' />
            <MediumText color='text'>
              Forms not your thing? Call us on 1300 073
              <LineBreak m='auto' children='or drop in Monday to Saturday, 9am-5pm.' />
            </MediumText>
          </Container>

          <Container mw='sm' mt={[3, 4]}>
            <FormHeader bg='brand' color='white' children='Fast quote form' />
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