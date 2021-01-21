import Head from 'next/head';

const Pokemon = ({ pokemon }) => {
	return (
		<>
        <Head>
            <title>Pokemon: {pokemon?.name}</title>
        </Head>
			<div>
				<img src={pokemon?.sprites.front_default} />
				<div>
					<div>Welcome, {pokemon?.name}!</div>
				</div>
			</div>
		</>
	);
};

export const getStaticProps = async () => {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon/charmander');
	const pokemon = await res.json();

	return {
		props: {
			pokemon,
		},
	};
};

export default Pokemon;
