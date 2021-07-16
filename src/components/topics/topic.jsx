import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import api from "../../utils/auth-api";

const useStyles = makeStyles(() => ({
	layout: {},
	form: {},
	formField: {
		margin: "0 0 25px",
	},
	formControl: {
		minWidth: 200,
		maxWidth: 300,
	},
	categlabels: {
		display: "flex",
		flexWrap: "wrap",
	},
	categlabel: {
		margin: 5,
	},
	submitBtn: { marginTop: "100px" },
}));

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

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function Topic() {
	const {
		layout,
		form,
		formField,
		formControl,
		categlabels,
		categlabel,
		submitBtn,
	} = useStyles();

	const classes = useStyles();
	const [files, setFiles] = useState([]);
	const [topicTitle, setTopicTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [categoryName, setCategoryName] = useState([]);

	// Word Filters
	let value = "bitch",
		error_msg = "error";
	let comments = [];
	let blackList = ["mother fucker", "bitch"];
	const topicPost = () => {
		if (goodTopic(value)) save(value);
		else alert(error_msg);
	};
	const goodTopic = (post) => {
		let res = post.split("");
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
			.createTopic({ topicTitle, desc, categoryName, f })
			.then((topic) => {
				alert("Topic created");
			})
			.catch((e) => {
				console.log(e);
			});
	}

	const handleChange = (event) => {
		setCategoryName(event.target.value);
	};

	function handleTopicTitle(e) {
		setTopicTitle(e.target.value);
	}
	function handleDesc(e) {
		setDesc(e.target.value);
	}

	return (
		<div className={classes.root}>
			<form className={form} noValidate autoComplete="off">
				<TextField
					id="topic-title"
					label="Topic title"
					value={topicTitle}
					onChange={handleTopicTitle}
					fullWidth
					multiline={true}
					className={formField}
				/>
				<FormControl className={formControl}>
					<InputLabel id="">Categories of Topic</InputLabel>
					<Select
						className={formField}
						labelId=""
						id=""
						multiple
						fullWidth
						value={categoryName}
						onChange={handleChange}
						renderValue={(selected) => (
							<div className={categlabels}>
								{selected.map((value) => (
									<Chip key={value} label={value} className={categlabel} />
								))}
							</div>
						)}
					>
						{categories.map((category) => (
							<MenuItem key={category} value={category}>
								{category}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<TextField
					id="topic-content"
					label="Write your topic content..."
					multiline
					fullWidth
					rows={4}
					value={desc}
					onChange={handleDesc}
					className={formField}
				/>
				{/*
				<FormControl className={classes.formControl}>
					<InputLabel id="categoryMulti" fullWidth>
						Category
					</InputLabel>
					<Select
						labelId="categoryMultiLabel"
						id="categoryMultiSelect"
						multiple
						fullWidth
						value={categoryName}
						onChange={handleChange}
						input={<Input />}
					>
						{categories.map((category) => (
							<MenuItem key={category} value={category}>
								{category}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				*/}

				<FilePond
					files={files}
					allowMultiple={true}
					name="photo"
					onupdatefiles={setFiles}
					stylePanelLayout={"square"}
					dropOnPage
					labelIdle='Drag & Drop the image of the topic or <span class="filepond--label-action">Browse</span>'
				/>
				<Button onClick={handleSubmit} variant="contained" color="primary">
					Save
				</Button>
			</form>
		</div>
	);
}
