import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import apollo from '../lib/apollo'

import theme from '../components/theme'
import { contactDetails } from '../components/constants'

import { Box } from 'rebass'
import Layout from '../components/Shared/Layout'
import Container from '../components/Shared/Container'
import { Display, Headline, Subheadline } from '../components/Shared/Headline'
import { MediumText, LargeText, LineBreak } from '../components/Shared/Text'

import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import { FormHeader } from '../components/Shared/Form.js'
import FormQuote from '../components/FormQuote'
import ContactAction from '../components/ContactAction'
import Contacts from '../components/Shared/Contacts'


const blockStyle = {
  backgroundImage: 'linear-gradient(to bottom, rgba(223, 212, 184, 0.4), #F7F2EC 70% )'
}

// Forms not your thing? Call us on {contactDetails.phone} <LineBreak m='auto' children='or drop in anytime without an appointment:' />
const Root = props => (
  <Layout>
    <Header pathname='/contact' clear />

    <Block
      mw='sm'
      pt={[ 5, 4, 5, 5, 6 ]}
      textCenter
      style={blockStyle}
    >
      <Subheadline children='Confidential, no obligation' />
      <Display children='Get a fast quote.' mb={2} />
      <MediumText color='text'>
        Let us find you a better solution. Add your details below and we'll call you for a conversation about how we can help.
      </MediumText>

      <Box mw='sm' mt={[3, 4]}>
        <FormHeader bg='brand' color='white' children='Fast quote form' />
        <FormQuote />
      </Box>
    </Block>

    <Block textCenter>
      <ContactAction headlineColor='brandAlt' />
      <Contacts pathname={props.pathname} />
    </Block>

    <Footer />
  </Layout>
)

class FastQuote extends React.Component {
  static async getInitialProps({ pathname, query }) {
    return {
      pathname,
      defaultForm: query.form,
    }
  }

  render() {
    return (
      <Root {...this.props} />
    )
  }
}

export default FastQuote;