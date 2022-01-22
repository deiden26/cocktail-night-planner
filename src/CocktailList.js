import Stack from '@mui/material/Stack';

import CocktailCard from './CocktailCard';

export default function CocktailList() {
  const cocktails = ["Martini", "High Ball"];
  // const cocktails = [];

  return (
    <Stack spacing={1}>
      {cocktails.map(cocktailName => (
        <CocktailCard key={cocktailName} name={cocktailName}/>
      ))}
    </Stack>
  );
}
