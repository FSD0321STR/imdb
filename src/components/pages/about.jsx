import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
//import "./about.css";

const useStyles = makeStyles(() => ({
	layout: { marginTop: "80px" },
	pageTitle: { fontSize: "4em", marginBottom: "40px" },

	colLeft: {
		"@media (max-width: 585px)": {
			order: "2",
		},
	},
	colRight: {
		"@media (max-width: 585px)": {
			order: "1",
		},
	},
	image: {
		width: "100%",
		height: "400px",
		objectFit: "cover",
	},
}));

export default function About() {
	const { layout, pageTitle, image, colText, colLeft, colRight } = useStyles();

	return (
		<Container>
			<div className={layout}>
				<Typography component="h1" className={pageTitle}>
					About us
				</Typography>

				<Grid container>
					<Grid container spacing={0}>
						<Grid item xs={12} sm={6}>
							<Typography variant="h4">
								Reviwer powers over 1,700,000 businesses worldwide
							</Typography>
							<br />
							<Typography>
								We are a website developed from 3 guys who started studying
								online programming, and they made us create a project, which you
								are seeing right now. Reviwer is a page so that you can see
								react and comment on posts, blogs or technological categories
								that you like the most. Between everyone in the community we
								bring and post new news or technological trends in the page.
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box>
								<img
									className={image}
									src="https://source.unsplash.com/random"
								/>
							</Box>
						</Grid>
					</Grid>
					<Grid container spacing={0}>
						<Grid className={colLeft} item xs={12} sm={6}>
							<Box>
								<img
									className={image}
									src="https://source.unsplash.com/random"
								/>
							</Box>
						</Grid>
						<Grid className={colRight} item xs={12} sm={6}>
							<Typography variant="h4">Mission </Typography>
							<br />
							<Typography>
								We are a website developed from 3 guys who started studying
								online programming, and they made us create a project, which you
								are seeing right now. Reviwer is a page so that you can see
								react and comment on posts, blogs or technological categories
								that you like the most. Between everyone in the community we
								bring and post new news or technological trends in the page.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</Container>
	);
}
