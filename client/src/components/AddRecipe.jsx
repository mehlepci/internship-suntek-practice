import { useState } from 'react';

export default function AddRecipe({ onAdd }) {
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !photo || !ingredients || !instructions) return;

    onAdd({ title, photo, ingredients, instructions });

    // Clear inputs
    setTitle('');
    setPhoto('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow max-w-md mx-auto mt-8"
    >
      <h2 className="text-2xl font-semibold mb-4">Add New Recipe</h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 border rounded mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Image URL"
        className="w-full p-2 border rounded mb-3"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />

      <textarea
        placeholder="Ingredients (e.g. 1 egg, 2 cups flour...)"
        className="w-full p-2 border rounded mb-3"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />

      <textarea
        placeholder="Instructions"
        className="w-full p-2 border rounded mb-3"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />

      <button
        type="submit"
        className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
      >
        Add Recipe
      </button>
    </form>
  );
}

//aynısını tsx ile yap 
//validation için libraryler var react-hook-form & zod !!!!!