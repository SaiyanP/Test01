const Recipe = require("../models/recipe.model");

class RecipeService {
  //1.Get all recipes:
  static async getAllRecipes() {
    const recipes = await Recipe.find({});

    return recipes;
  }

  //2.Get recipe by ID:
  static async getRecipeById(recipeId) {
    const recipe = await Recipe.findById(recipeId);

    return recipe;
  }

  //3.Create a recipe:
  static async createRecipe(recipeData) {
    const recipe = new Recipe(recipeData);

    const response = await recipe.save();
    return recipe;
  }

  //4.Update recipe:
  static async updateRecipe(recipeId, updateData) {
    const recipe = await Recipe.findById(recipeId);

    if (!recipe) return Promise.reject({ msg: "Recipe not found." });

    const updateKeys = Object.keys(updateData);

    updateKeys.forEach((key) => {
      if (key !== "_id") {
        recipe[key] = updateData[key];
      }
    });

    const updatedRecipe = await recipe.save();

    return updatedRecipe;
  }
  //5.Delete recipe:
  static async deleteRecipe(recipeId) {
    await Recipe.findByIdAndDelete(recipeId);
  }
}

module.exports = RecipeService;
