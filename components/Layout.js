import Head from 'next/head';
import Header from './Header';

const Layout = (props) => (
	<div>
		<Head>
			<style>{`
				{ /* Type scale - generated from type-scale.com */ }

				html {font-size: 1em;}

				body {
					background-color: white;
					font-family: 'Open Sans', sans;
					font-weight: 400;
					line-height: 1.45;
					color: #333;
				}

				p {margin-bottom: 1.3em;}

				h1, h2, h3, h4 {
					margin: 1.414em 0 0.5em;
					font-weight: inherit;
					line-height: 1.2;
				}

				h1 {
					margin-top: 0.5em;
					font-size: 3.157em;
				}

				h2 {font-size: 2.369em;}

				h3 {font-size: 1.777em;}

				h4 {font-size: 1.333em;}

				small, .font_small {font-size: 0.75em;}

				{ /* End of Type scale */ }


				*, *:before, *:after {
					box-sizing: border-box;
				}

				body {
					margin: 0;
				}

				a {
					text-decoration: none;
					color: inherit;
				}

				hr {
					color: inherit;
					border: 0;
					border-bottom: 1px solid currentColor;
				}

				.container--sm, .container, .container--lg {
					margin: auto;
					padding: 7rem;
				}

				.container--sm {
					padding-left: calc(50% - 350px);
					padding-right: calc(50% - 350px);
				}

				.container {
					padding-left: calc(50% - 480px);
					padding-right: calc(50% - 480px);
				}

				.container--lg {
					padding-left: calc(50% - 600px);
					padding-right: calc(50% - 600px);
				}

				.header-hr {
					margin: auto;
					text-align: center;
					font-size: 1rem;
					font-weight: bold;
				}

				.header-hr div {
					display: inline-block;
				}

				.link-bordered {
					display: inline-block;
					padding: 0.8rem 2rem;
					color: inherit;
					border: 1px solid currentColor;
					border-radius: 30px;
				}
			`}</style>
		</Head>

		<Header />

		<main>
			{props.children}
		</main>
	</div>
);

export default Layout;
