
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
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
					<Paper className={classes.paper}>
						<Typography component="h1">Formulario</Typography>
						<br />
						<br />

						<form className={classes.form} noValidate  >
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<TextField
										autoComplete="fname"
										name="firstName"
										variant="outlined"
										required
										fullWidth
										id="firstName"
										label="First Name"
										autoFocus
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										variant="outlined"
										required
										fullWidth
										id="lastName"
										label="Last Name"
										name="lastName"
										autoComplete="lname"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										id="email"
										label="Email Address"
										name="email"
										autoComplete="email"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										name="password"
										label="Password"
										type="password"
										id="password"
										autoComplete="current-password"
									/>
								</Grid>
							</Grid>
							<br />
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								Save Changes!
							</Button>
						</form>
					</Paper>

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
