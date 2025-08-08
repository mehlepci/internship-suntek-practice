export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 m-3 max-w-full hover:shadow-lg transition-shadow duration-300 flex">
      {/* Image on the left */}
      <img
        src={recipe.photo}
        alt={recipe.title}
        className="rounded-md object-cover w-48 h-48 flex-shrink-0"
      />

      {/* Content on the right */}
      <div className="flex flex-col flex-grow ml-6">
        {/* Title and buttons on the same horizontal line */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">{recipe.title}</h2>
          <div className="space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition">
              Edit
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition">
              Delete
            </button>
          </div>
        </div>

        {/* Ingredients and instructions side by side */}
        <div className="flex gap-6">
          <p className="text-gray-700 whitespace-pre-line flex-1">{recipe.ingredients}</p>
          <p className="text-sm text-gray-500 italic whitespace-pre-line flex-1">{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
}
