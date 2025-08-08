import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import RecipeList from './components/RecipeList.jsx';
import AddRecipe from './components/AddRecipe.jsx';

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/recipes')
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(console.error);
  }, []);

  const addRecipe = (recipe) => {
    setRecipes(prev => [...prev, recipe]);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/recipes/${id}`, { method: 'DELETE' });
    setRecipes(prev => prev.filter(r => r._id !== id));
  };

  const handleUpdate = async (updatedRecipe) => {
    try {
      const response = await fetch(`http://localhost:5000/api/recipes/${updatedRecipe._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedRecipe),
      });

      if (!response.ok) throw new Error('Failed to update recipe');

      const data = await response.json();

      setRecipes(prev =>
        prev.map(r => (r._id === data._id ? data : r))
      );
      setEditingId(null); // exit edit mode after success
    } catch (error) {
      console.error('Update error:', error);
      alert('Failed to update recipe. Please try again.');
    }
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 max-w-7xl mx-auto flex flex-col">
      <Header />
      <div className="flex flex-1 mt-6 gap-8">
        <div className="w-1/3">
          <AddRecipe onAdd={addRecipe} />
        </div>
        <div className="w-2/3 h-[80vh] overflow-y-auto">
          <RecipeList
            recipes={recipes}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
            onEdit={handleEdit}
            editingId={editingId}
            onCancelEdit={handleCancelEdit}
          />
        </div>
      </div>
    </div>
  );
}
