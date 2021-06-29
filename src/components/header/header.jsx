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
	Drawer,
	Typography,
	Link,
} from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles(() => ({
	header: {
		position: "relative",
		marginBottom: "60px",
		backgroundColor: "#efefef",
		paddingRight: "0",
		paddingLeft: "0",
		"@media (max-width: 900px)": {
			paddingLeft: 0,
		},
	},
	menuButton: {
		fontFamily: "Open Sans, sans-serif",
		fontWeight: 700,
		size: "18px",
		marginLeft: "38px",
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
		verticalAlign: "baseline",
	},
}));

export default function Header() {
	const { header, menuButton, toolbar, drawerContainer, links, sublinks } =
		useStyles();

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
			/*
            <Toolbar className={toolbar}>
				<RouterLink to="/" color="primary">
					<HomeIcon />
				</RouterLink>
				<div>{getMenuButtons()}</div>
			</Toolbar>
            */
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
													<a className={sublinks} href="/category/mobile">
														Mobile
													</a>
												</MenuItem>
												<MenuItem onClick={handleClose}>
													<a className={sublinks} href="/category/tablet">
														Tablet
													</a>
												</MenuItem>
												<MenuItem onClick={handleClose}>
													<a className={sublinks} href="/category/laptop">
														Laptop
													</a>
												</MenuItem>
												<MenuItem onClick={handleClose}>
													<a className={sublinks} href="/category/desktop">
														Desktop
													</a>
												</MenuItem>
												<MenuItem onClick={handleClose}>
													<a className={sublinks} href="/category/monitor">
														Monitor
													</a>
												</MenuItem>
												<MenuItem onClick={handleClose}>
													<a className={sublinks} href="/category/drone">
														Drone
													</a>
												</MenuItem>
												<MenuItem onClick={handleClose}>
													<a className={sublinks} href="/category/accesories">
														Accesories
													</a>
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

						<RouterLink className={links} to="/profile">
							Profile
						</RouterLink>
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
			<Toolbar>
				<IconButton
					{...{
						edge: "start",
						color: "inherit",
						"aria-label": "menu",
						"aria-haspopup": "true",
						onClick: handleDrawerOpen,
					}}
				>
					<MenuIcon />
				</IconButton>

				<Drawer
					{...{
						anchor: "left",
						open: drawerOpen,
						onClose: handleDrawerClose,
					}}
				>
					<div className={drawerContainer}>{getDrawerChoices()}</div>
				</Drawer>

				<div>{femmecubatorLogo}</div>
			</Toolbar>
		);
	};
	// HEADER MOBILE BELOW 899px

	// MENU OPTIONS
	/*
	const getDrawerChoices = () => {
		return headersData.map(({ label, href }) => {
			return (
				<Link
					{...{
						component: RouterLink,
						to: href,
						color: "inherit",
						style: { textDecoration: "none" },
						key: label,
					}}
				>
					<MenuItem>{label}</MenuItem>
				</Link>
			);
		});
	};

	
	const femmecubatorLogo = (
		<Typography variant="h6" component="h1" className={logo}>
			Femmecubator
		</Typography>
	);

	const getMenuButtons = () => {
		return headersData.map(({ label, href }) => {
			return (
				<Button
					{...{
						key: label,
						color: "inherit",
						to: href,
						component: RouterLink,
						className: menuButton,
					}}
				>
					{label}
				</Button>
			);
		});
	};
    */
	// MENU OPTIONS

	return (
		<header>
			<AppBar className={header}>
				{mobileView ? displayMobile() : displayDesktop()}
			</AppBar>
		</header>
	);
}
