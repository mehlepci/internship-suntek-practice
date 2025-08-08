const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: String,
  ingredients: String,
  instructions: String,
  photo: String
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
