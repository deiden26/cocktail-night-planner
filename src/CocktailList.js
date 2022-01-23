import shallow from 'zustand/shallow';

import Stack from '@mui/material/Stack';

import CocktailCard from './CocktailCard';
import { useStore } from './store';

export default function CocktailList() {
  const cocktails = useStore(state => state.cocktails, shallow);

  return (
    <Stack spacing={1}>
      {cocktails.map(cocktail => (
        <CocktailCard
          key={cocktail.id}
          id={cocktail.id}
          name={cocktail.name}
        />
      ))}
    </Stack>
  );
}
