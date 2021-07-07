import useAuth from "../../hooks/use-auth";
import React, { useState, useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import AnimatedModal from "../login-modal/loginModal";
import Collapse from "@material-ui/core/Collapse";
import RegisterSide from "../register/register";
import {
	AppBar,
	Toolbar,
	makeStyles,
	Button,
	IconButton,
	SwipeableDrawer,
	Link,
	List,
	ListItem,
	ListItemText,
} from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(() => ({
	header: {
		position: "relative",
		backgroundColor: "#efefef",
		paddingRight: "0",
		paddingLeft: "0",
		"@media (max-width: 900px)": {
			paddingLeft: 0,
		},
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
	},
	drawerContainer: {
		padding: "20px 30px",
	},
	links: {
		fontFamily: "Open Sans, sans-serif",
		color: "#000",
		fontSize: "1.2em",
		fontWeight: 700,
		textTransform: "uppercase",
		textDecoration: "none",
		padding: "10px",
		verticalAlign: "baseline",
	},
	sublinks: {
		fontFamily: "Open Sans, sans-serif",
		color: "#000",
		fontSize: "1rem",
		fontWeight: 700,
		textTransform: "uppercase",
		textDecoration: "none",
		padding: "10px",
		textAlign: "center",
	},
}));

export default function Header() {
	const { header, toolbar, drawerContainer, links, sublinks } = useStyles();

	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false,
	});

	const { mobileView, drawerOpen } = state;

	const { logged, logout } = useAuth();

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({ ...prevState, mobileView: false }));
		};

		setResponsiveness();

		window.addEventListener("resize", () => setResponsiveness());

		return () => {
			window.removeEventListener("resize", () => setResponsiveness());
		};
	}, []);

	const [open, setOpen] = useState(false);
	const anchorRef = useRef(null);

	const [openModal, setOpenModal] = useState(false);
	const handleOpenModal = () => {
		setOpenModal(true);
	};
	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const [openReg, setOpenReg] = useState(false);
	const handleRegisterCollapse = (event) => {
		setOpenReg((prev) => !prev);
	};

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};
	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}
		setOpen(false);
	};

	// Responsive Submenu
	const [openSubmenu, setOpenSubmenu] = useState(false);
	const handleOpenSubmenu = () => {
		setOpenSubmenu(!openSubmenu);
	};

	function handleListKeyDown(event) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = useRef(open);
	useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}
		prevOpen.current = open;
	}, [open]);

	// HEADER DESKTOP UNTILL 900px
	const displayDesktop = () => {
		return (
			<div>
				<Toolbar className={toolbar}>
					<RouterLink to="/" color="primary">
						<HomeIcon />
					</RouterLink>
					<div>
						<RouterLink className={links} to="/trends" color="primary">
							Trends
						</RouterLink>
						<Button
							className={links}
							ref={anchorRef}
							aria-controls={open ? "menu-list-grow" : undefined}
							aria-haspopup="true"
							onClick={handleToggle}
						>
							Categories
						</Button>
						<Popper
							open={open}
							anchorEl={anchorRef.current}
							role={undefined}
							transition
							disablePortal
						>
							{({ TransitionProps, placement }) => (
								<Grow
									{...TransitionProps}
									style={{
										transformOrigin:
											placement === "bottom" ? "center top" : "center bottom",
									}}
								>
									<Paper>
										<ClickAwayListener onClickAway={handleClose}>
											<MenuList
												autoFocusItem={open}
												id="menu-list-grow"
												onKeyDown={handleListKeyDown}
											>
												<MenuItem onClick={handleClose}>
													<RouterLink
														className={sublinks}
														to="/category/mobile"
													>
														Mobile
													</RouterLink>
												</MenuItem>
												<MenuItem onClick={handleClose}>
													<RouterLink
														className={sublinks}
														to="/category/tablet"
													>
														Tablet
													</RouterLink>
												</MenuItem>
												<MenuItem onClick={handleClose}>
													<RouterLink
														className={sublinks}
														to="/category/laptop"
													>
														Laptop
													</RouterLink>
												</MenuItem>
												<MenuItem onClick={handleClose}>
													<RouterLink
														className={sublinks}
														to="/category/desktop"
													>
														Desktop
													</RouterLink>
												</MenuItem>
												<MenuItem onClick={handleClose}>
													<RouterLink
														className={sublinks}
														to="/category/monitor"
													>
														Monitor
													</RouterLink>
												</MenuItem>
												<MenuItem onClick={handleClose}>
													<RouterLink className={sublinks} to="/category/drone">
														Drone
													</RouterLink>
												</MenuItem>
												<MenuItem onClick={handleClose}>
													<RouterLink
														className={sublinks}
														to="/category/accesories"
													>
														Accesories
													</RouterLink>
												</MenuItem>
											</MenuList>
										</ClickAwayListener>
									</Paper>
								</Grow>
							)}
						</Popper>
						{logged ? (
							<Button className={links} onClick={logout}>
								Sign Out
							</Button>
						) : (
							<Button className={links} onClick={handleOpenModal}>
								Sign In
							</Button>
						)}
						{logged ? (
							""
						) : (
							<Button className={links} onClick={handleRegisterCollapse}>
								Get Started
							</Button>
						)}

						{logged ? (
							<RouterLink className={links} to="/profile">
								Profile
							</RouterLink>
						) : (
							""
						)}
					</div>
				</Toolbar>
				<AnimatedModal open={openModal} onClose={handleCloseModal} />

				<Collapse in={openReg}>
					<RegisterSide />
				</Collapse>
			</div>
		);
	};
	// HEADER DESKTOP UNTILL 900px

	// HEADER MOBILE BELOW 899px
	const displayMobile = () => {
		const handleDrawerOpen = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: true }));
		const handleDrawerClose = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: false }));

		return (
			<div>
				<Collapse in={openReg}>
					<RegisterSide />
				</Collapse>
				<Toolbar className={toolbar}>
					<RouterLink to="/" color="primary">
						<HomeIcon />
					</RouterLink>
					<IconButton edge="end" onClick={handleDrawerOpen}>
						<RouterLink to="/" color="primary">
							<MenuIcon />
						</RouterLink>
					</IconButton>
					<SwipeableDrawer
						anchor="right"
						open={drawerOpen}
						onClose={handleDrawerClose}
					>
						<div className={drawerContainer}>
							<List>
								<ListItem>
									<a href="/">
										<ListItemText primary="Homepage" />
									</a>
								</ListItem>
								<ListItem>
									<a href="/trends">
										<ListItemText primary="Trends" />
									</a>
								</ListItem>
								<ListItem button onClick={handleOpenSubmenu}>
									<ListItemText primary="Categories" />
									{openSubmenu ? <ExpandLess /> : <ExpandMore />}
								</ListItem>
								<Collapse in={openSubmenu} timeout="auto" unmountOnExit>
									<List component="div">
										<ListItem>
											<a href="/category/mobile">
												<ListItemText primary="Mobiles" />
											</a>
										</ListItem>
										<ListItem>
											<a href="/category/tablet">
												<ListItemText primary="Tablets" />
											</a>
										</ListItem>
										<ListItem>
											<a href="/category/laptop">
												<ListItemText primary="Laptops" />
											</a>
										</ListItem>
										<ListItem>
											<a href="/category/desktop">
												<ListItemText primary="Desktops" />
											</a>
										</ListItem>
										<ListItem>
											<a href="/category/monitor">
												<ListItemText primary="Monitors" />
											</a>
										</ListItem>
										<ListItem>
											<a href="/category/drone">
												<ListItemText primary="Drones" />
											</a>
										</ListItem>
										<ListItem>
											<a href="/category/accesories">
												<ListItemText primary="Accesories" />
											</a>
										</ListItem>
									</List>
								</Collapse>
								<ListItem>
									{logged ? (
										<ListItem button onClick={logout}>
											<ListItemText primary="Sign Out" />
										</ListItem>
									) : (
										<ListItem button onClick={handleOpenModal}>
											<ListItemText primary="Sign In" />
										</ListItem>
									)}
								</ListItem>
								<ListItem>
									{logged ? (
										""
									) : (
										<ListItem button onClick={handleRegisterCollapse}>
											<ListItemText primary="Get Started" />
										</ListItem>
									)}
								</ListItem>
								<ListItem>
									{logged ? (
										<ListItem>
											<a href="/profile">
												<ListItemText primary="Profile" />
											</a>
										</ListItem>
									) : (
										""
									)}
								</ListItem>
							</List>
						</div>
					</SwipeableDrawer>
					<AnimatedModal open={openModal} onClose={handleCloseModal} />
				</Toolbar>
			</div>
		);
	};
	// HEADER MOBILE BELOW 899px

	return (
		<header>
			<AppBar className={header}>
				{mobileView ? displayMobile() : displayDesktop()}
			</AppBar>
		</header>
	);
}
