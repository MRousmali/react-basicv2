import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {RecipeDetailPage} from "./components/RecipeDetailPage.jsx";
import {RecipesPage} from "./pages/RecipesPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Router>
		<Routes>
			<Route path="/" element={<RecipesPage />} />
			<Route path="/recipes/:label" element={<RecipeDetailPage />} />
		</Routes>
	</Router>,
	document.getElementById("root")
);