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
		<div className={layout}>
			<div class="site-content">
				<div class="mdl-grid site-max-width">
					<div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp page-content">
						<div class="mdl-card__title">
							<h1 class="mdl-card__title-text">About</h1>
						</div>
						<div class="mdl-card__media"><img class="article-image" src="img/about.jpg" border="0" alt="About" />
						</div>
						<div class="mdl-grid site-copy">
							<div class="mdl-cell mdl-cell--12-col">
								<h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">Introduction</h3>
								<div class="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
									<p>	We are a website developed from 3 guys who started studying
										online programming, and they made us create a project, which you
										are seeing right now. Reviwer is a page so that you can see
										react and comment on posts, blogs or technological categories
										that you like the most. Between everyone in the community we
										bring and post new news or technological trends in the page..</p>

								</div>
								<h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">Mission</h3>
								<div class="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
									<p>
										Reviwer's mission is to deepen readers' understanding of the world and to empower writers to share their best work and biggest ideas. ...
										Our product allows the best ideas to rise to the top and elevates the most passionate, diverse voices.
									</p>
								</div>
								<h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">Team</h3>
								<div class="mdl-grid">
									<div class="mdl-cell mdl-cell--4-col">
										<div class="demo-card-image mdl-card mdl-shadow--2dp person1">
											<div class="mdl-card__title mdl-card--expand"></div>
											<div class="mdl-card__actions">
												<span class="demo-card-image__filename">Moner </span>
											</div>
										</div>
									</div>
									<div class="mdl-cell mdl-cell--4-col">
										<div class="demo-card-image mdl-card mdl-shadow--2dp person2">
											<div class="mdl-card__title mdl-card--expand"></div>
											<div class="mdl-card__actions">
												<span class="demo-card-image__filename">Georgios</span>
											</div>
										</div>
									</div>

									<div class="mdl-cell mdl-cell--4-col">
										<div class="demo-card-image mdl-card mdl-shadow--2dp person3">
											<div class="mdl-card__title mdl-card--expand"></div>
											<div class="mdl-card__actions">
												<span class="demo-card-image__filename">Jash</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
