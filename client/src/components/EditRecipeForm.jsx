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
      className="bg-white rounded-lg shadow-md p-6 mb-6 grid md:grid-cols-2 gap-6 min-h-[320px]"
    >
      {/* Left side: Title + Photo */}
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded px-3 py-2 mb-4"
          placeholder="Recipe title"
        />
        <label className="mb-2 font-semibold">Photo URL:</label>
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          className="border rounded px-3 py-2 mb-4"
          placeholder="Photo URL"
        />
        {photo && (
          <img
            src={photo}
            alt={title}
            className="mt-auto rounded max-w-full object-cover"
            style={{ maxHeight: '180px' }}
          />
        )}
      </div>

      {/* Right side: Ingredients and Instructions */}
      <div className="flex flex-col justify-between">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="mb-2 font-semibold block">Ingredients:</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
              rows={8}
              className="border rounded px-3 py-2 w-full resize-none"
              placeholder="List ingredients here"
        />
          </div>
          <div>
            <label className="mb-2 font-semibold block">Instructions:</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
              rows={8}
              className="border rounded px-3 py-2 w-full resize-none"
              placeholder="Write instructions here"
        />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
