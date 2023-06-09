import {
	Box,
	Heading,
	Center,
	Input,
	InputGroup,
	InputLeftElement,
	Wrap,
	WrapItem, Stack,
} from "@chakra-ui/react";

import { useState } from "react";
import "./MainPage.css";
import { data } from "../utils/data.js";
import { SearchIcon } from "@chakra-ui/icons";
import { RecipeCard } from "../components/RecipeCard.jsx";

export const RecipesPage = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [recipes, setRecipes] = useState(data.hits);

	const handleSearch = (event) => {
		const term = event.target.value.toLowerCase();
		setSearchTerm(term);
		setRecipes(
			data.hits.filter(
				(recipe) =>
					recipe.recipe.label.toLowerCase().includes(term) ||
					recipe.recipe.ingredientLines
						.map((ingredient) => ingredient.toLowerCase())
						.includes(term)
			)
		);
	};

	return (
		<Box className="box-content">
			<Center flexDir="column">
				<Heading>Recipe Checker</Heading>
				<InputGroup maxW="lg" mt={4} size="md">
					<div className="search-input-container">
						<Center><SearchIcon color="gray.300" /></Center>
						<InputLeftElement pointerEvents="none">

						</InputLeftElement>
						<Input
							type="text"
							placeholder="Search recipes..."
							value={searchTerm}
							onChange={handleSearch}
							backgroundColor="white"
							className="search-input"
						/>
					</div>
				</InputGroup>
			</Center>
				<Wrap mt={4} spacing="2rem" className="row">
					{recipes.map((recipe) => (
						<WrapItem key={recipe.recipe.url} className="recipe-card">
							<RecipeCard recipe={recipe} detailedView={false} />
						</WrapItem>
					))}
				</Wrap>

		</Box>
	);
};

