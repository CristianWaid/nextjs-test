import React from 'react';
import Container from '@material-ui/core/Container';

const RandomPhoto = ({ source }) => {
	return (
		<Container maxWidth={'lg'}>
			<div style={{ margin: 10, textAlign: 'center' }}>
				<img src={source} alt={'random photo'} style={{ display: 'block', width: '100%', height: '100%' }} />
			</div>
		</Container>
	);
};

export default RandomPhoto;
