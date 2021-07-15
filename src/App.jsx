import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthProvider from "./components/auth-provider";
import Private from "./components/private-route";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Topic from "./components/topics/topic";
import Search from "./components/search/search";
import TopicView from "./components/topics/topicView";

import Home from "./components/pages/home";
import Trends from "./components/pages/trends";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Profile from "./components/pages/profile";
import PrivacyPolicy from "./components/pages/privacyPolicy";
import CookiesPolicy from "./components/pages/cookiesPolicy";
import SearchResults from "./components/pages/searchResults";

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Header />

				<Switch>
					<Private exact path="/profile">
						<Profile />
					</Private>

					<Route exact path="/cookies-policy">
						<CookiesPolicy />
					</Route>

					<Route exact path="/privacy-policy">
						<PrivacyPolicy />
					</Route>

					<Route exact path="/search-results">
						<SearchResults />
					</Route>

					<Route exact path="/contact">
						<Contact />
					</Route>

					<Route exact path="/about">
						<About />
					</Route>

					<Route exact path="/trends">
						<Trends />
					</Route>

					<Route exact path="/create-topic">
						<Topic />
					</Route>

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
