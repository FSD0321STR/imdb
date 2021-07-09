import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Link from "@material-ui/core/Link";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

export default function AnimatedModal({ open, onClose }) {
	const classes = useStyles();

	const { login } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	let history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();
		if (email === "") {
			alert("Email cannot be empty :)");
		} else {
			const user = await login({ email, password });
			if (user) {
				onClose(true);
				history.push("/");
			} else {
				alert("Something went wrong, please try again");
			}
		}
	}

	function handleInputEmail(e) {
		setEmail(e.target.value);
	}

	function handleInputPass(e) {
		setPassword(e.target.value);
	}

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			className={classes.modal}
			open={open}
			onClose={onClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={open}>
				<div className={classes.paper}>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							onChange={handleInputEmail}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={handleInputPass}
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={handleSubmit}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Fade>
		</Modal>
	);
}
