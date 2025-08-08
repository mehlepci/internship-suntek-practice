import RecipeCard from './RecipeCard';

export default function RecipeList({ recipes }) {
  if (!recipes.length) {
    return <p className="text-center text-gray-500 mt-8">No recipes yet.</p>;
  }

  return (
    <div className="flex flex-wrap justify-center mt-6">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
}
