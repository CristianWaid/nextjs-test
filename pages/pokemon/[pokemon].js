// import Head from 'next/head';
// import Link from 'next/link';

// const Pokemon = ({ pokemon, paths }) => {
// 	return (
// 		<>
// 			{console.log(pokemon, paths)}
// 			<Head>
// 				<title>Pokemon: {pokemon?.name}</title>
// 			</Head>
// 			<div
// 				style={{
// 					textAlign: 'center',
// 				}}
// 			>
// 				<img src={pokemon?.sprites.front_default} />
// 				<div>
// 					<h3>Welcome, {pokemon?.name}!</h3>
// 					<p>
// 						Height: {pokemon.height} Weight: {pokemon.weight}
// 					</p>
// 				</div>
// 				<Link href="/">
// 					<a>Home</a>
// 				</Link>
// 				<div style={{ float: 'left', position: 'absolute' }}>
// 					<ul>
// 						{paths.map((p) => {
// 							return (
// 								<li>
// 									<Link href={`/pokemon/${p}`}>
// 										<a>{p}</a>
// 									</Link>
// 								</li>
// 							);
// 						})}
// 					</ul>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export const getStaticPaths = async () => {
// 	const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
// 	const pokemon = await res.json();

// 	let paths = pokemon.results.map((p) => {
// 		return `/pokemon/${p.name}`;
// 	});

// 	return {
// 		paths,
// 		fallback: false,
// 	};
// };

// export const getStaticProps = async ({ params }) => {
// 	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`);
// 	const allPokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
// 	const pokemons = await allPokemons.json();

// 	const paths = pokemons.results.map((p) => {
// 		return p.name;
// 	});

// 	const pokemon = await res.json();

// 	return {
// 		props: {
// 			pokemon,
// 			paths,
// 		},
// 	};
// };

// export default Pokemon;
