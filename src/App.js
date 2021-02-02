import React from 'react';
import RandomPhoto from './components/RandomPhoto';
import Header from './components/Header.js';

const App = ({source}) => {
	return (
		<div>
			<style jsx global>{`
				body {
					margin: 0px;
					padding: 0px;
				}
			`}</style>
			<Header />
			<RandomPhoto source={source} />
		</div>
	);
};

export default App;
