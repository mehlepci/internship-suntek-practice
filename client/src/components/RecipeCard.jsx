import { useState } from 'react';

const RecipeCard = ({ recipe, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState({ ...recipe });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/recipes/${editedRecipe._id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editedRecipe),
        }
      );

      if (!response.ok) throw new Error('Failed to update recipe');

      const updated = await response.json();
      onUpdate(updated); // update parent state
      setIsEditing(false);
    } catch (error) {
      console.error('Update error:', error);
      alert('Failed to update recipe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 grid md:grid-cols-2 gap-6 items-start mb-6">
      {isEditing ? (
        <>
          <div className="md:col-span-2">
            <input
              type="text"
              name="title"
              value={editedRecipe.title}
              onChange={handleChange}
              className="mb-4 border px-3 py-2 rounded w-full text-xl font-bold"
              placeholder="Title"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Photo URL</label>
            <input
              type="text"
              name="photo"
              value={editedRecipe.photo}
              onChange={handleChange}
              className="mb-4 border px-3 py-2 rounded w-full"
              placeholder="Photo URL"
            />
            {editedRecipe.photo && (
              <img
                src={editedRecipe.photo}
                alt={editedRecipe.title}
                className="rounded-lg w-full object-cover max-h-48"
              />
            )}
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Ingredients</label>
            <textarea
              name="ingredients"
              value={editedRecipe.ingredients}
              onChange={handleChange}
              className="mb-4 border px-3 py-2 rounded h-32 resize-y"
              placeholder="Ingredients"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Instructions</label>
            <textarea
              name="instructions"
              value={editedRecipe.instructions}
              onChange={handleChange}
              className="mb-4 border px-3 py-2 rounded h-32 resize-y"
              placeholder="Instructions"
            />
          </div>

          <div className="md:col-span-2 flex gap-3">
            <button
              onClick={handleSave}
              disabled={loading}
              className={`px-4 py-2 rounded text-white ${
                loading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {loading ? 'Saving...' : 'Save'}
            </button>
            <button
              onClick={() => setIsEditing(false)}
              disabled={loading}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          {/* Left side: Title and photo */}
          <div>
            <h2 className="text-2xl font-bold text-pink-700 mb-4">
              {recipe.title}
            </h2>
            {recipe.photo && (
              <img
                src={recipe.photo}
                alt={recipe.title}
                className="rounded-lg w-full object-cover max-h-64"
              />
            )}
          </div>

          {/* Right side: Ingredients & Instructions + Buttons */}
          <div className="flex flex-col justify-between">
            <div className="flex gap-6 mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-pink-600 mb-2">
                  Ingredients
                </h3>
                <p className="text-gray-700 whitespace-pre-wrap">
                  {recipe.ingredients}
                </p>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-pink-600 mb-2">
                  Instructions
                </h3>
                <p className="text-gray-700 whitespace-pre-wrap">
                  {recipe.instructions}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(recipe._id)}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeCard;
