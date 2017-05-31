import React from 'react';
import Layout from '../components/Layout.js';
import { initClient, getClient } from '../services/contentfulClient';

const Section = (props) => (
	<section className='container--sm' style={{color: props.color}}>
		<h4 className='header-hr'>
			<div>
				{props.section.fields.primaryHeader}
				<hr />
			</div>
		</h4>

		<h1>
			{props.section.fields.secondaryHeader}
		</h1>

		<p>
			{props.section.fields.content}
		</p>

		{props.children}

		<style jsx>{`
			section {
				text-align: center;
			}
		`}</style>
	</section>
);

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
				<div className='hero container'>
					<div className='hero-text'>
						<h1>We understand how valuable piece of mind is.</h1>
						<p>Leave your apartment asset to VJ Ray and skip the hassle of management and maintenace.</p>

						<form className='form-quote'>
							<input placeholder='Enter your email' />
							<button type='submit'>Get a quote today</button>
						</form>
					</div>

					<img src='http://lorempixel.com/400/300' />
				</div>

				<Section section={this.props.sections[0]} color='#D3145A'>
					<a className='link-bordered' href='#'>Watch video</a>
				</Section>

				<Section section={this.props.sections[1]}>
					<p className='email'>contact@vjraystrata.com.au</p>
					<img className='section-photo' src='http://lorempixel.com/400/600' />
				</Section>

				<style jsx>{`
					.hero {
						display: flex;
						background-color: #F6EFE9;
					}

					.hero-text {
						margin-right: 2rem;
					}

					.hero h1 {
						color: #D3145A;
					}

					section {
						text-align: center;
					}

					.email {
						font-weight: bold;
						color: #D3145A;
					}

					.section-photo {
						margin-top: 1.5rem;
					}
				`}</style>
			</Layout>
		)
	}
}

export default Index;
