const IngredientsController = require("../controllers/ingredients.controller");

const router = require("express").Router();

//1.Get all indgredients:
router.get("/", IngredientsController.getAllIngredients);

//2.Add Ingredients:
router.post("/", IngredientsController.addIngredients);

module.exports = router;
