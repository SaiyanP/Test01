const router = require("express").Router();

const ingredientsRouter = require("../routes/ingredients.routes");
const recipeRouter = require("../routes/recipe.routes");

router.use("/ingredients", ingredientsRouter);
router.use("/recipes", recipeRouter);

module.exports = router;
