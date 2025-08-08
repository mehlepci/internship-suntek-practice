import RecipeCard from './RecipeCard';

export default function RecipeList({ recipes, onDelete, onUpdate, onEdit, editingId, onCancelEdit }) {
  if (!recipes.length) {
    return <p className="text-center text-gray-500 mt-8">No recipes yet.</p>;
  }

  return (
    <div className="flex flex-wrap justify-center mt-6">
      {recipes.map(recipe => (
        <RecipeCard
          key={recipe._id}
          recipe={recipe}
          onDelete={onDelete}
          onUpdate={onUpdate}
          isEditing={editingId === recipe._id}
          onEdit={() => onEdit(recipe._id)}
          onCancelEdit={onCancelEdit}
        />
      ))}
    </div>
  );
}
