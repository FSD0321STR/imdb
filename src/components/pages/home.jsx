import React from "react";
import Typography from "@material-ui/core/Typography";
import Category from "../categories/category";
import Search from "../search/search";
import Blog from "../blogs/blog";
import "./home.css"

export default function Home() {
	let list_blog = [
		{
			img: "https://miro.medium.com/max/2400/1*4X74D902uwO786PQOWlAcg.jpeg",
			title: "This Long-Awaited Technology May Finally Change the World",
			date: " May 29·6 min read ·Science",
			sub: "Solid-state batteries are poised to emerge in the coming years",
			userName: "pepe"

		},
		{
			img: "https://miro.medium.com/max/2400/1*4X74D902uwO786PQOWlAcg.jpeg",
			title: "This Long-Awaited Technology May Finally Change the World",
			date: " May 29·6 min read ·Science",
			sub: "Solid-state batteries are poised to emerge in the coming years",
			userName: "pepe"

		},
		{
			img: "https://miro.medium.com/max/2400/1*4X74D902uwO786PQOWlAcg.jpeg",
			title: "This Long-Awaited Technology May Finally Change the World",
			date: " May 29·6 min read ·Science",
			sub: "Solid-state batteries are poised to emerge in the coming years",
			userName: "pepe"

		},
		{
			img: "https://miro.medium.com/max/2400/1*4X74D902uwO786PQOWlAcg.jpeg",
			title: "This Long-Awaited Technology May Finally Change the World",
			date: " May 29·6 min read ·Science",
			sub: "Solid-state batteries are poised to emerge in the coming years",
			userName: "pepe"

		},
		{
			img: "https://miro.medium.com/max/2400/1*4X74D902uwO786PQOWlAcg.jpeg",
			title: "This Long-Awaited Technology May Finally Change the World",
			date: " May 29·6 min read ·Science",
			sub: "Solid-state batteries are poised to emerge in the coming years",
			userName: "pepe"

		},
		{
			img: "https://miro.medium.com/max/2400/1*4X74D902uwO786PQOWlAcg.jpeg",
			title: "This Long-Awaited Technology May Finally Change the World",
			date: " May 29·6 min read ·Science",
			sub: "Solid-state batteries are poised to emerge in the coming years",
			userName: "pepe"

		},
	]
	return (
		<div class="home">
			<section class="container flex">

				<div id="left">
					<h2 class="title">
						Reviwer is a place to write, read, and connect
					</h2>
					<p class="sub">It's easy and free to post your thinking on any topic and connect with millions of readers.</p>
					<button class="start"> Start Writing</button>

				</div>

				<div id="right">

				</div>

			</section>

			<section class="container">
				<Category />
			</section>


			<section class="container">
				<Blog blogs={list_blog} />
			</section>
		</div>
	);
}
