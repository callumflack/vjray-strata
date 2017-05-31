import Link from 'next/link';

const Header = () => (
	<div className='site-header container'>
		<Link href='/'>
			<a>V.J.Ray</a>
		</Link>

		<nav>
			<Link href='/'>
				<a>Who we are</a>
			</Link>
			<Link href='/'>
				<a>What we do for you</a>
			</Link>
			<Link href='/'>
				<a>Useful info</a>
			</Link>
			<Link href='/'>
				<a>Contact us</a>
			</Link>
			<Link href='/'>
				<a>1300 667 123</a>
			</Link>
		</nav>

		<nav>
			<Link href='/signin'>
				<a className='link-bordered'>Sign in</a>
			</Link>
		</nav>
		<style jsx>{`
			.site-header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 2rem;
				background-color: #F6EFE9;
				border-bottom: 2px solid #E3DEDB;
				color: #585870;
				font-weight: bold;
			}

			nav a:not(:last-child) {
				margin-right: 1.5rem;
			}
		`}</style>
	</div>
);

export default Header;
