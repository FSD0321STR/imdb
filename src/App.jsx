import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthProvider from "./components/auth-provider";
import Private from "./components/private-route";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Categories from "./components/pages/categories";
import Trends from "./components/pages/trends";
import Contact from "./components/pages/contact";
import Profile from "./components/pages/profile";
import privacyPolicy from "./components/pages/privacy-policy";
import cookiesPolicy from "./components/pages/cookies-policy";
import termsOfUse from "./components/pages/terms-of-use";
import searchResults from "./components/pages/search-results";


function App() {
	return (
		<BrowserRouter>

			<AuthProvider>

				<Header />

				<Switch>

					<Route exact path="/terms-of-use">
						<termsOfUse />
					</Route>

					<Route exact path="/cookies-policy">
						<CookiesPolicy />
					</Route>

					<Route exact path="/privacy-policy">
						<privacyPolicy />
					</Route>

					<Route exact path="/search-results">
						<searchResults />
					</Route>

					<Route exact path="/contact">
						<Contact />
					</Route>

					<Route exact path="/trends">
						<Trends />
					</Route>

					<Route exact path="/categories">
						<Categories />
					</Route>

					<Route exact path="/about">
						<About />
					</Route>

					<Private exact path="/profile">
						<Profile />
					</Private>

					<Route path="/">
						<Home />
					</Route>

				</Switch>

				<Footer />

			</AuthProvider>

		</BrowserRouter>

	);
}

export default App;
