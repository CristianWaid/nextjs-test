import AppBar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';
import { useRouter } from 'next/router';

const Header = () => {
	const router = useRouter();

	const handleTitleClick = (e) => {
		e.preventDefault();
		router.push('/');
	};

	return (
		<AppBar position={'static'} color={'primary'}>
			<a href={'/'} onClick={handleTitleClick} style={{ color: 'inherit', textDecoration: 'none' }}>
				<Typography variant={'h4'} style={{ textAlign: 'center', padding: 5 }}>
					SSG-TestApp
				</Typography>
			</a>
		</AppBar>
	);
};

export default Header;
