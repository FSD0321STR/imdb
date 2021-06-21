import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Box, Icon } from "@material-ui/core";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AnimatedModal from "../login-modal/loginModal";
import { Link } from "react-router-dom";

export default function Header() {
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleOpenModal = () => {
		setOpen(true);
	};
	const handleCloseModal = () => {
		setOpen(false);
	};

	const { logged, logout } = useAuth();

	return (
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
					<MenuItem onClick={handleClose}>Sign out</MenuItem>
				</Menu>
				<Button
					aria-controls="simple-me1nu"
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
				{logged ? (
					<Button color="primary" onClick={logout}>
						Sign Out
					</Button>
				) : (
					<Button color="primary" onClick={handleOpenModal}>
						Sign In
					</Button>
				)}

				<Button color="primary">Get Started</Button>
				<Link to="/profile" color="primary">
					Profile
				</Link>
			</div>
			<AnimatedModal open={open} onClose={handleCloseModal} />
		</Box>
	);
}
