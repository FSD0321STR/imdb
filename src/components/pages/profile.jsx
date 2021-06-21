import React from "react";
import useAuth from "../../hooks/useAuth";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export default function Profile() {
	const classes = useStyles();

	const { email } = useAuth();

	return (


		<Container maxWidth="lg">
			<Typography component="h1">Profile</Typography>

			<Grid container spacing={3}>

				<Grid item xs={12} sm={6}>
					<Paper className={classes.paper}>Formulario</Paper>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Paper className={classes.paper}>
						<Typography component="h2">
							User <strong>{email}</strong> is logged in
						</Typography>
					</Paper>
				</Grid>

			</Grid>
		</Container>

	);
}
