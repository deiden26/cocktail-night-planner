import shallow from 'zustand/shallow';

import Paper from '@mui/material/Paper';

import IngredientCard from './IngredientCard';
import NoIngredientsAlert from './NoIngredientsAlert';

import { useGetCocktails } from '../api';
import { useCocktails } from '../stores/cocktailStore';

export default function IngredientList() {
  const cocktailIds = useCocktails(state => state.cocktailIds, shallow);
  const allIngredients = new Set();

  const cocktailQueries = useGetCocktails(cocktailIds);

  cocktailQueries.forEach(({ data: cocktail, isLoading }) => {
    if (isLoading) {
      return;
    }
    cocktail.ingredients.forEach(ingredient => allIngredients.add(ingredient));
  });

  return (
    <>
      {allIngredients.size === 0 &&
        <NoIngredientsAlert/>
      }
      {allIngredients.size > 0 &&
        <Paper
          elevation={1}
          sx={{ width: '100%', height: '100%', p: 2 }}
        >
          {[...allIngredients].map(ingredient => (
            <IngredientCard key={ingredient} name={ingredient}/>
          ))}
        </Paper>
      }
    </>
  );
}
