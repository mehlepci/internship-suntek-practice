import { useState } from 'react';
import Header from './components/Header.jsx';
import RecipeList from './components/RecipeList.jsx';
import AddRecipe from './components/AddRecipe.jsx';

export default function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 max-w-7xl mx-auto flex flex-col">
      <Header />
      {/* Main content area: two columns */}
      <div className="flex flex-1 mt-6 gap-8">
        {/* Left side: AddRecipe form */}
        <div className="w-1/3">
          <AddRecipe onAdd={addRecipe} />
        </div>

        {/* Right side: RecipeList with scroll */}
        <div className="w-2/3 h-[80vh] overflow-y-auto">
          <RecipeList recipes={recipes} />
        </div>
      </div>
    </div>
  );
}
