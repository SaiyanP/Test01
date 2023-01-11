const Ingredients = require("../models/ingredients.model");

class IngredientsService {
  //1.Get all Ingredients:
  static async getAllIngredients(queryData) {
    const ingredients = await Ingredients.find(queryData || {}).setOptions({
      sanitizeFilter: true,
    });
    return ingredients;
  }

  //1.Add ingredients:
  static async addIngredients(ingredientsData) {
    const ingredients = new Ingredients(ingredientsData);

    const response = await ingredients.save();
    console.log(response);
    return ingredients;
  }
}

module.exports = IngredientsService;
