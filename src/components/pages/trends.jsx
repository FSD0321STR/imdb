import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	mainFeaturedPost: {
		marginBottom: "5em",
		padding: "1.3em",
	},
	mainFeaturedPostContent: {},
	card: {},
	cardDetails: {},
	cardMedia: {},
	sidebarSection: {},
	sidebarAboutBox: {
		padding: "1.3em",
		marginBottom: "25px",
	},
}));

const featuredTopics = [
	{
		name: "Most Trend Topic Title",
		date: "Nov 12",
		desc: "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what&apos;s most interesting in this post&apos;s contents.",
		img: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		category: "mobile",
	},
];

const topics = [
	{
		name: "Topic 1",
		date: "Nov 12",
		desc: "This is a wider card with supporting text below as a natural lead-in to additional content.",
		img: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		category: "laptop",
	},
	{
		name: "Topic 2",
		date: "Nov 12",
		desc: "This is a wider card with supporting text below as a natural lead-in to additional content.",
		image:
			"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		category: "desktop",
	},
	{
		name: "Topic 3",
		date: "Nov 12",
		desc: "This is a wider card with supporting text below as a natural lead-in to additional content.",
		image:
			"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		category: "drones",
	},
	{
		name: "Topic 4",
		date: "Nov 12",
		desc: "This is a wider card with supporting text below as a natural lead-in to additional content.",
		image:
			"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		category: "monitors",
	},
];

const archives = [
	"March 2020",
	"February 2020",
	"January 2020",
	"November 1999",
	"October 1999",
	"September 1999",
	"August 1999",
	"July 1999",
	"June 1999",
	"May 1999",
	"April 1999",
];

export default function Trends() {
	const {
		mainFeaturedPost,
		mainFeaturedPostContent,
		mainGrid,
		card,
		cardGrid,
		cardDetails,
		cardMedia,
		sidebarSection,
		sidebarAboutBox,
	} = useStyles();

	return (
		<div>
			<Container>
				<main>
					{/* Main featured Topic */}
					<Paper className={mainFeaturedPost}>
						<Grid item spacing={3} xs={12}>
							{featuredTopics.map((featuredtopic) => (
								<Grid item key={featuredtopic.name} md={6}>
									<div className={mainFeaturedPostContent}>
										<Typography variant="h3" gutterBottom>
											{featuredtopic.name}
										</Typography>
										<Typography variant="caption" gutterBottom>
											{featuredtopic.category}
										</Typography>
										<Typography paragraph>{featuredtopic.desc}</Typography>
										<Typography color="inherit">Continue reading...</Typography>
									</div>
								</Grid>
							))}
						</Grid>
					</Paper>
					{/* End Main featured Topic */}

					<div style={{ margin: "50px 0" }}>
						<Typography variant="h5">
							The rest of the trending topics
						</Typography>
						<Divider />
					</div>

					{/* Start Topics List */}
					<Grid container className={mainGrid}>
						<Grid xs={12} md={9} container spacing={4} className={cardGrid}>
							{topics.map((topic) => (
								<Grid item key={topic.name}>
									<Card className={card}>
										<CardActionArea>
											<CardMedia
												component="img"
												alt="Contemplative Reptile"
												height="140"
												image="/static/images/cards/contemplative-reptile.jpg"
												title="Contemplative Reptile"
											/>
											<CardContent>
												<Typography gutterBottom variant="h5" component="h3">
													{topic.name}
												</Typography>
												<Typography variant="caption" gutterBottom>
													{topic.category}
												</Typography>
												<Typography color="textSecondary" component="p">
													{topic.desc}
												</Typography>
											</CardContent>
										</CardActionArea>
										<CardActions>
											<Button size="small" color="primary">
												Share
											</Button>
											<Button size="small" color="primary">
												Continue reading...
											</Button>
										</CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
						{/* End Topics List */}

						{/* Sidebar */}
						<Grid item xs={12} md={3}>
							<Paper elevation={0} className={sidebarAboutBox}>
								<Typography gutterBottom>About the Trends</Typography>
								<Typography gutterBottom>
									Etiam porta sem malesuada magna mollis euismod. Cras mattis
									consectetur purus sit amet fermentum. Aenean lacinia bibendum
									nulla sed consectetur.
								</Typography>
							</Paper>
							<Typography gutterBottom className={sidebarSection}>
								Archives
							</Typography>
							{archives.map((archive) => (
								<Typography key={archive}>{archive}</Typography>
							))}
						</Grid>
						{/* End sidebar */}
					</Grid>
					{/* End Topics List */}
				</main>
			</Container>
		</div>
	);
}
