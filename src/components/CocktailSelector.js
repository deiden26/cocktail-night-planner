import { useState, useCallback } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { useSearchCocktails } from '../api';
import { useCocktails } from '../stores/cocktailStore';
import { useSnackbar } from '../stores/snackbarStore';

export default function CocktailSelector() {
  const addCocktail = useCocktails(state => state.addCocktail);
  const hasCocktail = useCocktails(state => state.hasCocktail);

  const snack = useSnackbar(state => state.snack);

  const [ searchString, setSearchString ] = useState('');

  const { data: cocktailOptions, isLoading } = useSearchCocktails(searchString);

  const selectCocktail = useCallback(cocktail => {
    if (!cocktail) {
      return;
    }

    if (hasCocktail(cocktail.id)) {
      snack({
        title: 'Cannot Add Cocktail',
        message: `${cocktail.name} is already in your list`,
        severity: 'error',
      });
      return;
    }

    addCocktail(cocktail.id);
    setSearchString('');
  }, [addCocktail, hasCocktail, snack]);

  return (
    <Autocomplete
      onChange={(_e, cocktail) => selectCocktail(cocktail)}
      onInputChange={(_e, value) => setSearchString(value)}
      value={null}
      inputValue={searchString}
      loading={isLoading}
      options={cocktailOptions || []}
      getOptionLabel={option => option.name}
      autoHighlight={true}
      renderInput={(params) => <TextField {...params} label="Enter a Cocktail" />}
      open={Boolean(cocktailOptions?.length)}
      forcePopupIcon={false}
    />
  );
}
