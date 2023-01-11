const Recipe = require("../models/recipe.model");
const RecipeService = require("../services/recipe.service");

class RecipeController {
  //1.Get all recipes:
  static async getAllRecipes(req, res) {
    try {
      const queryData = req.query;
      const recipes = await RecipeService.getAllRecipes(queryData);

      res.status(200).send(recipes);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  //2.Get Recipe by ID:
  static async getRecipeById(req, res) {
    try {
      const recipeId = req.params.id;
      const recipe = await RecipeService.getRecipeById(recipeId);

      if (!recipe)
        return res
          .status(404)
          .send({ message: `Recipe with ID:${recipeId} not found.` });

      res.status(200).send(recipe);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  //3.Create recipe:
  static async createRecipe(req, res) {
    try {
      const recipeData = req.body;

      const recipe = await RecipeService.createRecipe(recipeData);

      res.status(201).send(recipe);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  //4.Update recipe:
  static async updateRecipe(req, res) {
    try {
      const updateData = req.body;
      const recipeId = req.params.id;

      const updatedRecipe = await RecipeService.updateRecipe(
        recipeId,
        updateData
      );
      res.status(200).send(updatedRecipe);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
  //5.Delete recipe:
  static async deleteRecipe(req, res) {
    try {
      const recipeId = req.params.id;

      const response = await RecipeService.deleteRecipe(recipeId);

      if (!response)
        return res
          .status(404)
          .send({ message: `Recipe with id:${recipeId} not found.` });

      res.status(200).send(response);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
}

module.exports = RecipeController;
