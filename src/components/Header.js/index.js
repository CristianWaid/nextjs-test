import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const Header = () => {
	return (
		<AppBar position={'static'} color={'primary'}>
			<Typography variant={'h4'} style={{ textAlign: 'center', padding: 5 }}>
				SSG-TestApp
			</Typography>
		</AppBar>
	);
};

export default Header;
