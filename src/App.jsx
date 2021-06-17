import React, { useState } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Category from "./components/categories/category" 

function App() {
	return (
		<div>
			<Header />
			<Category />
			<Footer />
		</div>
	);
}

export default App;
