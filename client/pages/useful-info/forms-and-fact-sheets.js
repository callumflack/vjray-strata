import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'
import gql from 'graphql-tag'
import apollo from '../../lib/apollo'

import { Box, Flex } from '../../components/styled-grid'

import Layout from '../../components/styled-elements/Layout'
import Container from '../../components/styled-elements/Container'
import { Display, Subheadline } from '../../components/styled-elements/Headline'
import { LargeText, MediumText, LineBreak } from '../../components/styled-elements/Text'

import HeroBox from '../../components/Shared/HeroBox'
import Footer from '../../components/Shared/Footer'
import Header from '../../components/Shared/Header'


const WhiteHeroBox = HeroBox.extend`
  background-color: white;
  height: auto;
`;

const ListItemRoot = styled(Box)`
  border-bottom: 1px solid #f2f2f2;

  &:first-child {
    padding-top: 0;
  }
`;

const ListItem = props => (
  <ListItemRoot py={3}>
    <Flex direction={[ 'column', 'row' ]} align={[ 'flex-start', 'flex-end' ]}>
      <Link href={`${props.fileUrl}`}>
        <a>
          <ItemHeadline>{props.headline}</ItemHeadline>
          <MediumText pt={[ 1, 0 ]} color='text70'>{props.subheadline}</MediumText>
        </a>
      </Link>
    </Flex>
  </ListItemRoot>
);

const ItemHeadline = styled.h1`
  font-weight: bold;
  margin-right: 2rem;
`;


const Root = (props) => (
  <Layout>
    <Header pathname={props.pathname} clear />

    <WhiteHeroBox pb={[ 4, 5, 6 ]} px={3}>
      <Container mw='rg' mt={[ 3, 4, 5 ]}>
        <Box width={[ 1, 1, 2/3, 2/3 ]} mt={[ 0, 3 ]}>
          <Subheadline color='brand' children='Info on the go' />
          <Display color='brand' font='displayLight'>
            Strata forms <LineBreak>and fact sheets.</LineBreak>
          </Display>
          <LargeText color='text70'>
            Everything you might need to <LineBreak>know about your Strata management. </LineBreak>
          </LargeText>
        </Box>
      </Container>
    </WhiteHeroBox>

    <Box p={3}>
      <Container>
        <Subheadline children='Forms' />

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

    <Box p={3}>
      <Container>
        <Subheadline children='Fact sheets' />

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
