import Head from 'next/head';
import Header from '../../src/components/Header';
import User from '../../src/components/User';

const UserPage = ({ userData }) => {
	return (
		<>
			<Head>
				<title>User</title>
				<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />{' '}
			</Head>
			<div>
				<style jsx global>{`
					body {
						margin: 0px;
						padding: 0px;
					}
				`}</style>
				<Header />
				<User userData={userData} />
			</div>
		</>
	);
};

export const getStaticProps = async () => {
	//const randomUserID = Math.floor(Math.random() * 51);
    //const res = await fetch(`https://6017e6a5971d850017a3f2a0.mockapi.io/pa3/api/users/${randomUserID}`);
    const res = await fetch('https://randomuser.me/api/');
	const data = await res.json();

	return {
		props: {
			userData: data.results[0],
		},
	};
};

// export const getServerSideProps = async () => {
// 	//const randomUserID = Math.floor(Math.random() * 51);
//     //const res = await fetch(`https://6017e6a5971d850017a3f2a0.mockapi.io/pa3/api/users/${randomUserID}`);
//     const res = await fetch('https://randomuser.me/api/');
// 	const data = await res.json();

// 	return {
// 		props: {
// 			userData: data.results[0],
// 		},
// 	};
// };

export default UserPage;
