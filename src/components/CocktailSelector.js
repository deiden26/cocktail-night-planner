import axios from 'axios';
import { useQuery } from 'react-query';
import { useState, useCallback } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { useCocktails } from '../stores/cocktailStore';
import { useSnackbar } from '../stores/snackbarStore';

export default function CocktailSelector() {
  const addCocktail = useCocktails(state => state.addCocktail);
  const hasCocktail = useCocktails(state => state.hasCocktail);

  const snack = useSnackbar(state => state.snack);

  const [ searchString, setSearchString ] = useState('');

  const { data: cocktailOptions, isLoading } = useQuery(
    ['cocktail-search', searchString],
    async () => {
      if (searchString.length < 3) {
        return [];
      }

      const response = await axios.get(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php',
        { params: { s: searchString } }
      );

      return (response.data.drinks || []).map(drink => ({
        name: drink.strDrink,
        id: drink.idDrink
      }));
    }
  );

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

    addCocktail(cocktail);
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
