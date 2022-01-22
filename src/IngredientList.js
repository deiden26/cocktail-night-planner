import Paper from '@mui/material/Paper';
import IngredientCard from './IngredientCard';

export default function IngredientList() {
  const ingredients = ['Taquila', 'Rum', 'Lime'];

  return (
    <Paper
      elevation={1}
      sx={{ width: '100%', height: '100%', p: 2 }}
    >
      {ingredients.map(ingredient => (
        <IngredientCard key={ingredient} name={ingredient}/>
      ))}
    </Paper>
  );
}
