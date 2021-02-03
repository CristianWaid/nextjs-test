import { Link } from '@material-ui/core';
import Head from 'next/head';
import Header from '../src/components/Header/index.js';
import RandomPhoto from '../src/components/RandomPhoto';

const Home = ({ imageSource, staticImageSource }) => {
	return (
		<>
			<Head>
				<title>SSG-TestApp</title>
			</Head>
			<div>
				<style jsx global>{`
					body {
						margin: 0px;
						padding: 0px;
					}
				`}</style>
				<Header />
				<RandomPhoto source={staticImageSource} />
				<Link href={'/user'}>
					<a>Ranom User</a>
				</Link>
			</div>
		</>
	);
};

export const getStaticProps = async () => {
	const staticImageSource = 'https://picsum.photos/800/300';

	return {
		props: {
			staticImageSource,
		},
	};
};

// export const getServerSideProps = async () => {
// 	const imageSource = 'https://picsum.photos/800/300';

// 	return {
// 		props: {
// 			imageSource,
// 		},
// 	};
// };

export default Home;
