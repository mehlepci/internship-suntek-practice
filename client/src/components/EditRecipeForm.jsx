import { useState } from 'react';

export default function EditRecipeForm({ recipe, onSave, onCancel }) {
  const [title, setTitle] = useState(recipe.title);
  const [ingredients, setIngredients] = useState(recipe.ingredients || '');
  const [instructions, setInstructions] = useState(recipe.instructions || '');
  const [photo, setPhoto] = useState(recipe.photo || '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedRecipe = {
      ...recipe,
      title,
      ingredients,
      instructions,
      photo,
    };

    try {
      const response = await fetch(`http://localhost:5000/api/recipes/${recipe._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedRecipe),
      });

      if (!response.ok) {
        throw new Error('Failed to update recipe');
      }

      const data = await response.json();
      onSave(data); // Update in parent
    } catch (error) {
      console.error(error);
      alert('Failed to update recipe');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 p-4 bg-white rounded shadow-md max-w-full"
      style={{ minWidth: '600px' }}
    >
      <div className="flex flex-col w-1/3">
        <label className="mb-1 font-semibold">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded px-2 py-1"
          required
        />
        <label className="mt-3 mb-1 font-semibold">Photo URL</label>
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          className="border rounded px-2 py-1"
        />
        {photo && (
          <img src={photo} alt={title} className="mt-2 rounded max-h-40 object-cover" />
        )}
      </div>

      <div className="flex flex-col flex-grow">
        <label className="mb-1 font-semibold">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="border rounded px-2 py-1 h-32 resize-none"
          required
        />

        <label className="mt-3 mb-1 font-semibold">Instructions</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="border rounded px-2 py-1 h-32 resize-none"
          required
        />

        <div className="mt-4 flex gap-2">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-400 text-black px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
