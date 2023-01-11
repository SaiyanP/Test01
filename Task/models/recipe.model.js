const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipeSchema = new Schema({
  recipeName: {
    type: String,
    required: [true, "Recipe name is required."],
    minlength: 2,
  },
  recipeSource: {
    type: String,
    required: [true, "Recipe source is required."],
  },
  ingredients: {
    type: Array,
    required: true,
  },
  preparationTime: {
    type: Number,
    default: 0,
    required: true,
  },
  preparationInstrucions: {
    type: String,
    required: true,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
