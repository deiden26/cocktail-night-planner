import Stack from '@mui/material/Stack';

import CocktailList from './CocktailList';
import CocktailSelector from './CocktailSelector';

export default function Cocktails() {
  return(
    <Stack spacing={3}>
      <CocktailSelector/>
      <CocktailList/>
    </Stack>
  );
}
