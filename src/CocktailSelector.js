import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function CocktailSelector() {
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

      return response.data.drinks.map(drink => ({
        name: drink.strDrink,
        id: drink.idDrink
      }));
    }
  );

  return (
    <Autocomplete
      loading={isLoading}
      options={cocktails || []}
      getOptionLabel={option => option.name}
      autoHighlight={true}
      renderInput={(params) => <TextField {...params} label="Enter a Cocktail" />}
      onInputChange={(_e, value) => setSearchString(value)}
      noOptionsText='Start typing the name of a drink...'
      open={Boolean(cocktails?.length)}
      forcePopupIcon={false}
    />
  );
}
