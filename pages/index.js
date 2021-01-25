import Head from 'next/head';
import { useRouter } from 'next/router';

const Home = () => {
	const router = useRouter();

	const handlePokemonClick = (e) => {
		e.preventDefault();
		router.push('/pokemon');
	};
	return (
		<>
			<Head>
				<title>My First NextJS Page</title>
			</Head>
			<div style={{ textAlign: 'center' }}>
				<h1>My first NextJS Page</h1>
				<button onClick={handlePokemonClick}>Charmander</button>
			</div>
		</>
	);
};

export default Home;
