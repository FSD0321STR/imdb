import React from "react";
import Typography from "@material-ui/core/Typography";
import Category from "../categories/category";
import Search from "../search/search";
import "./home.css"

export default function Home() {
	return (
		<div class="home">
			<section class="container flex">

				<div id="left">
					<h2 class="title">
						Medium is a place to write, read, and connect
					</h2>
					<p class="sub">It's easy and free to post your thinking on any topic and connect with millions of readers.</p>
					<button class="start"> Start Writing</button>
				
				</div>

				<div id="right">

				</div>
			
			</section>

			<section class="container">
				<Category/>
			</section>


			<section class="container-blog">
				<div class="blog">Soy un blog</div>
				<div class="discovery"> Soy un discovery</div>
			</section>
		</div>
	);
}
