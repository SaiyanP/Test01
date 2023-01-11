const mongoose = require("mongoose");
const { Schema } = mongoose;

const ingredientsSchema = new Schema({
  ingredients: {
    type: Array,
  },
});

const Ingredients = mongoose.model("Ingredients", ingredientsSchema);
module.exports = Ingredients;
