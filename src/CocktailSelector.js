import { useState, useCallback } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useStore } from './store';

export default function CocktailSelector() {
  const addCocktail = useStore(state => state.addCocktail);

  const [ searchString, setSearchString ] = useState('');

  const { data: cocktails, isLoading } = useQuery(
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
    // TODO: Prevent Dupes
    if (cocktail) {
      addCocktail(cocktail);
      setSearchString('');
    }
  }, [addCocktail]);

  return (
    <Autocomplete
      onChange={(_e, cocktail) => selectCocktail(cocktail)}
      onInputChange={(_e, value) => setSearchString(value)}
      value={null}
      inputValue={searchString}
      loading={isLoading}
      options={cocktails || []}
      getOptionLabel={option => option.name}
      autoHighlight={true}
      renderInput={(params) => <TextField {...params} label="Enter a Cocktail" />}
      open={Boolean(cocktails?.length)}
      forcePopupIcon={false}
    />
  );
}
