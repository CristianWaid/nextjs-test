import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignContent: 'center',
		'& > *': {
			margin: theme.spacing(2),
			padding: theme.spacing(2),
			maxWidth: '50%',
		},
	},
	paper: {
		textAlign: 'center',
		justifyContent: 'center',
		alignContent: 'center',
	},
	avatar: {
		margin: 'auto',
		marginBottom: theme.spacing(1),
		width: theme.spacing(20),
		height: theme.spacing(20),
	},
}));

const User = ({ userData }) => {
	const classes = useStyles();
	console.log(userData);
	return (
		<div className={classes.root}>
			<Paper elevation={3} className={classes.paper}>
				<Avatar className={classes.avatar} alt={userData.lastName} src={userData.picture.large} />
				<Typography>{userData.name.first + ' ' + userData.name.last}</Typography>
			</Paper>
		</div>
	);
};

export default User;
