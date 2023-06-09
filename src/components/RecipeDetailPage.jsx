import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { data } from "../utils/data.js";
import { RecipeCard } from "../components/RecipeCard.jsx";

export const RecipeDetailPage = () => {
    const { label } = useParams();
console.log(decodeURIComponent(label).toLowerCase().trim())
    const recipe = data.hits.find(
        (recipe) => recipe.recipe.label.toLowerCase().trim() === decodeURIComponent(label).toLowerCase().trim()
    );

    if (!recipe) {
        return (
            <Box p={4}>
                <Heading>Recipe not found</Heading>
            </Box>
        );
    }

    return (
        <Box p={4}>
            <RecipeCard recipe={recipe} detailedView={true} />
        </Box>
    );
};

