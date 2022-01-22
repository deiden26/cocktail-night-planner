import Paper from '@mui/material/Paper';

import IngredientCard from './IngredientCard';
import NoIngredientsAlert from './NoIngredientsAlert';

export default function IngredientList() {
  const ingredients = ['Taquila', 'Rum', 'Lime'];
  // const ingredients = [];

  return (
    <>
      {ingredients.length === 0 &&
        <NoIngredientsAlert/>
      }
      {ingredients.length > 0 &&
        <Paper
          elevation={1}
          sx={{ width: '100%', height: '100%', p: 2 }}
        >
          {ingredients.map(ingredient => (
            <IngredientCard key={ingredient} name={ingredient}/>
          ))}
        </Paper>
      }
    </>
  );
}
