const Ingredients = require("../models/ingredients.model");
const IngredientsService = require("../services/ingredients.service");

class IngredientsController {
  //1.Get all ingredients:
  static async getAllIngredients(req, res) {
    try {
      const queryData = req.query;
      const ingredients = await IngredientsService.getAllIngredients(queryData);

      res.status(200).send(ingredients);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  //2.Add ingredients:
  static async addIngredients(req, res) {
    try {
      const ingredientsData = req.body;

      const ingredients = await IngredientsService.addIngredients(
        ingredientsData
      );
      console.log(ingredients);

      res.status(200).send(ingredients);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
}

module.exports = IngredientsController;
