import Head from 'next/head';
import Header from '../src/components/Header.js';
import RandomPhoto from '../src/components/RandomPhoto';

const Home = ({ imageSource, staticImageSource }) => {
	return (
		<>
			<Head>
				<title>SSG-TestApp</title>
			</Head>
			<>
				<Header />
				<RandomPhoto source={staticImageSource} />
			</>
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
