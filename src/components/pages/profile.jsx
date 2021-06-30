import React, { useState } from "react";
import useAuth from "../../hooks/use-auth";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import api from "../../utils/auth-api";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

export default function Profile() {
	const classes = useStyles();
	const {user} = useAuth();
	const [email, setEmail] = useState(user.email);
	const [password, setPassword] = useState("");
	const [fname, setFname] = useState(user.fname);
	const [lname, setLname] = useState(user.lname);


	async function handleSubmit(e) {
		e.preventDefault();
		const userUpload = {
			...user,email,fname,lname
		}
		if(password) userUpload.password = password;
		return await api
			.userUpdate({ user: userUpload })
			.then((user) => {
				localStorage.setItem("user", JSON.stringify(user));			})
			.catch((e) => {
				dispatch({ type: "logout" });
				Promise.reject(e);
			});
	}

function handleFnameInput(e) {
	setFname(e.target.value);
}
function handleLnameInput(e) {
	setLname(e.target.value);
}
function handleEmailInput(e) {
	setEmail(e.target.value);
}
function handlePasswordInput(e) {
	setPassword(e.target.value);
}

return (
	<Container maxWidth="lg">
		<Typography component="h1">Profile</Typography>

		<Grid container spacing={3}>
			<Grid item xs={12} sm={6}>
				<Paper className={classes.paper}>
					<Typography component="h1">Formulario</Typography>
					<br />
					<br />

					<form className={classes.form} noValidate>
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
									onChange={handleFnameInput}
									value={fname}
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
									onChange={handleLnameInput}
									value={lname}
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
									onChange={handleEmailInput}
									value={email}
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
									onChange={handlePasswordInput}
									value={password}
								/>
							</Grid>
						</Grid>
						<br />
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							onClick={handleSubmit}
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
						Welcome to your dashboard <strong>{user.fname}</strong>.
						</Typography>
				</Paper>
			</Grid>
		</Grid>
	</Container>
);
}
