import React from "react";
import Typography from "@material-ui/core/Typography";
import Category from "../categories/category";
import Search from "../search/search";

export default function Home() {
	return (
		<div>
			<Typography component="h1">Home</Typography>;
			<Search />
			<Category />
		</div>
	);
}
