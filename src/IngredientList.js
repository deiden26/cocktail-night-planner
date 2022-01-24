import axios from 'axios';
import shallow from 'zustand/shallow';
import { useQueries } from 'react-query';

import Paper from '@mui/material/Paper';

import IngredientCard from './IngredientCard';
import NoIngredientsAlert from './NoIngredientsAlert';
import { useStore } from './store';

export default function IngredientList() {
  const cocktails = useStore(state => state.cocktails, shallow);
  const allIngredients = new Set();

  const cocktailQueries = useQueries(
    cocktails.map(cocktail => ({
      queryKey: ['cocktail-ingredients', cocktail.id],
      queryFn: async () => {
        const response = await axios.get(
          'https://www.thecocktaildb.com/api/json/v1/1/lookup.php',
          { params: { i: cocktail.id } }
        );
        const drink = response.data.drinks[0];

        const ingredients = [];
        for (let i = 1; i <= 15; i++) {
          const ingredient = drink[`strIngredient${i}`];
          if (ingredient) {
            ingredients.push(ingredient);
          }
        }
        return ingredients;
      }
    }))
  );

  cocktailQueries.forEach(({ data: ingredients }) => {
    ingredients?.forEach(ingredient => allIngredients.add(ingredient));
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
