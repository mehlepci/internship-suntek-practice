export default function RecipeCard({ recipe, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 m-3 max-w-full hover:shadow-lg transition-shadow duration-300 flex">
      <img
        src={recipe.photo}
        alt={recipe.title}
        className="rounded-md object-cover w-48 h-48 flex-shrink-0"
      />
      <div className="flex flex-col flex-grow ml-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">{recipe.title}</h2>
          <div className="space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition">
              Edit
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition"
              onClick={() => onDelete(recipe._id)}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="flex gap-6">
          <p className="text-gray-700 whitespace-pre-line flex-1">{recipe.ingredients}</p>
          <p className="text-sm text-gray-500 italic whitespace-pre-line flex-1">{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
}
