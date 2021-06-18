import React, { useState } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Topic from "./components/topics/topic";
import TopicView from "./components/topics/topicView";

function App() {
	return (
		<div>
			<Header />
			<TopicView title='Esto es una Prueba' posts='Prueba prueba prueba pruebna' />
			<Topic />
			<Footer />
		</div>
	);
}

export default App;
