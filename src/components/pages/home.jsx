import React from "react";
import Typography from "@material-ui/core/Typography";
import Category from "../categories/category";

export default function Home() {
	return (
		<div>
			<Typography component="h1">Home</Typography>;
			<Category/>
		</div>
	)
}
