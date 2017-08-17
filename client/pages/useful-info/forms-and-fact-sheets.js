import React from 'react'
import Link from 'next/link';
import styled, { css } from 'styled-components'
import gql from 'graphql-tag'
import apollo from '../../lib/apollo'

import { Box, Flex } from '../../components/styled-grid'
import theme from '../../components/theme'

import hoc from '../../components/styled-elements/hoc'
import Layout from '../../components/styled-elements/Layout'
import Container from '../../components/styled-elements/Container'
import { Display, Subheadline } from '../../components/styled-elements/Headline'
import { LargeText, MediumText, Text, InlineText, LineBreak } from '../../components/styled-elements/Text'

import Block from '../../components/Shared/Block'
import ContactAction from '../../components/Shared/ContactAction'
import Contact from '../../components/Shared/Contact'
import Footer from '../../components/Shared/Footer'
import Header from '../../components/Shared/Header'


const ListItemRoot = styled(Box)`
  border-bottom: 1px solid ${theme.colors.text20};
`;

const ListItem = props => (
  <Link href={`${props.fileUrl}`}>
    <a>
      <ListItemRoot py={3}>
        <Flex align='baseline' wrap='nowrap'>
          <LargeText color='text' mr={2}>{props.headline}</LargeText>
          <Text color='text70'>{props.subheadline}</Text>
        </Flex>
      </ListItemRoot>
    </a>
  </Link>

);

// `${theme.blockHeights.navBar}px`
const Root = (props) => (
  <Layout>
    <Header pathname={props.pathname} clear />

    <Block mw='sm' pb={[0]}>
      <Box width={[ 1, 1, 2/3, 2/3 ]} style={{ paddingTop: theme.blockHeights.navBar }}>
        <Subheadline children='Take action' />
        <Display color='brand'>
          Strata forms <LineBreak>and fact sheets.</LineBreak>
        </Display>
        <LargeText color='text70'>
          Readily available PDF downloads <LineBreak>to help your Strata management.</LineBreak>
        </LargeText>
      </Box>
    </Block>

    <Box py={[ 4, 5, 6 ]} px={3}>
      <Box pb={[ 4, 5 ]}>
        <Container mw='sm' >
          <Subheadline children='Forms' mb={2} />

          <div>
            {props.forms.map(form => (
              <ListItem
                headline={form.headline}
                subheadline={form.subheadline}
                fileUrl={form.file.url}
                key={form._id}
              />
            ))}
          </div>
        </Container>
      </Box>

      <Box>
        <Container mw='sm'>
          <Subheadline children='Fact sheets' mb={2} />

          <div>
            {props.factSheets.map(factSheet => (
              <ListItem
                headline={factSheet.headline}
                subheadline={factSheet.subheadline}
                key={factSheet._id}
              />
            ))}
          </div>
        </Container>
      </Box>
    </Box>

    <Block border textCenter>
      <ContactAction headlineColor='brandAlt' />
      <Contact />
    </Block>

    <Footer />
  </Layout>
)

function createPdfSheetQuery(type) {
  return gql`{
    pdfSheets(type: "${type}") {
      _id,
      headline,
      subheadline,
      file {
        url,
      },
      createdAt,
    }
  }`;
}

class FactsAndForms extends React.Component {
  static async getInitialProps({ pathname }) {
    const formsQuery = createPdfSheetQuery('Form');
    const factSheetsQuery = createPdfSheetQuery('Fact Sheet');

    const formsPromise = await apollo.query({ query: formsQuery });
    const factSheetsPromise = await apollo.query({ query: factSheetsQuery });

    const [formsData, factSheetData] = await Promise.all([formsPromise, factSheetsPromise]);
    const forms = formsData.data.pdfSheets;
    const factSheets = factSheetData.data.pdfSheets;

    return {
      pathname,
      forms,
      factSheets,
    };
  }

  render() {
    return <Root pathname={this.props.pathname} {...this.props} />
  }
}

export default FactsAndForms;