import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import RecipeList from './components/RecipeList.jsx';
import AddRecipe from './components/AddRecipe.jsx';

const API_URL = 'http://localhost:5000/api/recipes';

export default function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  const addRecipe = async (recipe) => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recipe),
      });

      if (!res.ok) throw new Error('Failed to add recipe');

      const savedRecipe = await res.json();
      setRecipes([...recipes, savedRecipe]);
    } catch (error) {
      console.error('Add recipe error:', error);
    }
  };

  const deleteRecipe = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setRecipes(prev => prev.filter(recipe => recipe._id !== id));
      } else {
        throw new Error('Failed to delete recipe');
      }
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 max-w-7xl mx-auto flex flex-col">
      <Header />
      <div className="flex flex-1 mt-6 gap-8">
        <div className="w-1/3">
          <AddRecipe onAdd={addRecipe} />
        </div>
        <div className="w-2/3 h-[80vh] overflow-y-auto">
          <RecipeList recipes={recipes} onDelete={deleteRecipe} />
        </div>
      </div>
    </div>
  );
}
