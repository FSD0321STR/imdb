import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./card.css";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

const CategoryCard = (props) => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	console.log(props);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<div class="cardContiner">
			{props.categories.map((category, index) => {
				return (
					<Card className={classes.root} key={index} id="categories-card">
						<CardHeader
							avatar={
								<Avatar aria-label="recipe" className={classes.avatar}>
									R
								</Avatar>
							}
							title={category.title}
							subheader={category.createdAt}
						/>
						<CardMedia
							className={classes.media}
							image="https://source.unsplash.com/random"
							title={category.title}
						/>
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								{category.desc}
							</Typography>
							<br />
							<Button
								variant="contained"
								color="primary"
								href="#contained-buttons"
							>
								{" "}
								View
							</Button>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
};

export default CategoryCard;
