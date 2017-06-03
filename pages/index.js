import React from 'react';
import styled from 'styled-components';

import { initClient, getClient } from '../services/contentfulClient';
import Layout from '../components/Layout.js';
import Block from '../components/shared/Block.js';
import Container from '../components/shared/Container.js';
import Section from '../components/Home/Section.js';
import Anchor from '../components/shared/Anchor.js';
import Hero from '../components/Home/Hero.js';
import FeatureList from '../components/Home/FeatureList.js';
import {
	HeaderBold,
	TextLarge,
} from '../components/shared/Text.js';

const QuoteAuthor = styled.span`
	text-transform: uppercase;
`;

const Email = styled.p`
	font-weight: bold;
	color: #D3145A;
`;

const SectionPhoto = styled.img`
	margin-top: 1.5rem;
`;

class Index extends React.Component {
	static async getInitialProps() {
		const space = await initClient('h12qkyh9prdx', 'a6896c50a7491bac6d5f4c8b85858bdc063bfd3ebef2e8d89929c6f28d0a31ec');
		const client = getClient();
		const content = await getClient().getEntries({ content_type: 'page' });
		const home = await client.getEntries({
			content_type: 'page',
			'fields.name[match]': 'Home'
		});

		return {
			content,
			home,
			sections: home.items[0].fields.sections,
		};
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Layout>
				<Hero />

				<Block textCenter>
					<Container>
						<Container small>
							<HeaderBold>It all adds up to a better deal.</HeaderBold>

							<TextLarge>"VJ Ray made everything easier. We all know our block is looked after, and friendly neighbours are far more easier to live with." - <QuoteAuthor>Jessica, Campsie</QuoteAuthor></TextLarge>
						</Container>

						<FeatureList />
					</Container>
				</Block>

				<Section section={this.props.sections[0]} color='#D3145A'>
					<Anchor bordered>Watch video</Anchor>
				</Section>

				<Section section={this.props.sections[1]}>
					<Email>contact@vjraystrata.com.au</Email>
					<SectionPhoto src='http://lorempixel.com/400/600' />
				</Section>
			</Layout>
		)
	}
}

export default Index;
