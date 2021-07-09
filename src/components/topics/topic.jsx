import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
//import { FilePond } from 'react-filepond';
import api from "../../utils/auth-api";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: "25ch",
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		maxWidth: 300,
	},
	chips: {
		display: "flex",
		flexWrap: "wrap",
	},
	chip: {
		margin: 2,
	},
	noLabel: {
		marginTop: theme.spacing(3),
	},
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const categories = [
	"Mobiles",
	"Laptops",
	"Desktops",
	"Monitors",
	"Tablets",
	"Drons",
	"Accessories",
	"Tech & Trend",
];

function getStyles(name, personName, theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

export default function Topic() {
<<<<<<< HEAD

    const classes = useStyles();
    const [files, setFiles] = useState([]);
    const [topicTitle, setTopicTitle] = useState("");
=======
	const classes = useStyles();
	const [files, setFiles] = useState([]);
	const [topicTitle, setTopicTitle] = useState("");
>>>>>>> a2585ad963121bc4f3d3609443f40f079d72ebe2
	const [desc, setDesc] = useState("");
	const [categoryName] = React.useState([]);
	const theme = useTheme();

	let value = "bitch",
		error_msg = "error";
	let comments = [];
	let blackList = ["mother fucker", "bitch"];
	const topicPost = () => {
		if (goodTopic(value)) save(value);
		else alert(error_msg);
	};
	const goodTopic = (post) => {
		let res = post.split(" ");
		console.log(res);
		console.log(blackList);

		for (let i = 0; i < res.length; i++)
			for (let j = 0; j < blackList.length; j++)
				if (res[i].toLowerCase() === blackList[j].toLowerCase()) return false;

		return true;
	};

	async function handleSubmit(e) {
		e.preventDefault();
        console.log(topicTitle, desc, files[0]);
        const f = files[0];
		return await api
<<<<<<< HEAD
			.createTopic({ topicTitle,desc,f})
=======
			.createTopic({ topicTitle, desc, files })
>>>>>>> a2585ad963121bc4f3d3609443f40f079d72ebe2
			.then((topic) => {
				console.log(topic);
			})
			.catch((e) => {
				console.log(e);
			});
	}

	const handleChange = (event) => {
		setPersonName(event.target.value);
	};

	const handleChangePost = (event) => {
		value = event.target.value;
	};

	function handleTopicTitle(e) {
		setTopicTitle(e.target.value);
	}
	function handleDesc(e) {
		setDesc(e.target.value);
	}

	return (
		<div className={classes.root}>
			<div>
				<TextField
					id="standard-full-width"
					label="Topic title"
					style={{ margin: 8 }}
					placeholder="Topic title..."
					fullWidth
					margin="normal"
					value={topicTitle}
					onChange={handleTopicTitle}
					InputLabelProps={{
						shrink: true,
					}}
				/>

				<TextField
					id="standard-full-width"
					label="Description..."
					style={{ margin: 8 }}
					placeholder="Description"
					fullWidth
					margin="normal"
					value={desc}
					onChange={handleDesc}
					InputLabelProps={{
						shrink: true,
					}}
				/>

				<FormControl className={classes.formControl}>
					<InputLabel id="categoryMulti">Category</InputLabel>
					<Select
						labelId="categoryMultiLabel"
						id="categoryMultiSelect"
						multiple
						value={categoryName}
						onChange={handleChange}
						input={<Input />}
						MenuProps={MenuProps}
					>
						{categories.map((category) => (
							<MenuItem
								key={category}
								value={category}
								style={getStyles(category, categoryName, theme)}
							>
								{category}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<InputLabel id="topicDoc">Topic</InputLabel>
				<TextareaAutosize
					rowsMax={4}
					aria-label="maximum height"
					placeholder="Maximum 4 rows"
					defaultValue=""
					onChange={handleChangePost}
				/>

				<FilePond
					files={files}
					onupdatefiles={setFiles}
					allowMultiple={true}
					maxFiles={3}
					name="files"
					labelIdle='Drag Drop your files or <span class="filepond--label-action">Browse</span>'
				/>

				<Button variant="contained" color="primary" onClick={handleSubmit}>
					Save
				</Button>
			</div>
		</div>
	);
}
