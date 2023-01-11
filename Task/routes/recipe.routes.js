const router = require("express").Router();
const RecipeController = require("../controllers/recipe.controller");

//1.Get all recipes:
router.get("/", RecipeController.getAllRecipes);

//2.Get recipe by ID:
router.get("/:id", RecipeController.getRecipeById);

//3.Create a recipe:
router.post("/", RecipeController.createRecipe);

//4.Update recipe:
router.patch("/:id", RecipeController.updateRecipe);

//5.Delete recipe:
router.delete("/:id", RecipeController.deleteRecipe);

module.exports = router;
