const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// GET all recipes
router.get('/', async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
});

// POST create recipe
router.post('/', async (req, res) => {
  const newRecipe = new Recipe(req.body);
  const saved = await newRecipe.save();
  res.status(201).json(saved);
});

router.put('/:id', async (req, res) => {
  const updated = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});


// DELETE recipe
router.delete('/:id', async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
