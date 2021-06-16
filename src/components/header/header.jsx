import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import Register from "../register/register";
import Collapse from "@material-ui/core/Collapse";
import { Box } from '@material-ui/core';
import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

export default function Header() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [open, setOpen] = useState(false);

	const handleRegisterCollapse = (event) => {
		setOpen((prev) => !prev);
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Box display="flex" justifyContent="space-between" padding="20px">
				<AccountBalanceIcon />

				<div>
					<Button
						aria-controls="simple-menu"
						aria-haspopup="true"
						onClick={handleClick}
					>
						Trend
					</Button>
					<Menu
						id="simple-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<MenuItem onClick={handleClose}>Profile</MenuItem>
						<MenuItem onClick={handleClose}>My account</MenuItem>
						<MenuItem onClick={handleClose}>Logout</MenuItem>
					</Menu>
					<Button
						aria-controls="simple-menu"
						aria-haspopup="true"
						onClick={handleClick}
					>
						Categories
					</Button>
					<Menu
						id="simple-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<MenuItem onClick={handleClose}>Profile</MenuItem>
						<MenuItem onClick={handleClose}>My account</MenuItem>
						<MenuItem onClick={handleClose}>Logout</MenuItem>
					</Menu>

					<Button color="primary">Sign In</Button>
					<Button color="primary" onClick={handleRegisterCollapse}>
						Get Started
					</Button>
				</div>
			</Box>
			<Collapse in={open}>
				<Register />
			</Collapse>
		</div>
	);
}
