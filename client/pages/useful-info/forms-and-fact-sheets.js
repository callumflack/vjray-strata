import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'
import gql from 'graphql-tag'
import apollo from '../../lib/apollo'

import { Box, Flex } from '../../components/styled-grid'

import theme from '../../components/theme'

import hoc from '../../components/styled-elements/hoc'
// import { hoc } from '../../components/styled-system/styled-components'
import Layout from '../../components/styled-elements/Layout'
import Container from '../../components/styled-elements/Container'
import { Display, Subheadline } from '../../components/styled-elements/Headline'
import { LargeText, MediumText, InlineText, LineBreak } from '../../components/styled-elements/Text'

import ColorBox from '../../components/Shared/ColorBox'
import Footer from '../../components/Shared/Footer'
import Header from '../../components/Shared/Header'


const StyledColorBox = styled(ColorBox)`
  background-color: transparent;
  background-image:
    linear-gradient(
      to bottom,
      rgba(74, 74, 85, 0.2),
      rgba(74, 74, 85, 0) 50%
    );
  background-image: none;
  background-color: white;
`

const ListItemRoot = styled(Box)`
  border-bottom: 1px solid ${theme.colors.text20};

  &:first-child {
    padding-top: 0;
  }
`;

// const ItemLedeRoot = hoc('span').extend``
// const ItemLedeRoot = styled('span')``
// const ItemRoot = hoc('span').extend``

const ItemLede = props =>
  <InlineText
    color='text70'
    font='textLight'
    fontSize={[ 3, 4 ]}
    {...props}
  />


const ListItem = props => (
  <ListItemRoot py={3}>
    <Flex direction={[ 'column', 'row' ]} align={[ 'flex-start', 'flex-end' ]}>
      <Link href={`${props.fileUrl}`}>
        <a>
          <LargeText color='text'>{props.headline}</LargeText>
          <ItemLede>{props.subheadline}</ItemLede>
        </a>
      </Link>
    </Flex>
  </ListItemRoot>
);


const Root = (props) => (
  <Layout>
    <Header pathname={props.pathname} clear />

    <StyledColorBox pb={[ 4, 5, 6 ]} px={3}>
      <Container mw='rg' mt={[ 3, 4, 5 ]}>
        <Box width={[ 1, 1, 2/3, 2/3 ]} mt={[ 0, 3 ]}>
          <Subheadline color='brand' children='Info on the go' />
          <Display color='brand' font='displayLight'>
            Strata forms <LineBreak>and fact sheets.</LineBreak>
          </Display>
          <LargeText color='text70'>
            Readily available PDF downloads <LineBreak>to help your Strata management.</LineBreak>
          </LargeText>
        </Box>
      </Container>
    </StyledColorBox>

    <Box py={[ 4, 5, 6 ]} px={3}>
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