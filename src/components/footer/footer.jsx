import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

function Copyright() {
	return (
		<Typography variant="body2" align="center">
			<span>Copyright © | ReWiever {new Date().getFullYear()}. </span>
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: "#EFEFEF",
		marginTop: theme.spacing(8),
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		[theme.breakpoints.up("sm")]: {
			paddingTop: theme.spacing(6),
			paddingBottom: theme.spacing(6),
		},
	},
	footerContainer: {
		"@media (max-width: 900px)": {
			justifyContent: "center",
			flexDirection: "row",
		},
	},
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<Container component="footer" maxWidth={false} className={classes.footer}>
			<Grid
				container
				className={classes.footerContainer}
				justify="space-between"
				alignItems="center"
			>
				<Grid>
					<IconButton
						color="primary"
						aria-label="upload picture"
						component="span"
					>
						<FacebookIcon />
					</IconButton>
					<IconButton
						color="primary"
						aria-label="upload picture"
						component="span"
					>
						<InstagramIcon />
					</IconButton>
					<IconButton
						color="primary"
						aria-label="upload picture"
						component="span"
					>
						<TwitterIcon />
					</IconButton>
				</Grid>
				<Grid style={{ textAlign: "center" }}>
					<Button>
						<Link to="/about">About</Link>
					</Button>
					<Button>
						<Link to="/contact">Contact Us</Link>
					</Button>
					<Button>
						<Link to="/privacy-policy">Privacy Policy</Link>
					</Button>
					<Button>
						<Link to="/cookies-policy">Cookies Policy</Link>
					</Button>
					
				</Grid>
			</Grid>
			<Box>
				<Copyright />
			</Box>
		</Container>
	);
}
