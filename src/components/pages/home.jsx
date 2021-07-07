import React from "react";
import Typography from "@material-ui/core/Typography";
import Category from "../categories/category";
import Search from "../search/search";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Blog from "../blogs/blog";
import "./home.css";

const useStyles = makeStyles(() => ({
	layout: { paddingTop: "60px" },
	sectiontop: {
		minHeight: "300px",
		marginBottom: "50px",
	},
	image: {
		backgroundImage: "url(https://source.unsplash.com/random)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
	},
}));

export default function Home() {
	let list_blog = [
		{
			img: "https://source.unsplash.com/random",
			title: "This Long-Awaited Technology May Finally Change the World",
			date: " May 29·6 min read ·Science",
			sub: "Solid-state batteries are poised to emerge in the coming years",
			userName: "pepe",
		},
		{
			img: "https://source.unsplash.com/random",
			title: "This Long-Awaited Technology May Finally Change the World",
			date: " May 29·6 min read ·Science",
			sub: "Solid-state batteries are poised to emerge in the coming years",
			userName: "pepe",
		},
		{
			img: "https://source.unsplash.com/random",
			title: "This Long-Awaited Technology May Finally Change the World",
			date: " May 29·6 min read ·Science",
			sub: "Solid-state batteries are poised to emerge in the coming years",
			userName: "pepe",
		},
		{
			img: "https://source.unsplash.com/random",
			title: "This Long-Awaited Technology May Finally Change the World",
			date: " May 29·6 min read ·Science",
			sub: "Solid-state batteries are poised to emerge in the coming years",
			userName: "pepe",
		},
		{
			img: "https://source.unsplash.com/random",
			title: "This Long-Awaited Technology May Finally Change the World",
			date: " May 29·6 min read ·Science",
			sub: "Solid-state batteries are poised to emerge in the coming years",
			userName: "pepe",
		},
		{
			img: "https://source.unsplash.com/random",
			title: "This Long-Awaited Technology May Finally Change the World",
			date: " May 29·6 min read ·Science",
			sub: "Solid-state batteries are poised to emerge in the coming years",
			userName: "pepe",
		},
	];

	const { layout, image, sectiontop } = useStyles();

	return (
		<Container maxWidth={false} className={layout}>
			<Grid container className={sectiontop}>
				<Grid item xs={12} sm={6}>
					<div>
						<h2 class="title">
							Reviwer is a place to write, read, and connect
						</h2>
						<p class="sub">
							It's easy and free to post your thinking on any topic and connect
							with millions of readers.
						</p>
						<Grid container spacing={3}>
							<Grid item xs={3}>
								<button class="start"> Start Writing</button>
							</Grid>
							<Grid item xs={3}>
								<Search />
							</Grid>
						</Grid>
					</div>
				</Grid>
				<Grid item xs={false} sm={6} className={image} />
			</Grid>
			<Container maxWidth="lg">
				<Grid container xs={12}>
					<Category />
				</Grid>
				<Grid container xs={12}>
					<Grid item xs={6}>
						<Blog blogs={list_blog} />
					</Grid>
					<Grid item xs={6}>
						Something Else
					</Grid>
				</Grid>
			</Container>
		</Container>
	);
}
