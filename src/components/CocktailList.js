import shallow from 'zustand/shallow';

import Stack from '@mui/material/Stack';

import CocktailCard from './CocktailCard';

import { useCocktails } from '../stores/cocktailStore';

export default function CocktailList() {
  const cocktailIds = useCocktails(state => state.cocktailIds, shallow);

  return (
    <Stack spacing={1}>
      {cocktailIds.map(cocktailId => (
        <CocktailCard
          key={cocktailId}
          id={cocktailId}
        />
      ))}
    </Stack>
  );
}
